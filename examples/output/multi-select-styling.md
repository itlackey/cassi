---
title: "Multi Select Styling"
shortDescription: "Styling rules for the `<select multiple>` element which allows users to select more than one option."
tags: ["CSS", "Styles", "Selectors"]
selectors:
    - 'select[multiple]'
permalink: "/styles/multi-select-styling"
---

## Multi Select Styling

The `select[multiple]` rule defines the default styling for `<select multiple>` elements. These elements are used in forms to allow users to select more than one option from a dropdown list.

This CSS ensures that the multi-select element takes up the full height of its wrapper (assuming a flexible parent container), and removes the default padding on the options. This helps keep the UI consistent across different form inputs.

## CSS Declarations

```css
select[multiple] {
  padding: 0;
  height: 100%;
}
```

## Usage

Use the `<select multiple>` element in your forms like so:

```html
<select multiple>
    <option value="apple">Apple</option>
    <option value="banana" selected>Banana</option>
    <option value="cherry" selected Cherry</option>
</select>
```

## Example

<div style="display: flex; align-items: center;">
  <label>Select multiple options:</label>
  
  <div style="margin: 0 10px;">
    <select multiple>
        <option value="apple">Apple</option>
        <option value="banana" selected>Banana</option>
        <option value="cherry" selected>Cherry</option>
    </select>
  </div>

  <p>Selected: Banana, Cherry</p>
</div>

## Developer Notes

- This minimalist styling keeps the UI clean and allows custom themes to be applied more easily.
- Consider adding a height to `select[multiple]` based on your design requirements. The percentage-based height (`100%`) works best when the parent container is also flexible.
