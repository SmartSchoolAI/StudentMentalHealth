// MUI Imports
import Grid from '@mui/material/Grid'

// Types Imports
import type { CardStatsVerticalProps } from '@/types/pages/widgetTypes'

// Components Imports
import CardStatVertical from '@components/card-statistics/Vertical'

const Vertical = ({ data }: { data: CardStatsVerticalProps[] }) => {
  if (data) {
    return (
      <Grid container spacing={6}>
        {data.map((item, index) => (
          <Grid size={{ xs: 12, sm: 4, lg: 2 }} key={index}>
            <CardStatVertical {...item} />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default Vertical
