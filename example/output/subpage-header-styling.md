---
title: Subpage Header Styling
shortDescription: Styling for the main heading of subpages.
category: Typography
tags:
  - subpage-header
  - h1
  - primary-color
  - font-size
  - cassi
cassi:
  id: LnN1YnBhZ2UtaGVhZGVyIGgx
  hash: >-
    LnN1YnBhZ2UtaGVhZGVyIGgxIHsKICBmb250LXNpemU6IDJyZW07CiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpOwp9
  source: example/assets/css/main.css
  filename: subpage-header-styling.md
selectors:
  - .subpage-header h1
updated: '2024-11-19T06:03:43.271Z'
---

# Subpage Header Styling

The `.subpage-header h1` rule defines the styling for the primary heading of subpages. This ensures a consistent and visually appealing header across all subpages, with large font size and the primary color applied.

## Usage

Here's how to use this rule in your HTML:

```html
<div class="subpage-header">
    <h1>Welcome to Our Subpage</h1>
</div>
```

## Example

<div class="example-container">
    <div class="subpage-header">
        <h1>Welcome to Our Subpage</h1>
    </div>
</div>

## Developer Notes

- Ensure `--primary-color` is defined in your CSS variables or SCSS for consistent brand consistency.
- Consider adjusting the font size if needed for different screen sizes using media queries.

## CSS Declarations

```css
.subpage-header h1 {
  font-size: 2rem;
  color: var(--primary-color);
}
```
