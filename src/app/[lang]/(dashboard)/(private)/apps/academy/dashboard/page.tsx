// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import WelcomeCard from '@views/apps/academy/dashboard/WelcomeCard'
import InterestedTopics from '@views/apps/academy/dashboard/InterestedTopics'
import PopularInstructors from '@views/apps/academy/dashboard/PopularInstructors'
import TopCourses from '@views/apps/academy/dashboard/TopCourses'
import UpcomingWebinar from '@views/apps/academy/dashboard/UpcomingWebinar'
import AssignmentProgress from '@views/apps/academy/dashboard/AssignmentProgress'
import CourseTable from '@views/apps/academy/dashboard/CourseTable'

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

const AcademyDashboard = async () => {
  // Vars
  const data = await getAcademyData()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <WelcomeCard />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <InterestedTopics />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <PopularInstructors />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <TopCourses />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <UpcomingWebinar />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <AssignmentProgress />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <CourseTable courseData={data?.courses} />
      </Grid>
    </Grid>
  )
}

export default AcademyDashboard
