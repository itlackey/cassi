---
title: "Horizontal Rule Styling"
shortDescription: "Styling a horizontal rule (hr) for visually separating content sections."
tags: ["CSS", "Styles", ".third-accent"]
selectors:
    - 'hr'
permalink: "/styles/hr-styling.html"
---

## Horizontal Rule Styling

The `hr` rule is used to visually separate different sections or groups of content on a webpage. The default styling for an HR is typically a solid line, and this rule allows you to customize its appearance using the `--third-accent` color variable.

### CSS Declarations

```css
hr {
  border-color: var(--third-accent);
  width: 100%;
}
```

The above CSS declaration does the following:
- Sets the border color of the HR line to `var(--third-accent)`, which allows you to maintain a consistent and themable color throughout your design.
- Specifies that the HR line will span the full width of its containing element.

### Usage

Here's how to use this rule in your HTML:

```html
<div>
  <p>First Section Content</p>
  <hr>
  <p>Second Section Content</p>
</div>
```

### Example

<div class="example-container">
  <div style="border:1px solid #000;padding:20px;">
    <p>First Section Content</p>
    <hr>
    <p>Second Section Content</p>
  </div>
</div>

### Developer Notes

- You can customize the appearance of `--third-accent` in your CSS variables to match your design needs.
- If you don’t want a full-width line, consider using an alternative such as a `<div>` styled with margin or padding to create visual separation.
