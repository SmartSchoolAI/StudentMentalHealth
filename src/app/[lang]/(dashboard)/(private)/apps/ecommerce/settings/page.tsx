// React Imports
import type { ReactElement } from 'react'

// Next Imports
import dynamic from 'next/dynamic'

// Component Imports
import Settings from '@views/apps/ecommerce/settings'

const StoreDetailsTab = dynamic(() => import('@views/apps/ecommerce/settings/store-details'))
const PaymentsTab = dynamic(() => import('@views/apps/ecommerce/settings/payments'))
const CheckoutTab = dynamic(() => import('@views/apps/ecommerce/settings/checkout'))
const ShippingDeliveryTab = dynamic(() => import('@views/apps/ecommerce/settings/ShippingDelivery'))
const LocationsTab = dynamic(() => import('@views/apps/ecommerce/settings/locations'))
const NotificationsTab = dynamic(() => import('@views/apps/ecommerce/settings/Notifications'))

// Vars
const tabContentList = (): { [key: string]: ReactElement } => ({
  'store-details': <StoreDetailsTab />,
  payments: <PaymentsTab />,
  checkout: <CheckoutTab />,
  'shipping-delivery': <ShippingDeliveryTab />,
  locations: <LocationsTab />,
  notifications: <NotificationsTab />
})

const eCommerceSettings = () => {
  return <Settings tabContentList={tabContentList()} />
}

export default eCommerceSettings
