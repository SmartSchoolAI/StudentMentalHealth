//MUI Imports
import Grid from '@mui/material/Grid'

//Component Imports
import LogisticsStatisticsCard from '@views/apps/logistics/dashboard/LogisticsStatisticsCard'
import LogisticsVehicleOverview from '@views/apps/logistics/dashboard/LogisticsVehicleOverview'
import LogisticsShipmentStatistics from '@views/apps/logistics/dashboard/LogisticsShipmentStatistics'
import LogisticsDeliveryPerformance from '@views/apps/logistics/dashboard/LogisticsDeliveryPerformance'
import LogisticsDeliveryExceptions from '@views/apps/logistics/dashboard/LogisticsDeliveryExceptions'
import LogisticsOrdersByCountries from '@/views/apps/logistics/dashboard/LogisticsOrdersByCountries'
import LogisticsOverviewTable from '@views/apps/logistics/dashboard/LogisticsOverviewTable'

//Data Imports
import { getLogisticsData, getStatisticsData } from '@/app/server/actions'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/pages/widget-examples` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getStatisticsData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/widget-examples`)

  if (!res.ok) {
    throw new Error('Failed to fetch statisticsData')
  }

  return res.json()
} */

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/logistics` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getLogisticsData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/logistics`)

  if (!res.ok) {
    throw new Error('Failed to fetch logistics data')
  }

  return res.json()
} */

const LogisticsDashboard = async () => {
  // Vars
  const data = await getStatisticsData()
  const vehicleData = await getLogisticsData()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <LogisticsStatisticsCard data={data?.statsHorizontalWithBorder} />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <LogisticsVehicleOverview />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <LogisticsShipmentStatistics />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <LogisticsDeliveryPerformance />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <LogisticsDeliveryExceptions />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <LogisticsOrdersByCountries />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <LogisticsOverviewTable vehicleData={vehicleData?.vehicles} />
      </Grid>
    </Grid>
  )
}

export default LogisticsDashboard
