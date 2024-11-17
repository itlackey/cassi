---
title: "Form Input Styling"
shortDescription: "Styling for form inputs to enhance user experience."
tags: ["CSS", "Forms", "Styling"]
selectors:
    - 'input'
    - 'select'
permalink: "/styles/form-input-styling.html"
---

## Form Input Styling

The `.input` and `.select` rules define the styling for form inputs to ensure they are consistent with the overall design while maintaining ease of use.

## CSS Declarations

```css
input,
select {
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: rgba(17, 17, 17, 0.75);
  border-width: 1px;
  border-color: var(--third-accent);
  color: var(--third-accent);
  font-size: 1rem;
  font-family: var(--main-font-family);
  accent-color: var(--third-accent);
}
```

## Usage

Here's how to use these rules in your HTML:

```html
<input type="text" placeholder="Text Input">
<select>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

## Example

<div class="example-container">
  <input type="text" placeholder="Text Input">
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>

## Developer Notes

- The input and select elements have a consistent background color, padding, and border to ensure they are easily distinguishable from other elements.
- Using `var(--third-accent)` as the accent-color helps maintain consistency with the design style guide.
- Ensure that input fields have sufficient width and appropriate padding for usability.
