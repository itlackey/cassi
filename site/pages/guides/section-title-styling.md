---
title: "Section Title Styling"
shortDescription: "Styling for section titles, positioned centrally with a unique color."
tags: ["CSS", "Styles", ".section-title"]
selectors:
    - '.section-title'
permalink: "/styles/section-title-styling.html"
---

## Section Title Styling

The `.section-title` rule is designed to style and position a section title in the center of its container, using a custom accent color. This makes it stand out and ensures consistent styling across your application.

## CSS Declarations

```css
.section-title {
  color: var(--fourth-accent);
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  font-size: 1rem;
}
```

## Usage

Here's how to use this rule in your HTML:

```html
<div class="container">
  <h2 class="section-title">Section Title</h2>
</div>
```

Ensure that the container around the `.section-title` has a specific width set, or you might want to add some margin or padding so it doesn't take up the full width of the page.

## Example

<div class="example-container">
  <h2 class="section-title">Section Title</h2>
</div>

If `.fourth-accent` is not defined in your CSS Variables, make sure to define it in a higher-level scope:

```css
:root {
  --fourth-accent #3498db;
}
```

This will ensure that the section title remains consistent with your overall design theme.

## Developer Notes

- The `.section-title` rule uses flexbox for centering, making it versatile for different container sizes.
- Customize `--fourth-accent` as needed to match your color scheme.
- Ensure the parent container has enough space to accommodate a centered title.
