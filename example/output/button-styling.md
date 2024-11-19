---
title: Button Styling
shortDescription: >-
  Styling rules for buttons in the UI, including primary button and hover
  states.
category: Buttons
tags:
  - button
  - .btn
  - .btn-primary
  - primary
  - hover
  - cassi
cassi:
  id: YnV0dG9u
  hash: >-
    YnV0dG9uIHsKICBjdXJzb3I6IHBvaW50ZXI7CiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7CiAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LWNvbG9yKTsKICBib3JkZXI6IG5vbmU7CiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07CiAgcGFkZGluZzogMC41cmVtIDFyZW07CiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsKICBmb250LXdlaWdodDogYm9sZDsKfQ==
  source: example/assets/css/main.css
  filename: button-styling.md
selectors:
  - button
updated: '2024-11-19T06:01:03.981Z'
---

# Button Styling

The `button` rule defines the basic styling for all buttons in the application. The `.btn-primary` overrides these defaults to give special styles to primary action buttons.

## Usage

Here's how to use this rule in your HTML:

```html
<button class="btn">Default Button</button>
<button class="btn btn-primary">Primary Button</button>
```

## Example

<div class="example-container">
    <button class="btn-default">Default Button</button>
    <button class="btn btn-primary">Primary Button</button>
</div>

### Additional Notes:

- Primary buttons are used for the most important actions, and should be limited to keep them effective.
- Hover states can be styled using `:hover` pseudoclass. Below is an example of how you might style a primary button on hover that changes its background color.

```css
.btn-primary:hover {
  background: var(--primary-color-hover);
}
```

This enhances the user experience by providing visual feedback when buttons are interacted with.

## CSS Declarations

```css
button {
  cursor: pointer;
  background: var(--primary-color);
  color: var(--button-text-color);
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-weight: bold;
}
```
