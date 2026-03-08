# ⚡ PERFORMANCE_RULES.md (Senior Performance Engineer Protocol)

> **Non-negotiable architectural laws for speed and indexing.**

## 1. Above-the-Fold (ATF) SSR Doctrine
Any content visible in the first viewport MUST be server-rendered. No exceptions.
- **Hero Sections**: HTML structure, headings, and primary text must be in the initial stream.
- **Navigation**: The basic shell and links must be server-rendered.
- **Images**: ATF images must use `priority`, `fetchPriority="high"`, and `loading="eager"`.

## 2. Component Scoping
- **Default to Server Components**: Every component starts as a Server Component.
- **Micro-Client Components**: Isolate `use client` to the smallest possible leaf nodes (e.g., a single toggle, a slider, a form field).
- **Forbidden**: Wrapping whole layout sections in `"use client"`.

## 3. Hydration & Interactivity
- Interactive logic must not block the first paint.
- Use `Suspense` with visual skeletons for heavy sub-sections.
- Avoid large UI libraries (Framer Motion, etc.) in the root levels of ATF components if it forces the whole component to be client-side.

## 4. Visual Stability (CLS = 0)
- Never use `opacity: 0` or delayed reveal for primary text.
- Critical text must be visible immediately.
- Use CSS for layout-stable animations.

## 5. JavaScript & Bundling
- Dynamically import below-the-fold components using `next/dynamic`.
- Tree-shake imports (e.g., avoid `import { ... } from 'lucide-react'` if it bloats the bundle; use specific paths if necessary).

## 6. Performance Audit Checklist
1. Is the Hero server-rendered?
2. Is the H1 visible in the initial HTML?
3. Are ATF images prioritized?
4. Are client components isolated?
5. Are below-fold sections lazy-loaded?

---
**Failure to follow these rules is a system-level defect.**
