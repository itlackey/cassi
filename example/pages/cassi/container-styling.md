---
title: "Container Styling"
shortDescription: "Styling for container elements to define consistent padding and backgrounds."
tags: ["cassi","CSS", "Styles", ".features"]
selectors:
    - '.features'
---

## Container Styling

The `.features` rule defines the styling for container elements. This includes setting a consistent padding of `3rem 1rem` on both sides and using the background color defined by the CSS variable `--container-background`.

This ensures that all containers with the class `.features` will have a uniform appearance in terms of padding and background, enhancing the overall visual cohesion of your website.

## Usage

Here's how to use this rule in your HTML:

```html
<div class="features">
  <p>This is a container styled with padding and background.</p>
</div>
```

## Example

<div class="example-container features">
    <p>This is a container styled with padding and background.</p>
</div>

This will apply the `.features` styles to the example container, ensuring it has consistent padding and a background color.

## Developer Notes

- The use of CSS variables allows for easy customization and maintenance of themes across your project.
- Ensure that `--container-background` is defined in your global CSS or design tokens file to avoid unexpected visuals.

## CSS Declarations
```css
.features {
  padding: 3rem 1rem;
  background: var(--container-background);
}
```
