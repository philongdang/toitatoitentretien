/**
 * UI string tables for site chrome (nav, CTAs, footer, forms, a11y labels).
 * Page body copy lives in content collections; this is only the reusable
 * interface vocabulary. French is canonical and the fallback for missing keys.
 */

export const languages = { fr: 'Français', en: 'English' } as const;
export const defaultLang = 'fr' as const;

export const ui = {
  fr: {
    'a11y.skip': 'Aller au contenu principal',
    'a11y.langMenu': 'Changer de langue',
    'a11y.openMenu': 'Ouvrir le menu',
    'a11y.closeMenu': 'Fermer le menu',

    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.realisations': 'Réalisations',
    'nav.about': "L'entreprise",
    'nav.faq': 'FAQ',
    'nav.blog': 'Blogue',
    'nav.contact': 'Contact',

    'cta.quote': 'Soumission gratuite',
    'cta.quoteLong': 'Demandez une soumission gratuite',
    'cta.call': 'Appeler',
    'cta.callNow': 'Appelez maintenant',
    'cta.seeWork': 'Voir nos réalisations',
    'cta.allServices': 'Tous nos services',

    'trust.insured': 'Assurance responsabilité complète',
    'trust.guarantee': 'Travail garanti',
    'trust.local': 'Entreprise locale, île de Montréal',
    'trust.realPhotos': 'De vraies photos, de vrais clients',

    'beforeafter.before': 'Avant',
    'beforeafter.after': 'Après',
    'beforeafter.handle': 'Glissez pour comparer avant et après',

    'footer.serviceArea': 'Zone desservie',
    'footer.contact': 'Nous joindre',
    'footer.services': 'Nos services',
    'footer.nav': 'Navigation',
    'footer.rights': 'Tous droits réservés.',
    'footer.serviceAreaNote': "Entreprise de service basée à Saint-Léonard, desservant l'île de Montréal et les environs.",

    'form.name': 'Nom',
    'form.phone': 'Téléphone',
    'form.email': 'Courriel',
    'form.borough': 'Quartier ou ville',
    'form.service': 'Service requis',
    'form.message': 'Détails (facultatif)',
    'form.submit': 'Envoyer ma demande',
    'form.required': 'Requis',
    'form.success': 'Merci — on vous rappelle sous 24 h.',
    'form.error': 'Un problème est survenu. Réessayez ou appelez-nous directement.',

    'lang.alt': 'English',
  },
  en: {
    'a11y.skip': 'Skip to main content',
    'a11y.langMenu': 'Change language',
    'a11y.openMenu': 'Open menu',
    'a11y.closeMenu': 'Close menu',

    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.realisations': 'Our work',
    'nav.about': 'About',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    'cta.quote': 'Free quote',
    'cta.quoteLong': 'Get a free quote',
    'cta.call': 'Call',
    'cta.callNow': 'Call now',
    'cta.seeWork': 'See our work',
    'cta.allServices': 'All our services',

    'trust.insured': 'Full liability insurance',
    'trust.guarantee': 'Guaranteed work',
    'trust.local': 'Local, Island of Montréal',
    'trust.realPhotos': 'Real photos, real customers',

    'beforeafter.before': 'Before',
    'beforeafter.after': 'After',
    'beforeafter.handle': 'Drag to compare before and after',

    'footer.serviceArea': 'Service area',
    'footer.contact': 'Get in touch',
    'footer.services': 'Our services',
    'footer.nav': 'Navigation',
    'footer.rights': 'All rights reserved.',
    'footer.serviceAreaNote': 'Service-area business based in Saint-Léonard, serving the Island of Montréal and surrounding areas.',

    'form.name': 'Name',
    'form.phone': 'Phone',
    'form.email': 'Email',
    'form.borough': 'Borough or city',
    'form.service': 'Service needed',
    'form.message': 'Details (optional)',
    'form.submit': 'Send my request',
    'form.required': 'Required',
    'form.success': "Thank you — we'll call you back within 24 hours.",
    'form.error': 'Something went wrong. Try again or call us directly.',

    'lang.alt': 'Français',
  },
} as const;

export type UiLang = keyof typeof ui;
export type UiKey = keyof (typeof ui)['fr'];
