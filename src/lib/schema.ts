/**
 * JSON-LD structured-data builders. Emitted server-side into <head> so search
 * and AI engines get clean, machine-readable entity data.
 *
 * Entity-clarity note (GEO): the LocalBusiness uses a stable @id so every page's
 * graph references the same business node.
 */

import { business, regionsServed, type Locale } from './business';

type Json = Record<string, unknown>;

/** Stable business node — emitted site-wide on every page. */
export function localBusinessSchema(site: string, lang: Locale): Json {
  const description =
    lang === 'fr'
      ? "Toit à Toit Entretien est une entreprise de nettoyage et d'entretien de toiture qui dessert Montréal et les environs : déneigement, dégagement de drain, soufflage de feuilles et prévention des inondations de toit plat."
      : 'Toit à Toit Entretien is a roof-cleaning and roof-maintenance company serving Montréal and surrounding areas: snow removal, drain clearing, leaf blowing, and flat-roof flood prevention.';

  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `${site}/#business`,
    name: business.name,
    url: site,
    description,
    telephone: business.phone.e164,
    email: business.email,
    image: `${site}/og-default.jpg`,
    address: {
      '@type': 'PostalAddress',
      // Service-area business: no public streetAddress by default (TODO-VERIFY).
      addressLocality: business.locality,
      addressRegion: business.region,
      addressCountry: business.country,
    },
    areaServed: regionsServed.map((name) => ({ '@type': 'City', name })),
    knowsLanguage: ['fr-CA', 'en-CA'],
    sameAs: [business.social.facebook],
    // priceRange + openingHours intentionally omitted until owner confirms
    // (see TODO-VERIFY.md) — we do not publish unverified business facts.
  };
}

/** Per-service-page Service node, linked to the business as provider. */
export function serviceSchema(
  site: string,
  opts: { name: string; description: string; url: string }
): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { '@id': `${site}/#business` },
    areaServed: regionsServed.map((name) => ({ '@type': 'City', name })),
  };
}

/** FAQPage node for the FAQ and any page with a genuine Q&A block. */
export function faqPageSchema(items: { question: string; answer: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.answer },
    })),
  };
}

/** Breadcrumb trail for non-home pages. `items` are {name, url} in order. */
export function breadcrumbSchema(items: { name: string; url: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
