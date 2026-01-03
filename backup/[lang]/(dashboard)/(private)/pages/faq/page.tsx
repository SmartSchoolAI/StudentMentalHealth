// Component Imports
import FAQ from '@views/pages/faq'

// Data Imports
import { getFaqData } from '@/app/server/actions'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/pages/faq` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getFaqData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/faq`)

  if (!res.ok) {
    throw new Error('Failed to fetch faqData')
  }

  return res.json()
} */

const FAQPage = async () => {
  // Vars
  const data = await getFaqData()

  return <FAQ data={data} />
}

export default FAQPage
