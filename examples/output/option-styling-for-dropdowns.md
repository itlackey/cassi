---
title: "Option Styling for Dropdowns"
shortDescription: "Styling the selected option in a dropdown list."
tags: ['CSS', 'Dropdown', 'Style']
selectors:
    - 'select[multiple] > option:checked'
permalink: "/styles/option-styling-dropdown"
---

## Option Styling for Dropdowns

The CSS rule `select[multiple] > option:checked` targets the checked option within a multiple select element. This allows us to stylistically differentiate the selected item from others in a dropdown list that allows for choosing more than one option.

## CSS Declarations

```css
select[multiple]>option:checked {
  border-collapse: collapse;
  background-color: var(--secondary-accent) !important;
  color: var(--fourth-accent) !important;
}
```

## Usage

Here's how to use this rule in your HTML:

```html
<select multiple>
    <option>Option One</option>
    <option selected>Selected Option</option>
    <option>Option Two</option>
</select>
```

## Example

<div class="example-container">
    <select multiple>
        <option>Option One</option>
        <option selected>Selected Option</option>
        <option>Option Two</option>
    </select>
</div>

## Developer Notes

- This rule enhances accessibility by making the visually identifiable difference between selectable and already chosen options.
- Ensure that your `--secondary-accent` and `--fourth-accent` custom properties are defined in your CSS stylesheet to maintain the styling effect.
