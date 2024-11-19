---
title: Unordered and Ordered List Styling
shortDescription: >-
  Styling for unordered (ul) and ordered (ol) lists to provide consistent
  padding.
category: Layout
tags:
  - list
  - ul
  - ol
  - cassi
cassi:
  id: dWwsIG9s
  hash: dWwsCm9sIHsKICBwYWRkaW5nLWxlZnQ6IDNyZW07Cn0=
  source: example/assets/css/main.css
  filename: unordered-and-ordered-list-styling.md
selectors:
  - ul
  - ol
updated: '2024-11-19T06:00:42.806Z'
---

# Unordered and Ordered List Styling

The CSS rules `ul` and `ol` define the padding on the left side of these list elements, ensuring that nested lists are visually separated in a logical manner.

## Usage

Here's how to use this rule in your HTML:

```html
<ul class="no-bullets">
  <li>Item 1</li>
  <li>Item 2 with sublist:
    <ul>
      <li>Subitem 1</li>
      <li>Subitem 2</li>
    </ul>
  </li>
</ul>

<ol class="ordered-list">
  <li>First Step</li>
  <li>Second Step: Another substep.
    <ol>
      <li>Sub-step 1</li>
      <li>Sub-step 2</li>
    </ol>
  </li>
</ol>
```

## Example

<div class="example-container">
    <ul class="no-bullets" style="list-style-type: none;">
        <li>Item 1</li>
        <li>Item 2 with sublist:
            <ul>
                <li>Subitem 1</li>
                <li>Subitem 2</li>
            </ul>
        </li>
    </ul>

    <ol class="ordered-list">
        <li>First Step</li>
        <li>Second Step: Another substep.
            <ol>
                <li>Sub-step 1</li>
                <li>Sub-step 2</li>
            </ol>
        </li>
    </ol>
</div>

## Developer Notes

- Setting `padding-left: 3rem;` for both `ul` and `ol` ensures that nested lists are visually separated, improving readability.
- Customize the padding to fit your specific design requirements if necessary.

## CSS Declarations

```css
ul,
ol {
  padding-left: 3rem;
}
```
