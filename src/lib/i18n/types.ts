export type Locale = 'en' | 'fr' | 'zh' | 'ar'

export const LOCALES: Locale[] = ['en', 'fr', 'zh', 'ar']

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  zh: '中',
  ar: 'عر',
}

export const RTL_LOCALES: Locale[] = ['ar']

/** UI-only strings. Data content (project descriptions, etc.)
 *  lives in the data files with their own localizations records. */
export interface UITranslations {
  nav: {
    about: string
    projects: string
    menu: string
    navigation: string
    close: string
    home: string
  }
  theme: {
    switchToLight: string
    switchToDark: string
  }
  language: {
    toggle: string
  }
  footer: {
    copyright: string
  }
  newsletter: {
    title: string
    description: string
    emailPlaceholder: string
    emailLabel: string
    submit: string
  }
  work: {
    title: string
    downloadCv: string
    present: string
    roles: {
      ceo: string
      productDesigner: string
      iosSoftwareEngineer: string
      shiftSupervisor: string
      fullstackSoftwareEngineer: string
      frontendSoftwareEngineer: string
    }
  }
  pages: {
    home: {
      headline: string
      bio: string
      social: {
        x: string
        instagram: string
        github: string
        linkedin: string
      }
    }
    about: {
      headline: string
      bio: string[]
      portrait: string
      social: {
        x: string
        instagram: string
        github: string
        linkedin: string
        email: string
      }
    }
    projects: {
      headline: string
      description: string
    }
  }
}
