// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import TotalReviews from '@views/apps/ecommerce/manage-reviews/TotalReviews'
import ReviewsStatistics from '@views/apps/ecommerce/manage-reviews/ReviewsStatistics'
import ManageReviewsTable from '@views/apps/ecommerce/manage-reviews/ManageReviewsTable'

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

const eCommerceManageReviews = async () => {
  // Vars
  const data = await getEcommerceData()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, md: 6 }}>
        <TotalReviews />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ReviewsStatistics />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <ManageReviewsTable reviewsData={data?.reviews} />
      </Grid>
    </Grid>
  )
}

export default eCommerceManageReviews
