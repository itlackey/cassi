---
title: "Multiple Select Option Styling"
shortDescription: "Custom styling for options in multiple-select boxes."
tags: ["CSS", "Styling", "Selectors"]
selectors:
    - 'select[multiple]'
    - 'select[multiple]>option'
permalink: "/styles/multiple-select-option-styling.html"
---

## Multiple Select Option Styling

The `select[multiple]>option` rule defines custom styling for the options within a multiple select box. This allows you to control aspects like background color, text padding, and accent color for selected options.

### CSS Declarations

```css
select[multiple]>option {
  accent-color: var(--fourth-accent);
  background-color: transparent;
  padding: var(--small-gap);
}
```

This declaration does the following:
- `accent-color: var(--fourth-accent);`: Sets the color of the checkmark (or other indicator) for selected options to a variable named `--fourth-accent`.
- `background-color: transparent;`: Ensures that the default background color is not applied, making it easier to customize.
- `padding: var(--small-gap);`: Adds some padding around the text inside the option elements. `--small-gap` should be defined in your theme or a shared variables file to ensure consistency throughout your application.

### Usage

Here's how to use this rule in your HTML:

```html
<select multiple>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
  <option value="4">Option 4</option>
</select>
```

### Example

<div class="example-container">
  <select multiple style="--fourth-accent: #007bff; --small-gap: 10px;">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
</div>

### Developer Notes

- Ensure that the `--fourth-accent` and `--small-gap` variables are defined in your project's CSS to prevent any potential styling issues.
- You can apply custom styles directly on select boxes by using the `multiple` attribute, or modify existing multiple-select pickers using JavaScript for a more interactive experience.

This customization allows you to maintain consistency across all select boxes that have the `multiple` attribute while still providing a distinct look and feel to the options within them.
