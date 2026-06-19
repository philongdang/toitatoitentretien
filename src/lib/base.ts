/**
 * Base-path portability. The same build works at a domain root (Netlify,
 * Vercel, a custom domain) AND under a sub-path (GitHub Pages project site).
 *
 * `import.meta.env.BASE_URL` is '/' by default, or '/<base>/' when astro.config
 * sets `base`. All internal links and public-asset references go through
 * withBase() so they resolve in both cases.
 */
const RAW = import.meta.env.BASE_URL || '/';

/** '' at root, or '/sub' when deployed under a sub-path. */
export const BASE_PREFIX = RAW === '/' ? '' : RAW.replace(/\/$/, '');

/** Prefix an absolute app path with the deploy base. Idempotent. */
export function withBase(path: string): string {
  if (!path.startsWith('/')) path = '/' + path;
  if (BASE_PREFIX && (path === BASE_PREFIX || path.startsWith(BASE_PREFIX + '/'))) {
    return path;
  }
  return BASE_PREFIX + path || '/';
}

/** Remove the deploy base from a path (e.g. Astro.url.pathname). */
export function stripBase(path: string): string {
  if (BASE_PREFIX && (path === BASE_PREFIX || path.startsWith(BASE_PREFIX + '/'))) {
    return path.slice(BASE_PREFIX.length) || '/';
  }
  return path;
}
