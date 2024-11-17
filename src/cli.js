#!/usr/bin/env node

import { readFileSync } from "fs";
import { Command } from "commander";
import { generateMarkdownFromCss } from "./cassi.js";
import { Eleventy } from "@11ty/eleventy";

const packageJson = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url), "utf-8")
);

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

// Subcommand: build
program
  .command("build")
  .description("Build static site using Eleventy")
  .option(
    "--input <inputDir>",
    "Directory containing markdown files",
    "./pages"
  )
  .option(
    "--output <outputDir>",
    "Directory to save the static site",
    "./.build"
  )
  .action(async (options) => {
    const { input, output } = options;

    try {
      console.log("Building static site with Eleventy...");
      const elev = new Eleventy(input, output, {
        config: (eleventyConfig) => {
          eleventyConfig.setDataDirectory("data");
          eleventyConfig.setIncludesDirectory("includes");
          eleventyConfig.setLayoutsDirectory("layouts");
          eleventyConfig.addPassthroughCopy(input + "/assets");
          eleventyConfig.setTemplateFormats("md");
          eleventyConfig.setQuietMode(true);          
        },
      });
      await elev.write();
      console.log(`Static site generated at: ${output}`);
    } catch (err) {
      console.error("Error building static site:", err.message);
      process.exit(1);
    }
  });
program.parse(process.argv);
