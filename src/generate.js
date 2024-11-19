import fg from "fast-glob";
import { readFile, writeFile, readdir } from "fs/promises";
import css from "css";
import fs, { existsSync } from "fs";
import fm from "gray-matter";
import path from "path";

/**
 * Retrieves the 'id', 'hash', 'source', and 'filePath' property from the front matter of all Markdown files in a given directory.
 *
 * @param {string} directory - The path to the directory containing Markdown files.
 * @returns {Promise<Array<{ filePath: string, id: any }>>} - A promise that resolves to an array of objects,
 * each containing the file path and the 'id' property from the front matter.
 */
async function getIdsFromFrontMatter(directory) {
  try {
    // Read all entries in the directory
    const entries = await readdir(directory, { withFileTypes: true });

    // Filter for Markdown files
    const mdFiles = entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map((entry) => path.join(directory, entry.name));

    // Process each Markdown file
    const results = await Promise.all(
      mdFiles.map(async (filePath) => {
        const content = await readFile(filePath, "utf-8");
        const { data } = fm(content);
        return {
          filePath,
          id: data.cassi?.id,
          hash: data.cassi?.hash,
          source: data.cassi?.source,
        };
      })
    );

    return results;
  } catch (error) {
    console.error("Error reading front matter:", error);
    throw error;
  }
}

/**
 * Generates markdown files for CSS rules by using OpenAI API.
 * @param {string} cssPattern - Glob pattern to locate CSS files.
 * @param {string} exampleFile - Path to an example file.
 * @param {string} outputDir - Directory to save generated markdown files.
 * @returns {Promise<void>}
 */
