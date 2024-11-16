---
title: "Custom Button Styling"
shortDescription: "A highly customizable button style with advanced features."
tags: ["CSS", "Advanced Styles", "Clamp Function"]
selectors:
    - '.aug-button'
permalink: "/styles/custom-button-styling"
---

## Custom Button Styling

The `.aug-button` rule provides a sophisticated and versatile button styling that incorporates modern CSS techniques. This rule makes use of the `clamp()` function to ensure font size responsiveness, supports inline display with hover capabilities, and offers flexibility through custom properties for border design.

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
  transition: color var(--easing),
    background-color 300ms,
    opacity var(--quick-in);
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

```

### Usage

To use this rule effectively in your HTML, apply the `aug-button` class to any `<button>` element or eligible container.

```html
<button class="aug-button">Click Me</button>
```

### Example

```html
<div style="--easing: ease-in-out; --quick-in: 0.3s;">
    <button class="aug-button" style="--pink: #ff1493; --blue: #1e90ff;">Responsive and Customizable</button>
</div>
```

### Developer Notes

- This button style leverages CSS custom properties (`--var-name`) for a modular approach to styling. You can adjust the `--pink`, `--blue` etc., directly within HTML or through JavaScript, allowing dynamic changes in appearance.
- The `text-shadow` along with the `clamp()` function applied on font size and padding provides an adaptable button design that responds well across different screen sizes for better accessibility and user experience.
- Be mindful of performance when using complex animations or transitions. The `transiton` property showcases smooth color change effects with adjustable delays (`var(--easing)`, `background-color 300ms`, etc.), enhancing the aesthetic appeal but also possibly impacting load times.

Remember, advanced styling like this should be used judiciously based on your specific design needs and consider mobile responsiveness since it uses modern CSS techniques.
