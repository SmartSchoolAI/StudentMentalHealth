// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { CardStatsType } from '@/types/pages/widgetTypes'

// Components Imports
import Transactions from '@views/pages/widget-examples/statistics/Transactions'
import TotalSales from '@views/pages/widget-examples/statistics/TotalSales'
import Horizontal from '@views/pages/widget-examples/statistics/Horizontal'
import Vertical from '@views/pages/widget-examples/statistics/Vertical'
import Character from '@views/pages/widget-examples/statistics/Character'
import LineChartWithShadow from '@views/pages/widget-examples/statistics/LineChartWithShadow'
import BarChartWithNegativeValues from '@views/pages/widget-examples/statistics/BarChartWithNegativeValues'
import LineAreaChart from '@views/pages/widget-examples/statistics/LineAreaChart'
import RadialBarChart from '@views/pages/widget-examples/statistics/RadialBarChart'
import DistributedColumnChart from '@views/pages/widget-examples/statistics/DistributedColumnChart'
import LineChart from '@views/pages/widget-examples/statistics/LineChart'
import HorizontalStatisticsCard from '@views/pages/widget-examples/statistics/HorizontalStatisticsCard'
import CustomerStatisticsCard from '@views/pages/widget-examples/statistics/CustomerStatisticsCard'
import LogisticsStatisticsCard from '@views/apps/logistics/dashboard/LogisticsStatisticsCard'
import UserListCards from '@views/pages/widget-examples/statistics/UserListCards'

// Data Imports
import { getStatisticsData } from '@/app/server/actions'

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

const Statistics = async () => {
  // Vars
  const data: CardStatsType = await getStatisticsData()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <Horizontal data={data.statsHorizontal} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <LogisticsStatisticsCard data={data?.statsHorizontalWithBorder} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <UserListCards />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Transactions />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TotalSales />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Vertical data={data.statsVertical} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Character data={data.statsCharacter} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <HorizontalStatisticsCard data={data?.statsHorizontalWithAvatar} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <CustomerStatisticsCard customerStatData={data?.customerStats} />
      </Grid>
      <Grid size={{ xs: 12, sm: 4, xl: 2 }}>
        <LineChartWithShadow />
      </Grid>
      <Grid size={{ xs: 12, sm: 4, xl: 2 }}>
        <BarChartWithNegativeValues />
      </Grid>
      <Grid size={{ xs: 12, sm: 4, xl: 2 }}>
        <LineAreaChart />
      </Grid>
      <Grid size={{ xs: 12, sm: 4, xl: 2 }}>
        <RadialBarChart />
      </Grid>
      <Grid size={{ xs: 12, sm: 4, xl: 2 }}>
        <DistributedColumnChart />
      </Grid>
      <Grid size={{ xs: 12, sm: 4, xl: 2 }}>
        <LineChart />
      </Grid>
    </Grid>
  )
}

export default Statistics
