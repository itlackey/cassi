---
title: "Button Hover Effects"
shortDescription: "Styling for button hover effects to improve user interaction."
tags: ["cassi","CSS", "Styles", "Selectors", "button:hover"]
selectors:
    - 'button:hover'
---
## Button Hover Effects

The `button:hover` rule is used to provide a visual feedback when a user hovers over a button, typically changing the background color.

## Usage

Here's how to implement this rule in your HTML:

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-submit">Submit</button>
```

## Example

<div class="example-container">
    <button class="btn btn-primary" style="--accent-hover: #6c757d;">Primary</button>
    <button class="btn btn-submit" style="--accent-hover: #009e8a;">Submit</button>
</div>

## Developer Notes

- Ensure that `--accent-hover` is defined in your CSS to customize the hover effect.
- Use custom properties (CSS variables) to maintain a consistent color scheme across your application.

## CSS Declarations

```css
button:hover {
  background: var(--accent-hover);
}
```

This rule allows you to dynamically change the button's appearance on hover, providing a smooth and interactive user experience.
