import type { UITranslations, Locale } from './types'
import { en } from './en'
import { fr } from './fr'
import { zh } from './zh'
import { ar } from './ar'

export * from './types'
export { en, fr, zh, ar }

export const dictionaries: Record<Locale, UITranslations> = { en, fr, zh, ar }
