// Third-party Imports
import 'server-only'

// Type Imports
import type { Locale } from '@configs/i18n'

const dictionaries = {
  en: () => import('@/data/dictionaries/en.json').then(module => module.default),
  zh: () => import('@/data/dictionaries/zh.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
