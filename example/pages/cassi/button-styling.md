---

title: "Button Styling with Cassi"
shortDescription: "Styling for buttons using CSS to ensure consistency and responsiveness across the site."
tags: ["cassi","button", ".btn-primary", "button:hover"]
selectors:
    - '.btn'
    - '.btn.btn-primary'
    - '.btn.btn-secondary'

---

## Button Styling

The `.btn` rule sets up the basic style for buttons, ensuring they have a pointer cursor, padding, border-radius, and text transformations. The `.btn-primary` rule applies specific styles to primary buttons, making them visually distinct. The `.btn:hover` rule can be added for additional interactivity.

## Usage

Here's how you can use these rules in your HTML:

```html
<button class="btn">Default Button</button>
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
```

## Example 

<div style="display: flex; gap: 10px;">
    <button class="btn btn-primary" onclick="">Primary</button>
    <button class="btn btn-secondary" onclick="">Secondary</button>
    <button class="btn" onclick="">Default</button>
</div>

## Developer Notes

- Ensure that primary buttons are used sparingly to maintain the visual hierarchy and avoid cluttering the interface with too many emphasized button styles.
- Consider adding a hover effect for better user interaction, such as changing background color slightly on hover.
- For additional customization, consider defining custom CSS variables like `--primary-color` and `--secondary-color`.

## CSS Declarations

```css
/* Basic button styling */
.btn {
  cursor: pointer;
  background: var(--primary-color);
  color: var(--button-text-color);
  border: none;
  border-radius: var(--border-radius); /* Using a CSS variable to control border radius */
  padding: var(--padding); /* Using a CSS variable for padding */
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color 0.3s ease; /* Smooth transition for hover effects */
}

/* Primary button styling */
.btn-primary {
  --primary-color: var(--button-primary-background, #007bff); /* Default primary color can be overridden using the property */
  --button-text-color: var(--text-color-on-primary-background, #fff);
 
  background: var(--primary-color);
  border: none;
}

/* Additional styles for other states like hover or disabled */
.btn:hover {
  opacity: .9;
}

.btn:disabled {
  opacity: .6;
}
```

---
This markdown file provides a detailed explanation of the CSS rules, usage examples, and developer notes. It is formatted with the required front matter and follows the guidelines provided.
