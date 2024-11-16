---
title: "Input and Select Styling"
shortDescription: "Styling for input and select elements, focusing on wider width and dark mode support."
tags: ["CSS", "Styles", "Selectors"]
selectors:
    - 'input'
    - 'select'
permalink: "/styles/input-select-styling"
---

## Input and Select Styling

This CSS rule provides a consistent look for both `input` (text inputs, password fields, etc.) and `<select>` dropdown elements. The primary goal is to make these form controls take up the full width of their containers, which improves user experience on smaller displays. The use of a semi-transparent dark background facilitates better contrast, ensuring readability in pages with dark themes.

## CSS Declarations

```css
input,
select {
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: rgba(17, 19, 21, 0.75);
  border-width: 1px;
  border-color: var(--third-accent);
  color: var(--third-accent);
  font-size: 1rem;
  font-family: var(--main-font-family);
}
```

## Usage

Using these styled inputs and select elements is straightforward. Simply place them within your HTML markup with their respective tags, `input` for text-based fields and `<select>` for dropdown menus.

```html
<input type="text" placeholder="Type...">

<select>
  <option>Option One</option>
  <option>Option Two</option>
  <option>Option Three</option>
</select>
```

## Example

<div class="example-container">
    <input type="text" placeholder="Type...">
    
    <select>
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </select>
</div>

## Developer Notes

- This styling ensures inputs and select elements take full advantage of the available space, which is crucial in responsive designs. Always ensure that your containers can accommodate these widths.
- The semi-transparent dark background aligns with modern design trends favoring dark mode interfaces, enhancing readability and user experience on pages with such themes.
