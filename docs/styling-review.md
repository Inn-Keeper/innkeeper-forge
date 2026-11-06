# Styling review — 6 November 2026

## Scope and changes

Reviewed all three routes, shared components, global CSS, inline SVG styles,
scrolling, responsive utilities, and production CSS. Kept the existing Tailwind
conventions and visual theme.

Applied locally:
- Static forge scene under reduced motion; strike sparks and impact stay hidden.
- Lenis now starts/stops when the system motion preference changes.
- Standalone navigation, hero, profile, and footer links have a 2.75rem minimum height.
- Game cards use full-width category/status rows, preserving Unbolted's featured treatment.

## Verification

- Production build, TypeScript, ESLint, and all 13 existing tests passed.
- A temporary lifecycle harness exercised the actual transpiled LenisProvider
  effect with both initial preferences, live changes, RAF rescheduling, and cleanup.
  This checks lifecycle behavior; it is not browser motion acceptance.
- Native Chrome screenshots: In the Making at desktop size and the requested
  375 × 667 iPhone SE device preset. Navigation, headings, status badges, and
  game text fit in the inspected views.
- Native Chrome desktop: featured Decisions panels and demo links visibly aligned.
- Opened the catalogue and selected Python through the real controls; five
  matching projects appeared. Expanded a career role and scrolled the timeline;
  the amber marker followed scrolling along the rail.
- User visual verification: Safari and Firefox look good. Browser versions,
  viewport sizes, and tested interactions were not specified.
- These were visual observations, not DOM geometry assertions. Layout viewport,
  visual viewport, document bounds, and precise hit areas were not measured.

## CSS measurements

PostCSS analysis of globals.css: 24 style rules, 8 keyframes, 137 declarations,
20 custom-property declarations, and no duplicate selectors in the same context.
Three important declarations belong to the generic reduced-motion override.
One grouped rule styles three IDs solely for anchor scroll margins.

Production CSS before the remediation was minified to 35,402 bytes (7,214 gzip).
No extra minifier or production dependency was added.
Base muted-text contrast against the three solid surfaces was 5.62–6.48:1;
primary text was 15.11–17.44:1. These calculations do not cover all rendered states.

## Remaining checks

- Documented minimum browser versions; the user checked Safari and Firefox
  visually, but exact versions and test coverage were not specified.
- Physical phones; Chrome's iPhone preset does not exercise Safari or iOS.
- 767/768/769px and 1023/1024/1025px transitions, short landscape views,
  200% root text size, browser zoom, keyboard traversal, and focus outlines.
- Actual reduced-motion rendering and live preference changes in the browser.
- Project alignment with enlarged text and expanded/collapsed combinations.

Project description and ownership heights remain minimums, allowing text to grow.
No further sizing changes were made because the checked desktop content aligned.
The existing ID scroll-margin rule and pixel-sized secondary labels are
conventions to revisit when needed, not demonstrated product failures.
