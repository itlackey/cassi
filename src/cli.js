#!/usr/bin/env node

import { readFileSync } from "fs";
import { Command } from "commander";
import { generateMarkdownFromCss } from "./cassi.js";

const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf-8'));

const program = new Command();

program
  .name("cassi")
  .description("Cassi: AI-Powered CSS Assistant")
  .version(packageJson.version);


// Subcommand: generate
program
  .command("generate")
  .description("Generate markdown documentation from CSS files")
  .argument("<cssPattern>", "Glob pattern to match CSS files")
  .option(
    "--output <outputDir>",
    "Directory to save generated markdown files",
    "./output"
  )
  .option(
    "--prompt-file <prompt>",
    "Path to the prompt template file",
    "./src/prompt.txt"
  )
  .action(async (cssPattern, options) => {
    const { output, promptFile } = options;

    try {
      console.log("Generating markdown...");
      await generateMarkdownFromCss(cssPattern, output, promptFile);
      console.log(`Markdown files saved to: ${output}`);
    } catch (err) {
      console.error("Error generating markdown:", err.message);
      process.exit(1);
    }
  });


program.parse(process.argv);
