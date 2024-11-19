---
title: Heading Styling
shortDescription: >-
  Styling for all heading elements (h1-h6) to provide consistent visual
  hierarchy and readability.
category: Typography
tags:
  - headings
  - .h1
  - .h2
  - .h3
  - .h4
  - .h5
  - .h6
  - cassi
cassi:
  id: aDEsIGgyLCBoMywgaDQsIGg1LCBoNg==
  hash: >-
    aDEsCmgyLApoMywKaDQsCmg1LApoNiB7CiAgbWFyZ2luLWJvdHRvbTogMXJlbTsKICBmb250LXdlaWdodDogbm9ybWFsOwogIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsKfQ==
  source: example/assets/css/main.css
  filename: heading-styling.md
selectors:
  - h1
  - h2
  - h3
  - h4
  - h5
  - h6
updated: '2024-11-19T06:00:19.490Z'
---

# Heading Styling

The CSS rules target all heading elements (`h1` through `h6`) ensuring a consistent font color, margin, and normal weight. This provides an organized visual hierarchy and improves readability across different sections of your content.

## Usage

Here's how to use these rules in your HTML:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

## Example

<div class="example-container">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</div>

## Developer Notes

- Ensure that the margin is used consistently across different heading levels to preserve the visual hierarchy.
- Adjust the `--primary-color` variable as needed to change the color of the headings to fit your design theme.

## CSS Declarations

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 1rem;
  font-weight: normal;
  color: var(--primary-color);
}
```
