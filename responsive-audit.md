# Responsive audit

## Mobile 390px
Hero is readable and the mobile menu is available. The title dominates correctly, but the first viewport places the hero image close to the fold; preserve this hierarchy while reducing any unnecessary vertical gap. Keep CTA controls side by side only when they fit.

## Tablet 768px
The current layout still uses the desktop two-column hero. It is visually strong, but the headline wraps into five lines and the image nearly touches the text column. Tablet-specific rules should reduce the hero gap, slightly lower display type, and protect the image from squeezing the text.

## Planned improvements
Add an explicit 680–1024px tablet breakpoint, use clamp-based display sizes and container gutters, set `min-width: 0` on major grid children, prevent horizontal overflow, improve mobile image width and sticker bounds, and make navigation collapse earlier for narrow tablets.

## Post-fix check

At 390px the hero remains readable, the header fits, and the image begins within the first screen without horizontal overflow. At 768px the two-column hero keeps both the headline and image legible, with controlled spacing and no visible clipping.
