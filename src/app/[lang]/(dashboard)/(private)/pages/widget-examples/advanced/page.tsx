// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import Transactions from '@views/pages/widget-examples/advanced/Transactions'
import UpgradePlan from '@views/pages/widget-examples/advanced/UpgradePlan'
import MeetingSchedule from '@views/pages/widget-examples/advanced/MeetingSchedule'
import TopCourses from '@views/pages/widget-examples/advanced/TopCourses'
import UpcomingWebinar from '@views/apps/academy/dashboard/UpcomingWebinar'
import AssignmentProgress from '@views/pages/widget-examples/advanced/AssignmentProgress'
import PopularInstructors from '@views/pages/widget-examples/advanced/PopularInstructors'
import OrdersByCountries from '@views/pages/widget-examples/advanced/OrdersByCountries'
import DeliveryPerformance from '@views/pages/widget-examples/advanced/DeliveryPerformance'
import TeamMembers from '@views/pages/widget-examples/advanced/TeamMembers'
import SalesByCountries from '@views/pages/widget-examples/advanced/SalesByCountries'
import DepositWithdraw from '@views/pages/widget-examples/advanced/DepositWithdraw'
import TotalEarning from '@views/pages/widget-examples/advanced/TotalEarning'
import FinanceSummary from '@views/pages/widget-examples/advanced/FinanceSummary'
import Analytics from '@views/pages/widget-examples/advanced/Analytics'
import WebsiteStatistics from '@views/pages/widget-examples/advanced/WebsiteStatistics'
import DeveloperMeetup from '@views/pages/widget-examples/advanced/DeveloperMeetup'
import ActivityTimeline from '@views/pages/widget-examples/advanced/ActivityTimeline'
import CafeBadilico from '@views/pages/widget-examples/advanced/CafeBadilico'

const Advanced = () => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <Transactions />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <UpgradePlan />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <MeetingSchedule />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <TopCourses />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <UpcomingWebinar />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <AssignmentProgress />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <PopularInstructors />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <OrdersByCountries />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <DeliveryPerformance />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 5 }}>
        <TeamMembers />
      </Grid>
      <Grid size={{ xs: 12, lg: 7 }}>
        <DepositWithdraw />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <TotalEarning />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 5, xl: 4 }}>
        <FinanceSummary />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 3, xl: 4 }}>
        <Analytics />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <WebsiteStatistics />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <DeveloperMeetup />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <SalesByCountries />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 8 }}>
        <ActivityTimeline />
      </Grid>
      <Grid size={{ md: 6, lg: 4 }}>
        <CafeBadilico />
      </Grid>
    </Grid>
  )
}

export default Advanced
