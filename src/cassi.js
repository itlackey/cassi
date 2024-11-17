import fg from "fast-glob";
import { readFile, writeFile } from "fs/promises";
import css from "css";
import fs from "fs";

/**
 * Generates markdown files for CSS rules by using OpenAI API.
 * @param {string} cssPattern - Glob pattern to locate CSS files.
 * @param {string} promptFile - Path to the prompt file.
 * @param {string} outputDir - Directory to save generated markdown files.
 * @returns {Promise<void>}
 */
export async function generateMarkdownFromCss(
  cssPattern,
  outputDir = null,
  promptFile = null
) {
  const openAiUrl = process.env.OPENAI_BASE_URL ?? "http://localhost:11434/v1";
  const openAiKey = process.env.OPENAI_API_KEY ?? "ollama";
  const model = process.env.CASSI_MODEL_NAME ?? "qwen2.5-coder:latest";

  if (!outputDir) outputDir = "./output";
  if (!promptFile) promptFile = "./src/prompt.txt";

  console.log(
    `Cassi: Starting on documentation for ${cssPattern}, using model: ${model}...`
  );

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  if(!fs.existsSync(promptFile)) throw new Error("Prompt file not found: " + promptFile);
  const promptTemplate = await readFile(promptFile, "utf-8");

  const cssFiles = await fg(cssPattern);

  for (const file of cssFiles) {
    const cssContent = await readFile(file, "utf-8");
    const parsedCss = css.parse(cssContent);

    for (const rule of parsedCss.stylesheet.rules) {
      if (rule.type === "rule") {
        let ast = {
          type: "stylesheet",
          stylesheet: {
            rules: [rule],
          },
        };
        let cssText = css.stringify(ast);
        let selector = rule.selectors.join(", ");

        const prompt = promptTemplate.replace("{{cssText}}", cssText);

        const response = await fetch(openAiUrl + "/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openAiKey}`,
          },
          body: JSON.stringify({
            model,
            messages: [{ role: "system", content: prompt }],
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error(
            `Cassi: Failed to generate markdown for selector: ${selector}`,
            errorText
          );
          continue;
        }

        const data = await response.json();
        const markdownContent = data.choices[0]?.message?.content;
        const title = markdownContent.match(/## (.+)/)?.[1] ?? selector;

        const fileName = `${title
          .toLowerCase()
          .replace(/[^\w-]/g, "-")
          .replaceAll("--", "-")}.md`;
        const filePath = `${outputDir}/${fileName}`;
        writeFile(filePath, markdownContent?.trimStart() + "\n", "utf-8")
          .then(() => {
            console.log(
              `Cassi: Generated markdown for selector: ${selector} -> ${filePath}`
            );
          })
          .catch((err) => {
            console.error(
              `Cassi: Failed to save markdown file for selector: ${selector}`,
              err
            );
          });
      }
    }
  }
}
