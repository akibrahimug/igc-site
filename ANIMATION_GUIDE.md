# IGC Fashion App - Animation System Guide

## Overview

This application now features a comprehensive animation system that provides smooth, consistent, and engaging user experiences across all pages and components.

## Animation Components

### 1. AppEntryAnimation (`src/components/AppEntryAnimation.jsx`)

- **Purpose**: Provides the initial loading screen and overall page entry animation
- **Features**:
  - Loading screen with IGC branding
  - Smooth fade-in transition for the entire application
  - Staggered children animations
  - Configurable timing and easing

### 2. PageTransition (`src/components/PageTransition.jsx`)

- **Purpose**: Handles smooth transitions between different pages
- **Features**:
  - Route-based animations
  - Exit animations for smooth page changes
  - AnimatePresence for proper transition handling

### 3. Enhanced Navigation (`src/components/Bloks/Navigation.jsx`)

- **Purpose**: Animated navigation bar with smooth interactions
- **Features**:
  - Logo scale-in animation
  - Menu item stagger animations
  - Smooth hover effects
  - Scroll-based background transitions

### 4. Enhanced Hero (`src/components/Bloks/Hero.jsx`)

- **Purpose**: Animated hero sections with image loading states
- **Features**:
  - Image scale-in animation
  - Gradient overlay fade-in
  - Loading spinner animations
  - Progressive reveal of elements

### 5. Enhanced Footer (`src/components/Sections/Footer.jsx`)

- **Purpose**: Animated footer with staggered content reveal
- **Features**:
  - Slide-up entrance animation
  - Staggered column animations
  - Smooth hover effects on links

## Animation Configuration

### Centralized Animations (`src/lib/animations.js`)

The application uses a centralized animation configuration system for consistency:

```javascript
export const animations = {
  page: {
    /* Page transition animations */
  },
  fadeIn: {
    /* Fade in effects */
  },
  slideUp: {
    /* Slide up effects */
  },
  scaleIn: {
    /* Scale animations */
  },
  stagger: {
    /* Staggered list animations */
  },
  hover: {
    /* Hover effects */
  },
  loading: {
    /* Loading animations */
  },
  nav: {
    /* Navigation animations */
  },
  card: {
    /* Card animations */
  },
};
```

### Easing Functions

Predefined easing curves for consistent motion:

- `easeOut`: Smooth deceleration
- `easeIn`: Smooth acceleration
- `easeInOut`: Smooth acceleration and deceleration
- `bounce`: Bouncy, playful motion

### Duration Presets

Standardized timing for animations:

- `fast`: 0.2s
- `normal`: 0.5s
- `slow`: 0.8s
- `slower`: 1.2s

## Custom Hooks

### useScrollAnimation (`src/hooks/useScrollAnimation.js`)

- **Purpose**: Provides scroll-triggered animations
- **Usage**: Automatically triggers animations when elements come into view
- **Features**:
  - Intersection Observer integration
  - Configurable thresholds
  - Automatic cleanup

### useScrollPosition (`src/hooks/useScrollPosition.js`)

- **Purpose**: Tracks scroll position for scroll-based animations
- **Usage**: Provides real-time scroll position data

## CSS Animations

### Global Animation Utilities (`src/app/global.css`)

Additional CSS-based animations for elements that don't require complex JavaScript:

```css
.animate-fade-in {
  /* Fade in animation */
}
.animate-slide-up {
  /* Slide up animation */
}
.animate-scale-in {
  /* Scale in animation */
}
.animate-delay-100 {
  /* 0.1s delay */
}
.animate-delay-200 {
  /* 0.2s delay */
}
/* ... and more */
```

## Implementation Examples

### Using Centralized Animations

```javascript
import { animations } from "@/lib/animations";

<motion.div {...animations.fadeIn}>Content here</motion.div>;
```

### Using Scroll Animation Hook

```javascript
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const [ref, isVisible] = useScrollAnimation(0.1);

<motion.div
  ref={ref}
  initial={{ opacity: 0 }}
  animate={{ opacity: isVisible ? 1 : 0 }}
>
  Content here
</motion.div>;
```

### Using Stagger Animations

```javascript
<motion.div variants={animations.stagger.container}>
  {items.map((item, index) => (
    <motion.div key={index} variants={animations.stagger.item}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

## Best Practices

1. **Performance**: Use `transform` and `opacity` for animations when possible
2. **Accessibility**: Respect `prefers-reduced-motion` media query
3. **Consistency**: Use centralized animation configurations
4. **Timing**: Keep animations under 1 second for optimal UX
5. **Easing**: Use appropriate easing curves for natural motion

## Browser Support

The animation system uses:

- **Framer Motion**: Modern React animation library
- **CSS Transitions**: Fallback for simple animations
- **Intersection Observer**: For scroll-triggered animations

All animations are designed to gracefully degrade in older browsers.

## Customization

To customize animations:

1. Modify `src/lib/animations.js` for global changes
2. Update individual components for specific animations
3. Add new animation variants to the centralized configuration
4. Use CSS custom properties for dynamic values

## Performance Considerations

- Animations use GPU-accelerated properties when possible
- Scroll animations are optimized with Intersection Observer
- Page transitions use efficient exit animations
- Loading states prevent layout shifts
