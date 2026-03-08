# 🏗️ Resurs: Mobile-First Architectural Blueprint

> **Status**: Design Phase | **Architect**: Senior Next.js Architect
> **Core Goal**: LCP < 2s, JS < 150KB, SEO-Perfect, Thumb-Friendly.

---

## 1. User Journeys (Mobile-First)
- **Critical Path**: Home → Features (Hero) → Proof of Savings (Calculator) → Conversion (CTA Audit).
- **Mobile Context**: One-handed operation (thumb-zone center/bottom). Optimized for intermittent Slow 4G connections. Short, high-impact sessions.
- **Above-the-Fold (ATF)**: 
  - Brand identity + Navigation Shell.
  - H1: "Управление корпоративным автопарком нового уровня".
  - One primary CTA: "Получить аудит".

## 2. Next.js Rendering Strategy
- **Homepage (`/`)**: **ISR (60s)**. Most content is marketing/static but needs infrequent updates without re-builds.
- **Service Pages**: **SSG**. Pre-rendered at build time for instant delivery.
- **Calculator**: **CSR (Islands)**. Heavily interactive logic stays on the client.
- **SEO Impact**: 100% crawlable content via Streaming SSR.

## 3. Component Architecture (Server vs Client)
| Component | Type | Rationale |
|-----------|------|-----------|
| **Hero** | **Server** | Critical ATF content, SEO, LCP optimization. |
| **Navigation** | **Server Wrapper** | Immediate shell visibility; client-toggle for interactivity. |
| **Losses/Ecosystem** | **Server** | Pure content. Move animations to CSS or micro-client components. |
| **Calculator** | **Client** | Complex state logic and real-time computation. |
| **Footer** | **Server** | Static links, SEO. |

## 4. Mobile UX Design
- **Thumb-Friendly Zones**: Primary CTAs positioned in the lower two-thirds of the screen.
- **Navigation**: Persistent floating menu trigger or bottom bar (to be implemented).
- **Loading UX**: Suspense-based skeletons for heavy blocks below the fold.

## 5. App Router Structure
```text
/src/app
  /layout.tsx       (Root layout - Server)
  /page.tsx         (Home - Server container)
  /(marketing)      (Route group for SEO pages)
/src/components
  /sections         (Pure Server Components)
  /interactives     (Isolated Client Islands)
/src/features       (Business logic/states)
```

## 6. Resource Optimization Plan
- **Images**: `next/image` with `priority` for Hero. Responsive `sizes="(max-width: 768px) 100vw, 50vw"`.
- **Fonts**: `next/font/google`. Minimal subsets (cyrillic/latin), `display: 'swap'`.
- **JS Strategy**: Dynamic imports for all sections below the fold. Remove large global libraries.

## 7. Progressive Loading Strategy
1. **Immediate (0-500ms)**: HTML, Critical CSS, Font subset, Hero text, Nav shell.
2. **Post-Paint (500ms-1.5s)**: Hero decorative visuals (HeroVisuals), Navigation Interactivity.
3. **Scroll-Driven**: Below-the-fold sections (Losses, Ecosystem) load as the user scrolls.
4. **On-Action**: Modal forms and complex calculators.

## 8. Performance Budget
- **LCP**: ≤ 2.0s (Mobile)
- **Total JS**: ≤ 150KB (Brotli)
- **CLS**: 0
- **INP**: ≤ 100ms

## 9. Performance Risk Analysis
- **Risk**: Framer Motion in every section causes hydration waterfalls.
- **Solution**: Refactor `Losses`, `Ecosystem`, `EconomicEffect` to be Server-rendered, using pure CSS for entry animations.
- **Risk**: Heavy Lucide icons bundle.
- **Solution**: Use tree-shaken imports or SVG sprites.

## 10. Desktop Expansion
- **Grid Evolution**: 1-column mobile → 12-column desktop grid.
- **Visuals**: Enable high-fidelity 3D/Liquid filters only on desktop with `matchMedia`.
- **Secondary UI**: Sidebar navigation and detailed data tables enabled on wider viewports.
