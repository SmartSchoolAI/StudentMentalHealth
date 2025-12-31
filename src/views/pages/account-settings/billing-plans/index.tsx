// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import CurrentPlan from './CurrentPlan'
import Address from './Address'
import PaymentMethod from './PaymentMethod'
import InvoiceListTable from './InvoiceListTable'

// Data Imports
import { getPricingData, getInvoiceData } from '@/app/server/actions'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/pages/pricing` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getPricingData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/pricing`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
} */

/* const getInvoiceData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/invoice`)

  if (!res.ok) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.json()
} */

const BillingPlans = async () => {
  // Vars
  const data = await getPricingData()
  const invoiceData = await getInvoiceData()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <CurrentPlan data={data} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <PaymentMethod />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Address />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <InvoiceListTable invoiceData={invoiceData} />
      </Grid>
    </Grid>
  )
}

export default BillingPlans
