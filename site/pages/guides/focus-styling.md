---
title: "Focus Styling"
shortDescription: "Removes default browser outlines and replaces them with a custom accent color."
tags: ["focus", ".input", ".select"]
selectors:
    - 'input:focus'
    - 'input:focus-visible'
    - 'select:focus'
    - 'select:focus-visible'
permalink: "/styles/focus-styling.html"
---

## Focus Styling

The `input:focus, input:focus-visible, select:focus, select:focus-visible` rules provide a consistent and customized styling for elements when they receive focus. Instead of the default browser outline (`outline: auto`), these styles remove the outline completely and apply a custom accent color to the border and `accent-color`.

### Example Usage

Here's how you can use this rule in your HTML:

```html
<input type="text" placeholder="First Name">
<select name="city">
  <option value="nyc">New York</option>
  <option value="la">Los Angeles</option>
  <option value="chi">Chicago</option>
</select>
```

### Example

<div class="example-container">
    <input type="text" placeholder="First Name" style="--fourth-accent: #007bff;">
    <select name="city" style="--fourth-accent: #007bff;">
      <option value="nyc">New York</option>
      <option value="la">Los Angeles</option>
      <option value="chi">Chicago</option>
    </select>
</div>

### Developer Notes

- Using this rule can enhance the accessibility of your site by providing a clear visual cue for focus states.
- Ensure that the `--fourth-accent` variable is defined in your CSS to avoid any visual inconsistencies.
- This rule should be used cautiously, as it may override browser-specific default styles. Test in different browsers to ensure compatibility.

This detailed guide ensures developers can easily integrate and maintain consistent focus styling across their applications.
