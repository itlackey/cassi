---
title: "Augmented Button Styling"
shortDescription: "Custom button styling with hover effects, clip paths, and gradients."
tags:
  - ".aug-button"
  - "button"
  - "CSS gradients"
  - "hover effects"
selectors:
  - '.aug-button'
  - '.aug-button:hover'
permalink: "/styles/augmented-button-styling.html"
---

## Augmented Button Styling

The `.aug-button` rule provides a highly customizable and stylish button styled with hover effects, rounded corners, and gradient fills. The `:hover` pseudo-class defines what happens when the user hovers over the button.

### CSS Declarations

```css
.aug-button {
  font-size: clamp(0.7rem, 1rem, 1.2rem);
  padding: 0.75rem;
  white-space: nowrap;
  display: inline-block;
  cursor: pointer;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.75;
  text-shadow: 0 0 0.25vh black, 0 0 0.25vh black;
  transition: color var(--easing), background-color 300ms, opacity var(--quick-in);
  text-transform: uppercase;
  border: none;
  --aug-clip-tl1: initial;
  --aug-clip-tr1: initial;
  --aug-clip-bl1: initial;
  --aug-clip-br1: initial;
  --aug-border: initial;
  --aug-border-all: 1px;
  --aug-tl1: 0.5rem;
  --aug-tr1: 1rem;
  --aug-br1: 0.5rem;
  --aug-bl1: 0.5rem;
  --aug-border-bg: radial-gradient(circle at top left, var(--pink) 40px, transparent 50px),
          radial-gradient(circle at top right, var(--blue) 20px, transparent 30px),
          radial-gradient(circle at bottom right, var(--pink) 40px, transparent 50px),
          radial-gradient(circle at bottom left, var(--blue) 20px, transparent 30px);
  --aug-inlay: initial;
  --aug-inlay-bg: #ffffff1e;
  background-color: transparent;
}
.aug-button:hover {
  color: white; 
  opacity: 1;
}
```

### Usage

Here's an example of how to use the `.aug-button` class in your HTML:

```html
<button class="aug-button">Hover Over Me!</button>
```

### Example

<div class="example-container">
    <button class="aug-button" style="--pink: #ff6b7b; --blue: #1a8cd9;">Hover Over Me!</button>
</div>

### Developer Notes

- **Gradients and Color Customization:** 
  - The `--aug-border-bg` variable provides a complex radial gradient that gives each button its unique coloration. You can customize the colors by defining `--pink` and `--blue` variables.

- **Hover Effects:**
  - When you hover over an `.aug-button`, it changes opacity to fully visible and updates the text color if it was not initially white for a visual distinction which improves user interaction.

- **Customization:** 
  - The button is fully customizable through CSS custom properties that give you control over clip paths, border radius, gradients, and even the ease of transition effects. This allows developers to create unique styles while maintaining readability and maintainability.
