// Next Imports
import { redirect } from 'next/navigation'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { InvoiceType } from '@/types/apps/invoiceTypes'

// Component Imports
import EditCard from '@views/apps/invoice/edit/EditCard'
import EditActions from '@views/apps/invoice/edit/EditActions'

// Data Imports
import { getInvoiceData } from '@/app/server/actions'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/invoice` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getInvoiceData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/invoice`)

  if (!res.ok) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.json()
} */

const EditPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params

  // Vars
  const data = await getInvoiceData()

  const filteredData = data?.filter((invoice: InvoiceType) => invoice.id === params.id)[0]

  if (!filteredData) {
    redirect('/not-found')
  }

  return filteredData ? (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, md: 9 }}>
        <EditCard data={data} invoiceData={filteredData} id={params.id} />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <EditActions id={params.id} />
      </Grid>
    </Grid>
  ) : null
}

export default EditPage