export async function generate(
  cssPattern,
  outputDir = null,
  exampleFile = null,
  force = false
) {
  const openAiUrl = process.env.OPENAI_BASE_URL ?? "http://localhost:11434/v1";
  const openAiUrlSuffix = process.env.OPENAI_BASE_URL_SUFFIX ?? "";
  const openAiKey = process.env.OPENAI_API_KEY ?? "ollama";
  const model = process.env.CASSI_MODEL_NAME ?? "qwen2.5-coder:latest"; //"llama3.2";

  if (!outputDir) outputDir = "./output";

  //Should use the prompt file in the same directory as the script
  let promptFile = path.join(import.meta.dirname, "prompt.txt");

  if (!fs.existsSync(promptFile))
    throw new Error("Prompt file not found: " + exampleFile);

  if (!existsSync(exampleFile)) {
    if (exampleFile != null)
      console.warn(
        `Cassi: Could not find example file: ${exampleFile}. Using default example...`
      );
    exampleFile = path.join(import.meta.dirname, "example.md");
  }

  console.log(
    `Cassi: I am starting on the documentation for these files ${cssPattern}, using model: ${model}...`
  );

  let currentFiles = [];
  let existingFiles = [];
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, {recursive: true });
  } else {
    existingFiles = await getIdsFromFrontMatter(outputDir);
  }

  let promptTemplate = await readFile(promptFile, "utf-8");
  const exampleTemplate = await readFile(exampleFile, "utf-8");

  const cssFiles = await fg(cssPattern);
  console.log(
    `Cassi: Found ${cssFiles.length} CSS files to process matching the ${cssPattern} glob.`
  );

  for (const file of cssFiles) {
    try {
      const cssContent = await readFile(file, "utf-8");
      const parsedCss = css.parse(cssContent);

      for (const rule of parsedCss.stylesheet.rules) {
        try {
          if (rule.type === "rule") {
            let ast = {
              type: "stylesheet",
              stylesheet: {
                rules: [rule],
              },
            };
            let cssText = css.stringify(ast);
            let selector = rule.selectors.join(", ");
            const id = btoa(selector);
            const hash = btoa(cssText);

            // Check if the rule already exists
            const existingDoc = existingFiles.find(
              (f) => f.id == id && f.hash == hash
            );
            if (existingDoc) {
              if (force) {
                console.log(
                  `Cassi: Updating documentation for ${selector} in ${existingDoc.filePath}`
                );
              } else {
                console.log(
                  `Cassi: The documentation for ${selector} already exists, skipping it.`
                );
                currentFiles.push(existingDoc);
                continue;
              }
            } else {
              console.log(
                `Cassi: Writing documentation for ${selector}...`
              );
            }

            let prompt = promptTemplate.replace("{{cssText}}", cssText);
            prompt = `${prompt}\n\n===EXAMPLE OUTPUT===\n\n${exampleTemplate}\n\n===END EXAMPLE OUTPUT===`;

            const url = openAiUrl + "/chat/completions" + openAiUrlSuffix;

            const response = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${openAiKey}`,
                "api-key": openAiKey,
              },
              body: JSON.stringify({
                model,
                messages: [
                  {
                    role: "system",
                    content:
                      "You are a helpful AI powered CSS assistant. You specialize in create documentation for CSS rules. Your response should be in Markdown format.",
                  },
                  { role: "user", content: prompt },
                ],
              }),
            });

            if (!response.ok) {
              const errorText = await response.text();
              console.error(
                `Cassi: Failed to generate markdown for selector: ${selector}`,
                errorText,
                url
              );
              continue;
            }

            const data = await response.json();
            let markdownContent = data.choices[0]?.message?.content;

            if (!fm.test(markdownContent)) {
              console.warn(
                `Cassi: The response for ${selector} appears to be invalid. I am investigating now.`
              );
              // try to parse as markdown
              try {
                // If there is content before the front matter, strip it out
                if (markdownContent.indexOf("---") > 0) {
                  //Strip everything before the first ---
                  markdownContent = markdownContent.substring(
                    markdownContent.indexOf("---")
                  );

                  //HACK: find trailing ``` after cleaning front matter
                  markdownContent = markdownContent.replace("```", "");
                }

                //If the string is missing the ending ---
                if (
                  markdownContent.indexOf("---") ===
                  markdownContent.lastIndexOf("---") + 3
                ) {
                  // Insert --- before the first index of ##
                  markdownContent =
                    markdownContent.substring(
                      0,
                      markdownContent.indexOf("##") - 2
                    ) +
                    "---\n" +
                    markdownContent.substring(
                      markdownContent.indexOf("##") - 2
                    );
                }

                if (markdownContent.indexOf("---") == -1) {
                  console.warn(
                    `Cassi: The response for ${selector} does not include front matter.`,
                    { cause: "no-front-matter" }
                  );
                }

                if (!fm.test(markdownContent)) {
                  console.error(
                    `Cassi: I was unable to parse response content for selector: ${selector}`,
                    { cause: "invalid-markdown" }
                  );
                  continue;
                }

                let testMatter = fm(markdownContent);
                markdownContent = fm.stringify(testMatter);
                console.debug(
                  `Cassi: I have attempted to heal the front matter for the document for  ${selector}`
                );
              } catch (e) {
                console.error(
                  `Cassi: I was unable to parse response content for selector: ${selector}`,
                  { cause: "invalid-front-matter", message: e.message }
                );
                continue;
              }
            }

            if (!fm.test(markdownContent)) {
              console.error(
                `Cassi: The response for ${selector} is not valid, and cannot be used. Skipping...`,
                { cause: "invalid-markdown" }
              );
              continue;
            }

            const matter = fm(markdownContent, { excerpt: true });
            //console.log("matter", matter);

            const title = matter.data.title ?? selector;
            let filename = `${title
              .toLowerCase()
              .replace(/[^\w-]/g, "-")
              .replaceAll("--", "-")}.md`;

            if (existingDoc) {
              filename = existingDoc.filePath;
            }

            const cassiData = {
              id,
              hash,
              source: file,
              filename,
            };
            matter.data.cassi = cassiData;
            matter.data.selectors = rule.selectors;
            matter.data.tags = [...(matter.data.tags ?? []), "cassi"];
            matter.data.shortDescription =
              matter.data.shortDescription ?? matter.excerpt;
            matter.data.updated = new Date().toISOString();
            
            matter.content +=
              "\n\n## CSS Declarations\n\n```css\n" + cssText + "\n```\n";

            let filePath = filename;
            if (!filename.startsWith(outputDir))
              filePath = path.join(outputDir, filename);

            // Update existing file if it exists
            if (existingFiles.some((f) => f.id == matter.data.id)) {
              const existingFile = existingFiles.find(
                (f) => f.id == matter.data.id
              );
              filePath = existingFile.filePath;
              currentFiles.push(existingFile);
            } else {
              // Track new files, for reconciliation later.
              currentFiles.push({
                id: matter.data.cassi.id,
                hash: matter.data.cassi.hash,
                source: matter.data.cassi.source,
                filePath: filePath,
              });
            }

            await writeFile(filePath, fm.stringify(matter), "utf-8")
              .then(() => {
                console.log(
                  `Cassi: The documentation for selector: ${selector} is now saved ${filePath}.`
                );
              })
              .catch((err) => {
                console.error(
                  `Cassi: I was unable to save markdown file for selector: ${selector}.`,
                  err
                );
              });
          }
        } catch (error) {
          console.error(
            `Cassi: An error occurred while processing the ${rule.selectors?.join(
              ","
            )} rule.`,
            error
          );
        }
      }
    } catch (error) {
      console.error(`Cassi: I was unable to process the ${file}.`, error);
    }
  }

  try {
    if (cssFiles?.length == 0) return;

    // Delete all existing files that are not in the currentFiles array for the currently processed CSS files
    const outdatedFiles = existingFiles
      .filter((e) => !cssFiles.some((css) => css == e.source))
      .filter((e) => currentFiles.some((cf) => cf.id == e.id) == false);

    if (outdatedFiles.length > 0) {
      console.log(`Cassi: Deleting ${outdatedFiles.length} outdated files.`);
      for (const file of outdatedFiles) {
        try {
          // fs.unlinkSync(file.filePath);
          //console.log(`Cassi: I have deleted ${file.filePath}.`);
          console.warn(
            `Cassi: The ${file.filePath} does not appear to be needed. You may want to delete this file.`
          );
        } catch (err) {
          console.error(
            `Cassi: I was unable to delete the file ${file.filePath}.`,
            err
          );
        }
      }
    }
  } catch (error) {
    console.error(
      `Cassi: An error occurred while deleting outdated files.`,
      error
    );
  }
}
