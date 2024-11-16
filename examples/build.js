import { generateMarkdownFromCss } from "../src/cassi.js";
// Example usage
(async () => {
  await generateMarkdownFromCss("./examples/styles/**/*.css", "./examples/output");
})();
