---
title: "Augmented Input Styling"
shortDescription: "Styling for inputs with additional styling options."
tags: ["CSS", "Styles", "Selectors"]
selectors:
    - '.aug-input'
permalink: "/styles/augmented-input-styling.html"
---

## Augmented Input Styling

The `.aug-input` rule provides advanced control over the appearance and behavior of input fields. It allows developers to customize various properties such as borders, clipping, padding, and background in different corners.

By defining custom CSS variable values for each corner (top-left, top-right, bottom-right, bottom-left), you can create a unique appearance for inputs that suit your design needs.

## CSS Declarations

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
  --aug-bl1: 1vh;
  --aug-br1: 1vh;
  --aug-border-bg: var(--fourth-accent);
  --aug-inlay: initial;
  --aug-inlay-bg: var(--menu-inlay-bg-color);  
}
```

## Usage

Here's how to use this rule in your HTML:

```html
<input type="text" class="aug-input">
<div class="example-container">
    <input type="number" class="aug-input" placeholder="Number Input">
</div>
```

## Example Output

<div class="example-container">
    <input type="text" class="aug-input" value="Example Value">
    <br><br>
    <input type="number" class="aug-input" placeholder="Number Input">
    
</div>

## Developer Notes

- Customize the clipping and border properties to suit your design requirements. 
- Adjust `--aug-tl1`, `--aug-tr1`, `--aug-bl1`, `--aug-br1` variables for precise control over corner border radius.
- Use color variables from your palette like `--fourth-accent` and `--menu-inlay-bg-color` to maintain consistency with the rest of your design.

This styling rule allows for highly customized inputs, making it ideal for applications that require a unique user interface. Adjust as necessary based on the specific requirements of your project.
