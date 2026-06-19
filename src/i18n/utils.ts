import { ui, defaultLang, type UiLang, type UiKey } from './ui';

/** Derive the active language from the URL pathname (`/en/...` → en, else fr). */
export function getLangFromUrl(url: URL): UiLang {
  const [, seg] = url.pathname.split('/');
  if (seg && seg in ui) return seg as UiLang;
  return defaultLang;
}

/** Returns a `t(key)` function for the given language, falling back to French. */
export function useTranslations(lang: UiLang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Localize an internal path. French has no prefix (`/services`); English is
 * prefixed (`/en/services`). Pass language-agnostic paths starting with `/`.
 */
export function localizedPath(path: string, lang: UiLang): string {
  const clean = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}

/** The opposite language to the one given (for the language switcher). */
export function otherLang(lang: UiLang): UiLang {
  return lang === 'fr' ? 'en' : 'fr';
}

/**
 * Map a path in one language to its equivalent in the other, for hreflang and
 * the language switcher. Strips/adds the `/en` prefix; slug translation for
 * localized routes (e.g. /services/deneigement ↔ /en/services/snow-removal) is
 * handled per-page where those slugs are known.
 */
export function toLangPath(path: string, target: UiLang): string {
  const withoutPrefix = path.replace(/^\/en(?=\/|$)/, '') || '/';
  return localizedPath(withoutPrefix, target);
}
