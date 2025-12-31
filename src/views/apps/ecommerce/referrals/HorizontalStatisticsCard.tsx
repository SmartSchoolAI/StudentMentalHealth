// MUI Imports
import Grid from '@mui/material/Grid'

// Types Imports
import type { CardStatsHorizontalWithAvatarProps } from '@/types/pages/widgetTypes'

// Component Imports
import CardStatsHorizontalWithAvatar from '@components/card-statistics/HorizontalWithAvatar'

const HorizontalStatisticsCard = ({ data }: { data?: CardStatsHorizontalWithAvatarProps[] }) => {
  return (
    data && (
      <Grid container spacing={6}>
        {data.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
            <CardStatsHorizontalWithAvatar {...item} avatarSkin='light' />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default HorizontalStatisticsCard
