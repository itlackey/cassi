---
title: "Select Multiple Styling"
shortDescription: "Styling for multiple select elements to enhance usability."
tags: ["SELECT", ".select-multiple", "CSS"]
selectors:
    - 'select[multiple]'
    - '.select-multiple'
permalink: "/styles/select-multiple-styling.html"
---

## Select Multiple Styling

The `select[multiple]` rule styles the multiple select boxes, which allow users to pick more than one option. However, the default styling can be overly simple and could improve usability for your users.

By applying this rule, you can enhance the appearance of these select elements, making them stand out and potentially providing an overall better user experience.

## CSS Declarations

```css
select[multiple] {
  padding: 0;
  height: 100%;
}
.select-multiple {
  width: auto;
  min-width: 300px;
  border: 2px solid #ccc;
  border-radius: 8px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* For IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.select-multiple::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}
```

## Usage

Here's how to use this rule in your HTML:

```html
<select multiple class="select-multiple">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
  <option value="4">Option 4</option>
</select>
```

## Example

<div class="example-container">
    <select multiple class="select-multiple" size="5">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
</div>

## Developer Notes

- Adjust the `min-width` and other properties to fit your design.
- The custom scrollbar style removes the default browser scrollbar for a cleaner look.
- Ensure there is adequate padding around the select box to avoid any clipping of text when options wrap.
- It's always beneficial to test how the dropdown looks on different screen sizes and devices. 

By following these guidelines, you can create more user-friendly multiple select boxes that enhance the overall readability and functionality of your forms.
