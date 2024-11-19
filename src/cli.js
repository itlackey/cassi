#!/usr/bin/env node

import { readFileSync } from "fs";
import { Command } from "commander";
import { generate } from "./generate.js";
import { init } from "./init.js";
import dotenv from "dotenv";

const packageJson = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url), "utf-8")
);

// load .env file
dotenv.config({ override: true });

// Create a new Command object and set its name and description.

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
  .argument("[outputDir]", "Directory to save generated markdown files", "./output")
  .option(
    "-o, --output [outputDir]",
    "Directory to save generated markdown files"
  )
  .option(
    "-e, --example [exampleFile]",
    "Path to the example output file you would like to use (default: system example)"
  )
  .option(
    "-f, --force",
    "Force existing files to be updated",
    false
  )
  .action(async (cssPattern, outputDir, options) => {
    const { output, example, force } = options;

    try {
      await generate(cssPattern, output ?? outputDir, example, force);
    } catch (err) {
      console.error(
        "Cassi: I encountered an error while generating markdown:",
        err.message
      );
      process.exit(1);
    }
  });

//Subcommand: init
program
  .command("init")
  .description(
    "Initialize a new Eleventy project with the generated markdown files"
  )
  .argument("<outputDir>", "Directory to save generated markdown files")
  .option(
    "--tag <version>",
    "Version of the starter kit to use. Defaults to 'latest'",
    "v0.0.1"
  )
  .action(async (outputDir, options) => {
    const { tag } = options;

    try {
      await init(outputDir, tag);
    } catch (err) {
      console.error(
        "Cassi: I encountered an error while initializing Eleventy project:",
        err.message
      );
      process.exit(1);
    }
  });

program.parse(process.argv);
