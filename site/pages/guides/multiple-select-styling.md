---
title: "Multiple Select Styling"
shortDescription: "Styling for multi-select inputs to enhance usability and aesthetic appeal."
tags: ['forms', '.select-multiple']
selectors:
    - 'select[multiple]'
permalink: "/styles/multiselect-styling.html"
---

## Multiple Select Styling

The `select[multiple]` rule styles multiple select inputs so they are more user-friendly and visually appealing. It removes padding to ensure that any other styles like borders can be applied cleanly without unwanted space.

You can adjust the height to control how many options are visible at once, making it easier for users to interact with large lists of choices.

## CSS Declarations

```css
select[multiple] {
  padding: 0;
  height: 100%;
}
```

## Usage

To apply this style to a multi-select input in your HTML:

```html
<select multiple>
  <option value="Option 1">Option 1</option>
  <option value="Option 2">Option 2</option>
  <option value="Option 3">Option 3</option>
  <!-- Add more options as needed -->
</select>
```

## Example

Here's an example showing a multi-select input styled according to the rule:

<div class="example-container">
    <select multiple style="height: 100px; border: 2px solid #ccc;">
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </select>
</div>

## Developer Notes

- Adjust the `height` property to control the number of visible options.
- You may want to add additional styling like borders or background colors to match your overall design theme.
