---
title: "Input Styling"
shortDescription: "Styling for input fields to improve user experience."
tags: ["input", ".aug-input", "border-radius"]
selectors:
    - '.aug-input'
permalink: "/styles/input-styling.html"
---

## Input Styling

The `.aug-input` rule defines the styling for input elements, ensuring they are visually appealing and functional.

This rule includes advanced features like customizable clipping, border styles, and inlay backgrounds, providing flexibility for various design needs. It also adds padding around the input to improve usability.

### CSS Declarations

```css
.aug-input {
  width: 100%;
  --aug-clip-tl1: initial;
  --aug-clip-tr1: initial;
  --aug-clip-bl1: initial;
  --aug-clip-br1: initial;
  --aug-border: initial;
  --aug-border-all: 0.25vh;
  --aug-tl1: 1vh;
  --aug-tr1: 1vh;
  --aug-br1: 1vh;
  --aug-bl1: 1vh;
  --aug-border-bg: var(--fourth-accent);
  --aug-inlay: initial;
  --aug-inlay-bg: var(--menu-inlay-bg-color);
}
```

### Usage

Here's how to use this rule in your HTML:

```html
<input class="aug-input" type="text" placeholder="Enter text here">
```

## Example

<div class="example-container">
    <input class="aug-input" type="text" placeholder="Enter text here">
</div>

### Developer Notes

- The `--aug-clip-tl1`, `--aug-clip-tr1`, etc., allow you to control the clipping of borders at each corner of the input field. Setting these values to a CSS length (like a vh unit) will clip the border at that point.
  
- The `--aug-border-bg` variable allows customization of the background color of the border. Using `var(--fourth-accent)` keeps it consistent with your theme.

- The `--aug-inlay-bg` variable controls the inlay background which can be used to add extra visual detail without altering the input field's content area.

- Adjusting `--aug-border-all`, `--aug-tl1`, etc., allows fine-tuning of border thickness and radius to suit different designs.
