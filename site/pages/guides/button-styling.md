---
title: "Button Styling"
shortDescription: "Styling for buttons to ensure a modern and consistent design."
tags: ["CSS", "Styles", "Selectors"]
selectors:
    - 'button'
    - '.btn'
    - '.btn-primary'
    - '.btn-secondary'
    - '.btn-lg'
    - '.btn-sm'
    - '.btn:hover'
permalink: "/styles/button-styling.html"
---

## Button Styling

The `button` rule sets up the base styling for all buttons, while `.btn` further refines this for all button elements. The `.btn-primary`, `.btn-secondary`, and additional variants like `.btn-lg`, `.btn-sm` are defined to provide a variety of styles that align with modern design principles.

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
  border: 1px var(--third-accent) solid;
}

.btn {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px var(--primary-accent) solid;
  border-radius: 4px;
  font-size: 1rem;
}

.btn:hover {
  background-color: rgba(17, 17, 17, 0.8);
  color: white;
}

.btn-primary {
  background-color: var(--primary-accent);
  color: white;
}

.btn-secondary {
  background-color: var(--secondary-accent);
  color: white;
}

.btn-lg {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
}

.btn-sm {
  padding: 0.3rem 0.8rem;
  font-size: 0.875rem;
}
```

## Usage

Here's how to use this rule in your HTML:

```html
<button>Default Button</button>
<button class="btn">Styled Button</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-lg">Large Button</button>
<button class="btn btn-sm">Small Button</button>
```

## Example

<div class="example-container">
    <button>Default Button</button>
    <button class="btn">Styled Button</button>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-lg">Large Button</button>
    <button class="btn btn-sm">Small Button</button>
</div>

## Developer Notes

- Use `.btn` for default button style unless a specific variant is needed.
- Utilize `.btn-primary` to emphasize important actions like submit or create.
- Apply `.btn-secondary` for secondary, less critical actions where primary buttons are prominent.
- Adjust padding with `.btn-lg` and `.btn-sm` for varying size requirements in layouts.
- Ensure button text stands out by utilizing high contrast colors and proper typography.
