// Type Imports
import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'
import { i18n } from '@configs/i18n'

// HOC Imports
import GuestOnlyRoute from '@/hocs/GuestOnlyRoute'

const Layout = async (props: ChildrenType & { params: Promise<{ lang: string }> }) => {
  const params = await props.params

  const { children } = props

  // Type guard to ensure lang is a valid Locale
  const lang: Locale = i18n.locales.includes(params.lang as Locale) ? (params.lang as Locale) : i18n.defaultLocale

  return <GuestOnlyRoute lang={lang}>{children}</GuestOnlyRoute>
}

export default Layout
