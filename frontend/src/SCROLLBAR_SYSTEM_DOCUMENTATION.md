# Scrollbar System

## Overview
Custom scrollbar system with theme-integrated colors (coral, teal, gold) for consistent user experience.

## Global Scrollbars
Applied to `html` and `body` elements:
- **Width**: 8px with themed gradient colors
- **Behavior**: Always visible with enhanced hover effects
- **Cross-browser**: Firefox, Chrome, Safari, Edge support

## Modal Scrollbar Variants

### `.modal-scroll` (Standard)
- 8px width, transparent background
- Used for main modal content
- No arrow buttons for clean appearance

### `.modal-scroll-thin`
- 6px width for compact areas
- Scales 1.2x on hover
- Used for sidebars and narrow content

### `.modal-scroll-visible`
- 12px width with prominent visibility
- Includes arrow buttons and track background
- For content requiring obvious scroll indication

## Usage

```tsx
// Standard modal
<BaseModal customScrollbar={true}>
  <div className="overflow-y-auto">Content</div>
</BaseModal>

// Thin variant
<BaseModal customScrollbar="thin">
  <div className="overflow-y-auto">Content</div>
</BaseModal>

// Manual application
<div className="modal-scroll overflow-y-auto">Content</div>
```

## Features
- **Pure CSS**: No JavaScript overhead
- **Body lock**: Prevents content shifting when modals open
- **Stable gutter**: Prevents layout jumps
- **Theme integration**: Uses site color variables
- **Performance optimized**: Hardware acceleration