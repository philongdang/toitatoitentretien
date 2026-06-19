/**
 * Single source of truth for the business identity (NAP), service area, and the
 * structural service index.
 *
 * NAP (Name / Address / Phone) MUST stay byte-identical with the Google Business
 * Profile everywhere it appears on the site — this is a local-SEO requirement.
 * See TODO-VERIFY.md for every claim the owner still needs to confirm.
 */

export type Locale = 'fr' | 'en';

export const business = {
  name: 'Toit à Toit Entretien',
  /** Phone in three forms: human display, tel: href, and raw E.164 for schema. */
  phone: {
    display: '(514) 993-6897',
    href: 'tel:+15149936897',
    e164: '+15149936897',
  },
  email: 'toitatoitentretien@gmail.com',
  /**
   * Service-area business based in Saint-Léonard. No public street address is
   * shown by default. TODO-VERIFY: confirm with the owner whether to expose a
   * full street address or keep this as a service-area business.
   */
  locality: 'Saint-Léonard',
  region: 'QC',
  regionName: 'Québec',
  country: 'CA',
  postalCode: '', // TODO-VERIFY
  social: {
    facebook: 'https://www.facebook.com/toitatoitentretien',
  },
  // TODO-VERIFY: opening hours unknown — do not publish openingHours in schema
  // until confirmed.
} as const;

/** Cities / boroughs served. TODO-VERIFY each is still accurate. */
export const regionsServed = [
  'Montréal',
  'Saint-Léonard',
  'Ahuntsic-Cartierville',
  'Le Plateau-Mont-Royal',
  'Montréal-Nord',
  'Laval',
  'Saint-Bruno-de-Montarville',
  'Brossard',
] as const;

export type ServiceCategory =
  | 'deneigement'
  | 'drain'
  | 'feuilles'
  | 'inondations'
  | 'toiture'
  | 'sur-mesure';

export interface ServiceDef {
  /** Localized URL slug. Keep in sync with the matching content-collection entry. */
  slug: { fr: string; en: string };
  category: ServiceCategory;
  season: 'automne' | 'hiver' | 'toute-saison';
  title: { fr: string; en: string };
  /** Answer-first one-liner used in nav previews, cards, and meta descriptions. */
  blurb: { fr: string; en: string };
}

/**
 * Structural service index — drives navigation, the footer, the sitemap, and
 * schema. Per-service page bodies live in the `services` content collection,
 * keyed by the same slug.
 */
export const services: ServiceDef[] = [
  {
    slug: { fr: 'deneigement-toiture', en: 'roof-snow-removal' },
    category: 'deneigement',
    season: 'hiver',
    title: { fr: 'Déneigement de toiture', en: 'Roof snow removal' },
    blurb: {
      fr: "On retire la charge de neige et de glace avant qu'elle ne menace votre toit. La surcharge de neige est la première cause d'effondrement de toiture à Montréal.",
      en: 'We clear snow and ice load before it threatens your roof. Snow overload is the number-one cause of roof collapse in Montréal.',
    },
  },
  {
    slug: { fr: 'degagement-drain', en: 'roof-drain-clearing' },
    category: 'drain',
    season: 'toute-saison',
    title: { fr: 'Dégagement de drain', en: 'Roof drain clearing' },
    blurb: {
      fr: "On débloque les drains de toit obstrués avant que l'eau ne s'accumule et n'abîme la membrane. Un drain dégagé, c'est une infiltration évitée.",
      en: 'We clear blocked roof drains before water pools and damages the membrane. A clear drain is a leak prevented.',
    },
  },
  {
    slug: { fr: 'nettoyage-feuilles', en: 'leaf-removal' },
    category: 'feuilles',
    season: 'automne',
    title: { fr: 'Soufflage et ramassage de feuilles', en: 'Leaf blowing and removal' },
    blurb: {
      fr: "On souffle et on ramasse les feuilles mortes qui retiennent l'eau et alourdissent votre toit plat à l'automne.",
      en: 'We blow and clear the dead leaves that trap water and weigh down your flat roof in the fall.',
    },
  },
  {
    slug: { fr: 'prevention-inondations', en: 'flood-prevention' },
    category: 'inondations',
    season: 'toute-saison',
    title: { fr: 'Prévention des inondations de toiture', en: 'Roof flood prevention' },
    blurb: {
      fr: "On garde votre toit plat libre de tout ce qui bloque l'écoulement de l'eau, pour prévenir les flaques, le gel et les infiltrations.",
      en: 'We keep your flat roof clear of anything that blocks drainage — preventing pooling, ice and leaks.',
    },
  },
  {
    slug: { fr: 'renovation-toiture', en: 'roof-renovation' },
    category: 'toiture',
    season: 'toute-saison',
    title: { fr: 'Rénovation de toiture', en: 'Roof renovation' },
    blurb: {
      fr: "Quand l'entretien ne suffit plus, on planifie et on exécute la réfection de votre toiture — un travail qui revient une fois par décennie.",
      en: 'When maintenance is no longer enough, we plan and carry out your roof renovation — a once-a-decade job.',
    },
  },
  {
    slug: { fr: 'solutions-personnalisees', en: 'custom-solutions' },
    category: 'sur-mesure',
    season: 'toute-saison',
    title: { fr: 'Solutions personnalisées', en: 'Custom solutions' },
    blurb: {
      fr: "Un problème inhabituel sur votre toit ? On l'évalue gratuitement et on propose une solution adaptée — sans vous vendre ce dont vous n'avez pas besoin.",
      en: "An unusual roof problem? We assess it for free and propose a tailored solution — without selling you what you don't need.",
    },
  },
];

/** Look up a service by its slug in either language. */
export function findService(slug: string): ServiceDef | undefined {
  return services.find((s) => s.slug.fr === slug || s.slug.en === slug);
}
