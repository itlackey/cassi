#!/usr/bin/env node

import { generateMarkdownFromCss } from "./src/cassi.js";

if (process.argv[0].includes("node")) {
  const args = process.argv.slice(2);
  const [cssPattern, outputDir, promptFile] = args;
  if (!cssPattern) {
    console.error(
      "Usage: node --env-file=.env src/cassi.js <css-pattern> [output-directory] [prompt-text-path]"
    );
    process.exit(1);
  }

  generateMarkdownFromCss(cssPattern, outputDir, promptFile)
    .then(() => console.log("Cassi: Documentation generation completed."))
    .catch((error) => {
      console.error("Cassi: Failed to generate documentation.", error);
      process.exit(1);
    });
}
