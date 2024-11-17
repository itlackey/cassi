---
title: "Select Option Styling"
shortDescription: "Styling for selected options in multiple select elements."
tags: ["CSS", "UI", "Form"]
selectors:
    - 'select[multiple]>option:checked'
permalink: "/styles/select-option-styling.html"
---

## Select Option Styling

The `select[multiple]>option:checked` rule is used to style the checkbox when an option is selected in a multiple select element. This allows for visually distinguishing which options are currently chosen, enhancing user experience.

## CSS Declarations

```css
select[multiple]>option:checked {
  border-collapse: collapse;
  background-color: var(--secondary-accent) !important;
  color: var(--fourth-accent) !important;
}
```

This rule sets the style for selected options within a multiple select element, using `!important` to ensure that they take precedence over other styles.

## Usage

Here's how to apply this style in your HTML:

```html
<select name="options" multiple size="3">
  <option value="1">Option 1</option>
  <option value="2" selected>Option 2</option>
  <option value="3">Option 3</option>
  <option value="4" selected>Option 4</option>
</select>
```

In this example, `Option 2` and `Option 4` are selected. They will be visually styled according to the CSS rule.

## Example

<div class="example-container">
  <select name="options" multiple size="3">
    <option value="1">Option 1</option>
    <option value="2" selected>Option 2</option>
    <option value="3">Option 3</option>
    <option value="4" selected>Option 4</option>
  </select>
</div>

## Developer Notes

- Use these styles to make the selection process in multiple select elements intuitive and visually appealing.
- Customize `--secondary-accent` and `--fourth-accent` to match your application's color scheme for a cohesive look.
