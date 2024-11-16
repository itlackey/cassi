---
title: "Select Multiple Accent Color"
shortDescription: "Styling for select multiple dropdown options."
tags: ["CSS", "Styles", "Selectors"]
selectors:
    - 'select[multiple]>option'
permalink: "/styles/select-multiple-accent-color"
---

## Styling Select Multiple Options

The `select[multiple]>option` rule defines the styling for options within a `<select>` element that allows multiple selections. By using this rule, you can customize the appearance of these dropdown options to align with your design system's accents.

This rule specifically targets the `accent-color`, `background-color`, and adds padding to each option which enhances user experience by making the UI more interactive and visually appealing.

## CSS Declarations

```css
select[multiple]>option {
  accent-color: var(--fourth-accent);
  background-color: transparent;
  padding: var(--small-gap);
}
```

## Usage

Here's how this rule might be used within your HTML:

```html
<select multiple>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
</select>
```

However, styling `<select>` elements and their options directly is quite limited due to browser restrictions. More often, custom dropdowns (like using a `<div>` with JavaScript for selection) are used in projects to allow more flexibility in styling.

## Example

Given the limitations mentioned above for direct styling of `<select[multiple]>option`, demonstrating this rule solely through HTML and CSS might be misleading. Traditional `<select>` elements do not support custom styling as effectively as other components due to accessibility constraints and browser standardizations.

Instead, developers usually implement custom dropdown logic using `<div>`, `<ul>`, and `<li>` tags that can be styled freely but require additional JavaScript for functionality.

## Developer Notes

- While this rule is syntactically correct in CSS, remember that the ability to style `<select>` elements directly may vary from browser to browser.
- Consider custom implementations or libraries/framework components that offer more styling control when needing a dropdown UI that matches your design system closely.
