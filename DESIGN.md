# DESIGN — Toit à Toit Entretien

Locked design system from the frontend-design brainstorm → critique pass.
`src/styles/global.css` is the single source of truth in code; this file explains
the *why*. Priority order when anything conflicts (from the brief):
**conversion · speed · trust → frontend-design → Impeccable rules → Taste dials → Emil motion.**

## Direction thesis
The roofing world is **cool slate and one warm metal**: wet-slate charcoal, zinc-grey
winter sky, and the single warm note of **copper flashing**. We build the whole identity
on that contrast — a cool, disciplined, trustworthy base with exactly one confident
accent (copper) reserved for the things that convert: the phone button, the quote CTA,
and the before/after handle. Copper ages to **patina green**, which we use, sparingly, as
the semantic "clean / done / after" colour — a detail drawn straight from the material.

## Taste dials (design-taste-frontend)
Skill default is 8 / 6 / 4. Dialed for a trust-driven trades site:
- **DESIGN_VARIANCE: 5** — distinctive and credible, not artsy. Asymmetric hero, honest
  structure; nothing that reads as a flashy agency showreel.
- **MOTION_INTENSITY: 3** — restrained. The signature moves; everything else is quiet.
- **VISUAL_DENSITY: 4** — generous, scannable. Stressed homeowners on mobile.

## Critique — defaults rejected
- **Not** cream + high-contrast serif + terracotta (AI look #1). We use cool zinc surfaces,
  a grotesque display, and copper — warm metal, not terracotta clay.
- **Not** near-black + acid-green/vermilion (AI look #2). Our dark band is slate, our accent
  is a weathered metal, not neon.
- **Not** broadsheet hairlines / dense newspaper columns (AI look #3).
- **Not** the generic contractor template (full-bleed stock "happy roofer," blue gradient,
  three emoji feature tiles, centered hero). We earn distinction with a real interactive
  before/after signature and a copper-on-slate palette specific to roofing.

## Color tokens (OKLCH; see global.css for the canonical values)
| Token | Role | Notes |
| --- | --- | --- |
| `--ink` | primary text, dark slate | ~oklch(0.24 0.012 235) ≈ #1B2227. ≥15:1 on surface. |
| `--ink-soft` | secondary text | meets 4.5:1 on surface (no light-grey body text). |
| `--surface` | page background | cool zinc near-white #F4F6F7 — NOT cream. |
| `--surface-raised` | cards / panels | #FFFFFF. |
| `--slate` | dark contrast band bg | #14191D — honesty band, footer. |
| `--line` | borders, dividers | cool grey #D7DDE0. |
| `--brand` | links, secondary, focus | slate-blue #2E5260 (Montréal sky). |
| `--accent` | CTA bg, handle (copper) | #A85F32; white bold label ≥ 3:1 (large-text AA). |
| `--accent-strong` | copper *text* on light | #8A4E27 → 4.6:1 on white (normal-text AA). |
| `--patina` | "clean/after/done" semantic | verdigris #3E7C6A, used sparingly. |

**Contrast discipline (Impeccable):** body copy is `--ink`/`--ink-soft`, never light grey
on tint. Copper as a *background* carries bold ≥18px labels (3:1 large-text); copper as
*text* uses `--accent-strong` (4.5:1).

## Typography — three deliberate roles
- **Display — Bricolage Grotesque.** Crafted, slightly irregular, structural — reads as
  hand-made and honest, like good signage. Excellent Québécois-French diacritics. Used big,
  tight tracking, with restraint.
- **Body — IBM Plex Sans.** Humanist, precise, very legible in French. The "measured,
  honest tradesperson" voice. Contrast axis vs the grotesque display (not two look-alike sanses).
- **Utility — IBM Plex Mono.** Eyebrows, labels, phone number, data ("24 h", boroughs). Adds a
  measured, technical honesty.
- Scale: ~1.25 ratio. Body 16–18px, line-length capped 65–75ch. Hierarchy via scale + weight.
- All three self-hosted via Fontsource (perf + no third-party requests), `font-display: swap`.

## Layout
- Asymmetric, not centered (Taste anti-center at variance > 4). Hero = split: thesis copy
  left, before/after signature right; stacks on mobile.
- CSS **Grid** for structure (no flexbox % math). Page container `max-w-[1200px]`.
- Full-height hero uses `min-h-[100svh]`, never `h-screen`.
- Generous vertical rhythm; logic-grouping with `--line` dividers over card-in-card nesting.

## Signature — the before/after roof reveal
A draggable before → after of a real Montréal roof (leaf-choked → clean / snow-loaded →
cleared). It proves the work instantly and is the most characteristic moment in the subject's
world. Copper drag handle. Touch + mouse + **keyboard** (arrow keys), labelled "Avant/Après".
The hero "before" image is the LCP — optimized and eager; the rest lazy-loads. Until the owner
provides real photos, the slider shows clearly-labelled **sample** illustrations (never passed
off as real jobs).

## Motion (Emil Kowalski — restrained)
- Durations 150–260ms, custom `ease-out` (`cubic-bezier(0.22, 1, 0.36, 1)`); spring feel on the
  handle release only.
- What moves: the before/after handle; subtle fade-up scroll-reveals on trust/portfolio/testimonial;
  sticky CTA entrance after the hero; `:active` press (scale .97) and hover lift on cards/buttons.
- `transition` targets specific properties (never `all`). Nothing animates from `scale(0)` /
  nothing-from-nothing. **`prefers-reduced-motion: reduce` disables all of it.**

## Icons
Inline SVG in the Phosphor style, `stroke-width: 1.5`, `currentColor`. **No emoji, ever.**
