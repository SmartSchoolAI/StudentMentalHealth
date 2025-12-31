// MUI Imports
import Grid from '@mui/material/Grid'

// Types Imports
import type { CardStatsCustomerStatsProps } from '@/types/pages/widgetTypes'

// Component Imports
import CustomerStats from '@components/card-statistics/CustomerStats'

const CustomerStatisticsCard = ({ customerStatData }: { customerStatData?: CardStatsCustomerStatsProps[] }) => {
  return (
    <Grid container spacing={6}>
      {customerStatData?.map((item, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
          <CustomerStats {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CustomerStatisticsCard
