# Digital Heroes Qualification Task — Web Development (Role 05)

This repository contains the complete assessment submission for the **Digital Heroes Web Development Qualification Task**. The project is split into two primary components: a production-grade B2B marketing website built with clean, accessible architectural tokens, and a technical mobile performance optimization case study targeting a major e-commerce platform.

## 🚀 Live Deployments & Artifacts
*   **Production Marketing Platform (Task A):** [https://sanskar-digital-heroes.netlify.app/]/index.html
*   **Performance Fix Proof-of-Concept (Task B):** [https://sanskar-digital-heroes.netlify.app/poc-fix]/poc-fix.html

---

## 🛠️ Task A: Production Marketing Site (Ledgerline)
A hand-coded, high-performance, multi-page marketing website built for **Ledgerline**, a fictional B2B automated accounting software solution.

### Architectural Core Features:
*   **Strict Semantic Structure:** Developed entirely with semantic markup definitions (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) ensuring clean parsing.
*   **Total Layout Responsiveness:** Implemented fluid mobile-first styling structures utilizing CSS Flexbox, Grid layouts, and system font stacks to entirely bypass asset loading bottlenecks.
*   **Accessibility First (A11y):** Integrated functional skip-to-content routing anchors, clear outline tab indicators, and full keyboard-navigable interactive navigation logic.
*   **Search Engine Optimization (SEO):** Injected complete JSON-LD Structured Data modules including standard `SoftwareApplication` blocks on the Home core layout, `Product` indicators, and `FAQPage` configurations on the contact nodes.

---

## 📊 Task B: Slow Site Diagnosis & Optimization (Anthropologie)
A comprehensive performance audit, metrics breakdown, and component reconstruction targeting the mobile implementation of **Anthropologie.com**.

### Identified Performance Deficits:
*   **Cumulative Layout Shift (CLS) Score of 0.67:** Late-resolving advertising graphics and marketing hero promotions load into the layout without specified grid parameters, causing erratic content jumping.
*   **Sluggish Time to First Byte (TTFB) of 1.9s:** Prolonged waiting intervals on a blank viewport before primary code bits compile.

### Engineering Mitigations Implemented (`poc-fix.html`):
1.  **Zero Layout Shift:** Implemented hardcoded modern `aspect-ratio` bounding blocks on image containers to force mobile device viewports to isolate loading spaces prior to image download.
2.  **Asset Load Prioritization:** Adjusted network handling structures with explicitly managed `fetchpriority="high"` directives on above-the-fold content assets.

---

## 🤖 AI Assistance Disclosure
In strict adherence to qualification assessment rules, conversational artificial intelligence engines (ChatGPT/Claude) were utilized to validate schema structure outputs for the JSON-LD objects, generate base prioritization tables, and review key focus listeners within the responsive menu script. All code fragments were manually checked for quality, restructured into isolated vanilla formats, and cross-examined using local live environments before delivery.

---

## 📁 Repository File Structure
```text
├── 📂 css
│   └── style.css          # Central typography and responsive grid systems
├── 📂 js
│   └── main.js            # Menu toggling script and front-end form verification
├── 📄 index.html          # Task A: Ledgerline Home Layout
├── 📄 product.html        # Task A: Feature Suite Summary
├── 📄 pricing.html        # Task A: Transparent Plan Matrix
├── 📄 contact.html        # Task A: Accessible Input Gateway Form
├── 📄 poc-fix.html        # Task B: Anthropologie Optimization Sandbox
└── 📄 README.md           # Documentation Manifesto
```

---
*Built for the Digital Heroes Training Task.*
