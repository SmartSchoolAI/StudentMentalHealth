// React Imports
import type { ReactElement } from 'react'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { Customer } from '@/types/apps/ecommerceTypes'

// Component Imports
import CustomerDetailsHeader from './CustomerDetailsHeader'
import CustomerLeftOverview from './customer-left-overview'
import CustomerRight from './customer-right'

const OverViewTab = dynamic(() => import('@views/apps/ecommerce/customers/details/customer-right/overview'))
const SecurityTab = dynamic(() => import('@views/apps/ecommerce/customers/details/customer-right/security'))
const NotificationsTab = dynamic(() => import('@views/apps/ecommerce/customers/details/customer-right/notification'))

const AddressBillingTab = dynamic(
  () => import('@views/apps/ecommerce/customers/details/customer-right/address-billing')
)

// Vars
const tabContentList = (): { [key: string]: ReactElement } => ({
  overview: <OverViewTab />,
  security: <SecurityTab />,
  addressBilling: <AddressBillingTab />,
  notifications: <NotificationsTab />
})

const CustomerDetails = ({ customerData, customerId }: { customerData?: Customer; customerId: string }) => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <CustomerDetailsHeader customerId={customerId} />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomerLeftOverview customerData={customerData} />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <CustomerRight tabContentList={tabContentList()} />
      </Grid>
    </Grid>
  )
}

export default CustomerDetails
