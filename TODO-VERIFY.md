# TODO — Owner verification before launch

This site reuses content salvaged from the old `toitatoitentretien.ca`. Per the
build brief, **no business claim is published as fact until Richard confirms it.**
Every item below must be resolved before go-live. Nothing here is invented; it is
either carried over from the old site (to re-confirm) or a setup decision needed.

## 1. Business claims to confirm (carried over from the old site)
- [ ] **Liability insurance** — old site says "assurance responsabilité complète."
      Still true? Insurer/policy current? (Used in trust bar + copy.)
- [ ] **Guarantee** — old site claims a "complete guarantee." Confirm exact scope
      and wording we may publish.
- [ ] **"Best price on the Island of Montréal"** — keep this claim, soften it, or
      drop it? (Comparative price claims can be legally sensitive.)
- [ ] **Eco-friendly / safe / durable methods** — confirm we may state this.
- [ ] **Years in business / "local depuis [année]"** — we need the founding year
      to use "local since ____" in the trust bar and About page.

## 2. NAP & address (local SEO — must be byte-identical with Google Business Profile)
- [ ] **Service-area vs. storefront**: keep as a service-area business (no public
      street address, currently the default) OR publish a full street address?
- [ ] **Postal code** — provide if an address will be shown.
- [ ] **Opening hours** — needed before we add `openingHours` to schema (omitted now).
- [ ] **priceRange** (e.g. `$$`) — optional schema field; provide if desired (omitted now).
- [ ] Confirm phone `(514) 993-6897`, email `toitatoitentretien@gmail.com`, and the
      Facebook URL are all current.

## 3. Regions served (confirm each is accurate)
Currently listed: Montréal, Saint-Léonard, Ahuntsic-Cartierville, Le Plateau-Mont-Royal,
Montréal-Nord, Laval, Saint-Bruno-de-Montarville, Brossard.
- [ ] Remove any not actually served; add any missing.

## 4. Testimonials & photos (the honesty brand — do not fake anything)
- [ ] Permission to publish real customer names/boroughs (Richard Gontarski,
      Sébastien Hupert, Nathaniel Tremblay, Vanessa Longhorn, Frédéric P.,
      Béatrice A., Claude R.).
- [ ] `Review` schema will be added **only** for genuine, attributable reviews.
- [ ] Provide the real before/after job photos (Feuilles, Drain, Inondations,
      Déneigement, Toiture) to re-host and optimize. **No AI-generated job photos.**
- [ ] **Municipal/city logos from the old site must NOT be reused** as implied
      endorsements unless the owner confirms a real, permissioned relationship.

## 5. Leads, hosting, analytics
- [ ] **Where do quote-form leads go?** Confirm destination email + whether to also
      store a copy / use a form service (Resend, Netlify Forms, Formspree).
- [ ] **Host** (Netlify / Vercel / Cloudflare Pages). If Cloudflare: verify AI bots
      and search crawlers are NOT blocked by bot-fight defaults.
- [ ] **Analytics**: Plausible or GA4. Confirm **Québec Law 25** consent compliance
      for whatever is chosen.
- [ ] Confirm production domain is the apex `toitatoitentretien.ca`.

## 6. SEO / GEO setup actions for the owner
- [ ] **Google Business Profile** — claim/optimize: correct categories, service area,
      real photos, and actively collect Google reviews. Highest-ROI off-site action.
- [ ] Provide the **old site's URL list** (services, `/portfolios/...`, `/realisations-...`,
      blog posts) so we can 301-redirect each to its new equivalent and keep link equity.
- [ ] FAQ cost ranges — will the owner commit to publishable price ranges? (Strong for
      both SEO and AI answers; only include if accurate.)
- [ ] Periodically ask ChatGPT / Perplexity / Google AI Overviews the target questions
      ("roof snow removal Montréal", "nettoyage toiture Montréal") and check for citation.

## 7. Optional / later
- [ ] Headless CMS (Decap or Sanity) if the owner wants self-serve editing.
- [ ] Seasonal CTA swap (snow removal in winter, leaf/drain in autumn) — content-driven.
