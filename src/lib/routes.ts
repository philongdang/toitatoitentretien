import type { UiLang, UiKey } from '../i18n/ui';
import { withBase } from './base';

/**
 * Single source of truth for routes and their localized slugs. Header, footer,
 * breadcrumbs, and hreflang all read from here so FR/EN paths never drift.
 * Slugs are localized where natural (/realisations ↔ /en/our-work).
 */
export const routes = {
  home: { fr: '/', en: '/en/', labelKey: 'nav.home' },
  services: { fr: '/services', en: '/en/services', labelKey: 'nav.services' },
  work: { fr: '/realisations', en: '/en/our-work', labelKey: 'nav.realisations' },
  about: { fr: '/a-propos', en: '/en/about', labelKey: 'nav.about' },
  faq: { fr: '/faq', en: '/en/faq', labelKey: 'nav.faq' },
  blog: { fr: '/blogue', en: '/en/blog', labelKey: 'nav.blog' },
  contact: { fr: '/contact', en: '/en/contact', labelKey: 'nav.contact' },
} satisfies Record<string, { fr: string; en: string; labelKey: UiKey }>;

export type RouteKey = keyof typeof routes;

/** Links shown in the primary header/footer navigation, in order. */
export const primaryNav: RouteKey[] = ['services', 'work', 'about', 'faq', 'contact'];

export function route(key: RouteKey, lang: UiLang): string {
  return withBase(routes[key][lang]);
}

/** Path to a single service page in the given language. */
export function servicePath(slug: string, lang: UiLang): string {
  return withBase(`${routes.services[lang]}/${slug}`);
}
