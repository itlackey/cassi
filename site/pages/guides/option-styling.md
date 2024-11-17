---
title: "Option Styling"
shortDescription: "Styling for dropdown options to improve readability and user experience."
tags: ["option", ".dropdown-option", "dark-mode"]
selectors:
    - 'option'
    - '.dropdown-option.dark'
permalink: "/styles/option-styling.html"
---

## Option Styling

The `option` rule defines the basic styling for dropdown options. The `.dropdown-option.dark` rule allows you to customize the appearance of dropdown options when dark mode is enabled.

## CSS Declarations
```css
option {
  background-color: #fff;
  color: #333;
  padding: 5px 10px;
}

.dropdown-option.dark option {
  background-color: var(--dark);
  color: #fff;
}
```

## Usage

Here's how to use this rule in your HTML with and without dark mode:

```html
<select>
  <option value="1">Option 1</option> <!-- Default style -->
  <option class="dropdown-option.dark" value="2">Option 2 (Dark Mode)</option>
</select>
```

## Example

<div class="example-container">
    <select>
        <option value="1">Option 1</option>
        <option class="dropdown-option.dark" value="2">Option 2 (Dark Mode)</option>
    </select>
</div>

## Developer Notes

- Ensure contrasting colors for better readability in both light and dark mode.
- The `.dark` class can be easily applied to any element that contains dropdown options.

