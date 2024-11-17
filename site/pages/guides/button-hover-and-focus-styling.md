---
title: "Button Hover and Focus Styling"
shortDescription: "Styling for buttons when they receive a hover state or keyboard focus."
tags: ["CSS", "Interactivity", ".focus-visible"]
selectors:
    - 'button:hover'
    - 'button:focus-visible'
permalink: "/styles/button-hover-focus-styling.html"
---

## Button Hover and Focus Styling

The rule defined here removes the default browser outline when buttons receive a hover state or keyboard focus. This helps to improve accessibility by ensuring that users can understand how elements are interacted with without relying on visual cues alone.

## CSS Declarations

```css
button:hover,
button:focus-visible {
  outline: none;
}
```

## Usage

Here's how to use this rule in your HTML. Note that applying this rule ensures a consistent and accessible user experience for users navigating with keyboard or exploring hover effects visually.

```html
<button class="btn btn-primary">Hover Me</button>
<button class="btn btn-submit" autofocus>Hassle-Free Focus</button>
```

## Example

<div class="example-container">
    <button class="btn btn-primary">Hover Me</button>
    <button class="btn btn-submit" autofocus>Hassle-Free Focus</button>
</div>

## Developer Notes

- Ensure that you provide an alternative visual cue for these states, such as changing the button's background color or border to indicate interaction.
- This rule is particularly useful in modern UI patterns and is compatible with WCAG guidelines 2.1 AA checkpoint 2.4.7.
