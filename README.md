# Cassi - AI-Powered CSS Assistant

![Cassi Logo](./example/assets/imgs/logo-small.webp)

Cassi is an innovative tool that generates markdown-based documentation for your CSS files using AI. Whether you're managing a legacy codebase or building new projects, Cassi simplifies the process of creating a comprehensive and customizable CSS style guide.

## Why Cassi?

Maintaining CSS documentation can be a tedious and time-consuming task, especially for large projects with hundreds of rules. Existing tools often fall short:

- Many are outdated and haven't been updated in years.
- Component-focused tools like Storybook aren't designed for plain CSS styles.
- Refactoring or modifying CSS just to document it is often not feasible.

Cassi bridges this gap by analyzing your existing CSS files and using AI to generate readable, actionable, and fully customizable markdown documentation.

## Features

- **AI-Powered Markdown Generation**  
  Cassi parses your CSS files and generates markdown documentation for each rule, complete with examples and developer notes.

- **Runs Locally or with API providers**  
  Use open-source models locally or integrate with hosted AI services like HuggingFace, Anthropic, OpenAI, etc.

- **Easy to use CLI** with subcommands like `generate`, `init`, etc.
  - `cassi generate styles/*.css --output-dir docs` for generating documentation
  - `cassi init` to create a new style guide site using 11ty.
  - **Coming Soon** `cassi download http://some.site` to download the CSS file(s) from a URL.

- **11ty Starter Kit** - A pre-configured 11ty project that is pre-configured to generate a style guide from the files created by Cassi. Check it out at [cassi-11ty-starter](https://github.com/itlackey/cassi-11ty-starter).

- **11ty-Compatible Output**  
  Includes front matter with properties like `title`, `tags`, `permalink`, `shortDescription`, and `selectors`, making integration with 11ty and other static site generators seamless.

- **Customizable Templates**  
  Modify the prompt template to tailor the documentation style to your needs.

- **Simple Setup**  
  Quickly integrate Cassi into your workflow with minimal configuration.

## Quick start

To install Cassi globally, run: `npm install -g itlackey/cassi`

You can now create your Cassi powered style guide site by running: `cassi init <output directory>`.

Now `cd` into the directory and run: `cassi generate assets/css/*.css --output-dir pages/cassi`.

## Usage Guide

1. **Set Up Your Environment**  
   Set the values Cassi needs to call the AI model. You can see an example of the settings in `.env.example`. Update the your environment variables based on your setup. If you skip this step, Cassi will use the settings shown below.

   ```plaintext
    OPENAI_BASE_URL="http://localhost:11434/v1"
    OPENAI_API_KEY="ollama"
    CASSI_MODEL_NAME="qwen2.5-coder:latest"
   ```

2. **Prepare Your Files**

   - Place your CSS files in a directory that Cassi can read.
   - **Optionally** Create a prompt template file. You can use the prompt template in `src/prompt.txt` as a starting point and customize it as needed.

3. **Run the Script**

   Execute the script with the glob patterns for your CSS files and the path to your prompt file:

   ```bash
   cassi generate "./styles/**/*.css" --output <some directory> --prompt <path-to-prompt-file>
   ```

4. **View the Output**

   Cassi generates markdown files in the specified output directory, or `./output` if not specified. Each file includes:

   - A detailed description of the CSS rule.
   - Usage examples in HTML.
   - Developer notes for clarity and guidance.

## Use Cases

Cassi can help you with various use cases, including:

- **Legacy CSS Projects**: Generate documentation for unmodifiable stylesheets.
- **Style Guide Generator**: Integrate markdown output directly into 11ty or similar tools to create a living style guide.
- **Team Documentation**: Provide clear, standardized documentation for large teams.

## What's Next for Cassi?

Cassi was built to solve a problem I was facing. Now that I can easily generate the documentation I need, I am considering a few more features to improve Cassi's capabilities.

Here are some features I am considering adding:

- **Style Grouping** - Allow users to group CSS rules into categories or sections for easier navigation.
- **Configuration** - Provide a way to easily configure Cassi's behavior through environment variables or configuration files.
- **Incremental Updates** - Add logic to allow Cassi to determine what CSS has been added/modified, and add/update the markdown documents accordingly.

## Run The Example

To run generate documentation based on the example site, clone the repository and install the required dependencies:

```bash
git clone https://github.com/itlakey/cassi.git
cd cassi
npm install
```

Now that the dependencies are installed, you can run an example generation by executing the following command in the project directory:

`npm run example:generate`

## Example Output

Examples can be found in the `site/pages/cassi` directory. Each file corresponds to a CSS rule found in `site/assets/css` directory.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

Have questions or feedback? Open an issue or reach out on [GitHub](https://github.com/itlackey/cassi/issues).
