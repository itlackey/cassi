---
title: "Select Styles for Multiple Selection"
shortDescription: "Styling selected options in multiple select elements."
tags: ["CSS", "Styles", "Multi-select"]
selectors:
    - 'select[multiple]>option:checked'
permalink: "/styles/select-multiple-check.html"
---

## Select Styles for Multiple Selection

The `select[multiple]>option:checked` CSS rule styles the currently checked options within a `<select>` element that allows multiple selections. This is useful for highlighting active choices or providing visual feedback to users making selections.

When an option within a multi-select dropdown is selected, this rule applies specific styles:
- **Border-Collapse:** Ensures that only one border is visible between cells if they are adjacent.
- **Background Color:** Sets the background color using the `--secondary-accent` custom property (you should define this in your CSS variable scheme).
- **Text Color:** Overrides the default text color with the `--fourth-accent` custom property (again, ensure this is defined).

## CSS Declarations

```css
select[multiple] > option:checked {
  border-collapse: collapse;
  background-color: var(--secondary-accent) !important;
  color: var(--fourth-accent) !important;
}
```

## Usage

Here's an example of how to use this rule in your HTML:

```html
<select multiple>
  <option value="1">Option 1</option>
  <option value="2" selected>Option 2</option>
  <option value="3">Option 3</option>
  <option value="4">Option 4</option>
</select>

<select multiple>
  <option value="5">Option A</option>
  <option value="6" selected>Option B</option>
  <option value="7">Option C</option>
  <option value="8">Option D</option>
</select>
```

## Example

<div style="display: flex; gap: 20px;">
    <select multiple>
        <option value="1">Option 1</option>
        <option value="2" selected>Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
    </select>

    <select multiple>
        <option value="5">Option A</option>
        <option value="6" selected>Option B</option>
        <option value="7">Option C</option>
        <option value="8">Option D</option>
    </select>
</div>

## Developer Notes

- Ensure that the `--secondary-accent` and `--fourth-accent` custom properties are defined in your CSS variable scheme to match your desired design.
- This rule can be customized further to fit any specific visual needs or design language of your application.
