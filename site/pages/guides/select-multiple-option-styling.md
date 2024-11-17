---
title: "Select Multiple Option Styling"
shortDescription: "Styling for multi-select dropdown options."
tags: ["select", "multiple", "option"]
selectors:
    - 'select[multiple] > option'
permalink: "/styles/select-multiple-option-styling.html"
---

## Select Multiple Option Styling

The `select[multiple] > option` rule defines the styling for each individual option within a multi-select dropdown. This allows you to customize how text is displayed in options and provides an accessible way to view selected choices.

### CSS Declarations

```css
select[multiple]>option {
  accent-color: var(--fourth-accent);
  background-color: transparent;
  padding: var(--small-gap);
}
```

- `accent-color: var(--fourth-accent);`: This property sets the color of the text when it is selected. Here, it uses a custom CSS variable called `--fourth-accent`.
- `background-color: transparent;`: This makes sure that the background of each option remains transparent.
- `padding: var(--small-gap);`: Adds padding inside each option to ensure better readability and spacing.

### Usage

Here's how you can use this rule in your HTML:

```html
<select multiple>
  <option value="1">Option 1</option>
  <option value="2" selected>Option 2</option>
  <option value="3">Option 3</option>
</select>
```

## Example

<div class="example-container">
  <select multiple style="display: block; width: 200px; height: auto;">
    <option value="1">Option 1</option>
    <option value="2" selected>Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>

### Developer Notes

- You can customize `--fourth-accent` and `--small-gap` as needed to fit your design requirements.
- This styling makes it easier for users to visually distinguish selected options in multi-select dropdowns, especially if the default browser styling is too subtle.
