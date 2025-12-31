// Next Imports
import { redirect } from 'next/navigation'

// Type Imports
import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const GuestOnlyRoute = async ({ children, lang }: ChildrenType & { lang: Locale }) => {
  
  //if (session) {
  //  redirect(getLocalizedUrl(themeConfig.homePageUrl, lang))
  //}

  return <>{children}</>
}

export default GuestOnlyRoute
