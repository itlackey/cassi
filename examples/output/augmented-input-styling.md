---
title: "Augmented Input Styling"
shortDescription: "Default styling for augmented input elements."
tags: ["CSS", "Styles", "Input"]
selectors:
    - ".aug-input"
permalink: "/styles/aug-input-styling"
---

## Augmented Input Styling

The `.aug-input` rule defines the default styling for augmented input elements in your application. This includes form inputs enhanced with additional features or behaviors, such as date pickers, color pickers, or any custom input widget.

### CSS Declarations

```css
.aug-input {
  width: 100%;
  --aug-clip-tl1: initial; /* Top-left clip */
  --aug-clip-tr1: initial; /* Top-right clip */
  --aug-clip-bl1: initial; /* Bottom-left clip */
  --aug-clip-br1: initial; /* Bottom-right clip */
  --aug-border: initial; /* Border shorthand */
  --aug-border-all: 0.25vh; /* All sides border width */
  --aug-tl1: 1vh; /* Top-left corner size */
  --aug-tr1: 1vh; /* Top-right corner size */
  --aug-br1: 1vh; /* Bottom-right corner size */
  --aug-bl1: 1vh; /* Bottom-left corner size */
  --aug-border-bg: var(--fourth-accent); /* Border background color */
  --aug-inlay: initial; /* Inset (inner) border shorthand */
  --aug-inlay-bg: var(--menu-inlay-bg-color); /* Inset border background color */
}
```

### Usage

To use the `.aug-input` rule in your HTML, wrap any input or custom widget that you wish to apply this styling to. For standard inputs, simply add the `class="aug-input"` attribute:

```html
<input class="aug-input" type="text">
<select class="aug-input">
  <option>Choose...</option>
</select>
```

For more complex augmented inputs:

```html
<div class="aug-input"> <!-- Use a div to encapsulate custom input widgets -->
  Your Custom Input Widget Here...
</div>
```

### Example

```html
<div class="example-container">
  <input class="aug-input" type="text"> <!-- Standard input example -->
</div>
```

### Developer Notes

- The variables within the `.aug-input` rule allow for customization and easy theme adaptation. For instance, changing `--fourth-accent` or `--menu-inlay-bg-color` colors would dynamically update your input styling throughout the application.
- Consider using this rule within a CSS module specific to form elements to maintain a clean separation of concerns and ease of maintenance.
- Always test augmented input widgets for functionality across different browsers and devices, as additional features may introduce accessibility or compatibility issues.
