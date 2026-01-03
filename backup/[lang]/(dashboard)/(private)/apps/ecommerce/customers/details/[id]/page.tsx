// Next Imports
import { redirect } from 'next/navigation'

// Type Imports
import type { Customer } from '@/types/apps/ecommerceTypes'

// Component Imports
import CustomerDetails from '@/views/apps/ecommerce/customers/details'

// Data Imports
import { getEcommerceData } from '@/app/server/actions'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/ecommerce` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getEcommerceData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/ecommerce`)

  if (!res.ok) {
    throw new Error('Failed to fetch ecommerce data')
  }

  return res.json()
} */

const CustomerDetailsPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params

  // Vars
  const data = await getEcommerceData()

  const filteredData = data?.customerData.filter((item: Customer) => item.customerId === params.id)[0]

  if (!filteredData) {
    redirect('/not-found')
  }

  return filteredData ? <CustomerDetails customerData={filteredData} customerId={params.id} /> : null
}

export default CustomerDetailsPage
