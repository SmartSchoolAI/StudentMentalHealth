// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import Details from '@views/apps/academy/course-details/Details'
import Sidebar from '@views/apps/academy/course-details/Sidebar'

// Data Imports
import { getAcademyData } from '@/app/server/actions'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/academy` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getAcademyData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/academy`)

  if (!res.ok) {
    throw new Error('Failed to fetch academy data')
  }

  return res.json()
} */

const CourseDetailsPage = async () => {
  // Vars
  const data = await getAcademyData()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, md: 8 }}>
        <Details data={data?.courseDetails} />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <div className='sticky top-[88px]'>
          <Sidebar content={data?.courseDetails.content} />
        </div>
      </Grid>
    </Grid>
  )
}

export default CourseDetailsPage
