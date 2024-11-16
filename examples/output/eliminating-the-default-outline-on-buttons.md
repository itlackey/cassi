---
title: "Button Hover and Focus-visible Handling"
shortDescription: "Eliminating the default outline on buttons for improved aesthetics."
tags: ["CSS", "Interactions", "Best Practices"]
selectors:
    - 'button'
    - ':hover'
    - ':focus-visible'
permalink: "/styles/eliminate-button-outline"
---

## Eliminating the Default Outline on Buttons

When a button receives focus, typically browsers add a default outline to highlight it. However, this can look less than desirable in modern web designs. The CSS rule provided handles these interactions:

```css
button:hover,
button:focus-visible {
  outline: none;
}
```

In this context:
- `button:hover` applies the style when the mouse hovers over a button.
- `button:focus-visible` only applies the styles if the button receives focus, but only in browsers that support the `:focus-visible` pseudo-class (which provides an enhanced experience for users and developers).

Using these styles makes buttons appear more polished. Instead of relying on the default outline, which can be visually disruptive, this approach allows for better control over how buttons are presented when they receive attention.

## Usage Example

```html
<button class="btn">Hover over me or press with a mouse without accidental clicks.</button>
```

## Additional Tips

- **Cross-Browser Compatibility:** Ensure that your users, regardless of browser preference or device accessibility needs, can interact with elements according to the intended design. Using `:focus-visible` allows us to handle focus styles in a more user-friendly fashion, showing the style only in browsers that hide the focus when it occurs by accident.
- **Accessibility Considerations:** Remember to test your buttons and other interactive elements with keyboard navigation enabled. While the `outline: none;` can enhance visual design, too much reliance on it can reduce accessibility for some users, especially those who rely on screen readers or keyboard navigation.

By thoughtfully applying aesthetics while considering usability, we can create a seamless user experience that looks great and works well across all devices.
