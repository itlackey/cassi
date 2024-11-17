---
title: "Button Styling Rules"
shortDescription: "Comprehensive button styling rules for a consistent and professional interface."
tags: ["CSS", "Styles", "Selectors"]
selectors:
    - 'button'
    - '.btn'
    - '.btn.btn-primary'
    - '.btn:hover'
    - '.btn:focus'
permalink: "/styles/button-styling-rules.html"
---

## Button Styling Rules

The `button` rule defines the basic styling for all buttons across the application, ensuring consistency and accessibility. The `.btn` class is used to apply these styles consistently.

The `.btn.btn-primary` rule defines the primary styling for buttons that should stand out, typically used for important calls to action like "Submit" or "Save."

The `button:hover` rule ensures that there's an interactive effect when users hover over the button, enhancing user experience and accessibility.

The `button:focus` rule adds visual focus styles to make it easier for users with disabilities to navigate using a keyboard.

## CSS Declarations

```css
button {
  cursor: pointer;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: rgba(17, 17, 17, 0.75);
  border: 0;
  color: var(--third-accent);
  font-size: 1rem;
  font-family: var(--main-font-family);
}

.btn {
  padding: 0.5rem 1rem;
  background-color: rgba(17, 17, 17, 0.75);
  border: 1px var(--third-accent) solid;
}

.btn.btn-primary {
  background-color: var(--primary-accent);
  color: #fff;
  border-color: var(--primary-accent);
}

button:hover,
.btn:hover,
.btn.btn-primary:hover {
  background-color: rgba(0, 85, 127, 0.8);
}

button:focus,
.btn:focus,
.btn.btn-primary:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--primary-accent-translucent);
}
```

## Usage

Here's how to use these rules in your HTML:

```html
<button>Default Button</button>
<button class="btn">Styled Button</button>
<button class="btn btn-primary">Primary Button</button>
```

## Example

<div class="example-container">
    <button>Default Button</button>
    <button class="btn">Styled Button</button>
    <button class="btn btn-primary">Primary Button</button>
</div>

## Developer Notes

- Use `.btn-primary` sparingly to maintain emphasis on important actions.
- The `:hover` and `:focus` pseudo-classes enhance the button's interactivity, making it more accessible.
- Customize the colors and padding as needed to match your brand.
