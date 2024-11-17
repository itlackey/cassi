---
title: "Accessible Focus States"
shortDescription: "Enhance accessibility by removing default focus outlines and using custom styling."
tags: ["CSS", "Accessibility", "Focus"]
selectors:
    - 'input:focus'
    - 'input:focus-visible'
    - 'select:focus'
    - 'select:focus-visible'
permalink: "/styles/accessible-focus.html"
---

## Accessible Focus States

In contemporary web design, clear and consistent focus states are essential for accessibility. However, default browser focus outlines can be distracting or even visually impaired to users with certain conditions. Therefore, this rule removes the default focus outline and implements a custom accessible visual cue using `border-color` and `accent-color`.

The `input:focus`, `input:focus-visible`, `select:focus`, and `select:focus-visible` selectors target form elements that are active.

## CSS Declarations

```css
/* Remove default outline */
input:focus,
input:focus-visible,
select:focus,
select:focus-visible {
  outline-width: 0; /* Remove the default outline */
}

/* Customize focus state with borders and accent color */
input:focus,
input:focus-visible,
select:focus,
select:focus-visible {
  border-color: var(--fourth-accent); /* Custom border color using CSS variables */
  accent-color: var(--fourth-accent); /* Accent color for form elements (e.g., checkboxes, radio buttons) */
}
```

## Usage

Here's how to use this rule in your HTML:

```html
<input type="text" placeholder="Username" />
<input type="password" placeholder="Password" />
<select name="country">
  <option value="usa">United States</option>
  <option value="canada">Canada</option>
  <option value="mexico">Mexico</option>
</select>
```

## Example

<div class="example-container">
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <select name="country">
      <option value="usa">United States</option>
      <option value="canada">Canada</option>
      <option value="mexico">Mexico</option>
    </select>
</div>

## Developer Notes

- The `outline-width: 0;` declaration removes the default focus outline, improving accessibility.
- Customizing the `border-color` and `accent-color` provides a clear and visible focus state without disrupting user experience. 
- This rule enhances the visual hierarchy by ensuring that form elements receive proper visual feedback upon selection.

---

This markdown file provides comprehensive documentation for the CSS rule, describing its purpose, usage, and tips for developers working with accessibility in their projects.
