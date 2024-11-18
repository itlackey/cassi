import {
  createWriteStream,
  copyFileSync,
  renameSync,
  mkdirSync,
  existsSync,
  rmSync,
  readdirSync,
  mkdtempSync,
} from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
import { join } from "path";
import unzipper from "unzipper";
const streamPipeline = promisify(pipeline);

/**
 * Download a repository archive from GitHub.
 * @param {string} tag - The tag or commit hash to download.
 * @param {string} outputFolder - The local folder to extract the repository.
 */
async function downloadRepo(tag, outputFolder) {
  try {
    const downloadFolder = ".tmp/.cassi";
    // Ensure the output directory exists
    if (!existsSync(downloadFolder)) {
      mkdirSync(downloadFolder, { recursive: true });
    }

    const url = `https://github.com/itlackey/cassi-11ty-starter/archive/refs/tags/${tag}.zip`;
    const zipFilePath = join(downloadFolder, `${tag}.zip`);

    // Ensure the output directory exists
    if (existsSync(outputFolder)) {
      console.error(`[ERROR] Output folder already exists: ${outputFolder}`);
      return;
    } else {
      mkdirSync(outputFolder, { recursive: true });
    }

    console.log(`[INFO] Downloading repository from ${url}...`);

    // Fetch the zip archive
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to download repository: ${response.statusText}`);
    }

    // Stream the zip archive to a file
    await streamPipeline(response.body, createWriteStream(zipFilePath));
    console.log(`[INFO] Zip downloaded to ${zipFilePath}`);

    // Extract the zip archive
    console.log("[INFO] Extracting repository...");
    await extractZip(zipFilePath, downloadFolder);

    await moveFolder(
      `${downloadFolder}/cassi-11ty-starter-${tag.replace("v", "")}/`,
      `${outputFolder}/`
    );

    //rmSync(`${outputFolder}/cassi-11ty-starter-${tag.replace("v", "")}/`, {force: true, recursive: true});
    // Cleanup the zip file
    //rmSync(zipFilePath);
    console.log(`[INFO] Repository extracted to ${outputFolder}`);
  } catch (error) {
    console.error(`[ERROR] ${error.message}`);
  }
}

/**
 * Extract a zip file to a specified directory.
 * @param {string} zipFilePath - The path to the zip file.
 * @param {string} outputFolder - The folder where the zip contents should be extracted.
 */
async function extractZip(zipFilePath, outputFolder) {
  const extractionStream = await unzipper.Open.file(zipFilePath);
  await extractionStream.extract({ path: outputFolder, concurrency: 5 });
}

async function moveFolder(oldPath, newPath) {
  //console.debug(`Try moving ${oldPath} to ${newPath}`)
  if (!existsSync(oldPath)) {
    // console.log(`${oldPath} does not exist`)
    return;
  }
  if (!existsSync(newPath)) {
    //console.debug(`Moving ${oldPath} to ${newPath}`)
    renameSync(oldPath, newPath);
    return;
  }
  const files = readdirSync(oldPath);
  for (var key in files) {
    const file = files[key];
    const oldFilePath = join(oldPath, file);
    const newFilePath = join(newPath, file);
    // console.debug(`Moving ${oldFilePath} to ${newFilePath}`)
    renameSync(oldFilePath, newFilePath);
  }
}

/**
 * Initialize the download and extraction of the repository.
 * @param {string} output - The output directory.
 * @param {string} version - The tag or commit to download.
 */
export async function init(output, version) {
  await downloadRepo(version, output);
}
