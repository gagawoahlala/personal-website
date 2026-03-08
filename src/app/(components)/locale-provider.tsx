'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { dictionaries } from '@/lib/i18n'
import type { Locale, UITranslations } from '@/lib/i18n'
import { LOCALES, LOCALE_LABELS, RTL_LOCALES } from '@/lib/i18n'

const LocaleContext = createContext<{
  locale: Locale
  setLocale: (locale: Locale) => void
  t: UITranslations
}>({
  locale: 'en',
  setLocale: () => {},
  t: dictionaries.en,
})

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const stored = localStorage.getItem('locale') as Locale | null
    if (stored && LOCALES.includes(stored)) {
      applyLocale(stored)
      setLocaleState(stored)
    }
  }, [])

  function applyLocale(l: Locale) {
    const root = document.documentElement
    root.setAttribute('lang', l)
    root.setAttribute('dir', RTL_LOCALES.includes(l) ? 'rtl' : 'ltr')
  }

  function setLocale(l: Locale) {
    setLocaleState(l)
    applyLocale(l)
    localStorage.setItem('locale', l)
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}

export { LOCALES, LOCALE_LABELS }
