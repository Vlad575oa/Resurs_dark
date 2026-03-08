# 🌍 GLOBAL_RULES.md  
**Next.js App Router · SEO-First · BigTech Architecture Standard**

> This document defines **non-negotiable architectural laws** for the project.  
> Any violation is considered a **system-level defect**, even if the feature works visually.

---

## 1. Core Philosophy

### 1.1 Server-First Doctrine
- All pages are **Server Components by default**
- Client Components are **explicit opt-in**
- Indexable content **must exist in HTML before hydration**

---

### 1.2 SEO Over Developer Experience
- Developer convenience **never overrides**:
  - SEO
  - Performance
  - Semantic correctness

---

### 1.3 One Page = One Search Intent
- Every page represents **exactly one search intent**
- Mixing multiple intents on a single URL is forbidden

---

## 2. Rendering Rules

### 2.1 Mandatory Rendering Strategy

| Page Type | Rendering |
|---------|----------|
| Marketing pages | SSG / ISR |
| Service pages | SSG / ISR |
| Blog articles | SSG |
| Category pages | SSG / ISR |
| Dashboards / Auth | CSR |

---

## 3. Metadata Rules

### 3.1 Mandatory Metadata per Page
Every indexable page **must define**:
- `title`
- `description`
- `canonical`

---

## 4. UI Stability & Protected Sections

### 4.1 Protected Hero & Header
- **DO NOT MODIFY** the Hero section without explicit user request.
- **DO NOT MODIFY** the truck/car icon in the header without explicit user request.
- These elements are considered "finely tuned" and must remain consistent.

---

## 5. HTML & Semantic Integrity
- Exactly **one `<h1>` per page**
- Mandatory tags: `<main>`, `<article>`, `<section>`, `<nav>`, `<aside>`

---

## 6. Performance (Core Web Vitals)
- **LCP ≤ 2.5s**
- **CLS ≤ 0.1**
- **INP ≤ 200ms**

---

## 7. Ownership & Boundaries

| Layer | Responsibility |
|-----|---------------|
| `app/` | Routing & rendering |
| `components/` | Pure UI only |
| `features/` | User scenarios |
| `entities/` | Business models |
| `lib/` | Server-only logic |
| `content/` | SEO content |

---

## 8. Design Aesthetics & Visual Identity

### 8.1 Color & Glow Doctrine
- **Primary Glow**: Use `primary/20` with `blur-[120px]` for atmospheric background effects.
- **Color Transitions**: Favor gradients:
  - Text: `from-white to-slate-400` or `from-primary to-blue-400`.
  - Elements: `from-primary to-purple-600` for technological "glow" accents.
- **Action Color**: Use high-contrast Orange (`#ff8c00`) for primary conversion buttons with `shadow-glow`.

### 8.2 Premium Animation Principles
- Any interaction or entry must feel **deliberate and premium**.
- **Duration**: Use `duration-500` or `duration-700` for smooth CSS transitions.
- **Framer Motion Defaults**:
  - `initial={{ opacity: 0, y: 20 }}`
  - `animate={{ opacity: 1, y: 0 }}`
  - `transition={{ duration: 0.8, ease: "easeOut" }}`

### 8.3 Component Integrity
- **Glassmorphism**: Use `bg-[#161b22]/70` with `backdrop-blur-md` for all cards and panels.
- **Visual Depth**: Use large background icons (`opacity-10`) behind content blocks to create layers.
- **Real-time Visualization**: Dashboards must feature dynamic elements (progress bars, timelines, status indicators).

---

**These rules are enforced by code review and CI checks.**  
No exceptions without explicit architectural approval.
