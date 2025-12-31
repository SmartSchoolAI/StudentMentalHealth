// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// Component Imports
import ApexBarChart from '@views/charts/apex/ApexBarChart'
import ApexAreaChart from '@views/charts/apex/ApexAreaChart'
import ApexLineChart from '@views/charts/apex/ApexLineChart'
import ApexRadarChart from '@views/charts/apex/ApexRadarChart'
import ApexDonutChart from '@views/charts/apex/ApexDonutChart'
import ApexColumnChart from '@views/charts/apex/ApexColumnChart'
import ApexScatterChart from '@views/charts/apex/ApexScatterChart'
import ApexHeatmapChart from '@views/charts/apex/ApexHeatmapChart'
import ApexRadialBarChart from '@views/charts/apex/ApexRadialBarChart'
import ApexCandlestickChart from '@views/charts/apex/ApexCandlestickChart'

const ApexCharts = () => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <Typography variant='h4'>ApexCharts</Typography>
        <Typography>
          <code>react-apexcharts</code> is a third-party library. Please refer to its{' '}
          <Link
            href='https://apexcharts.com'
            target='_blank'
            rel='noopener noreferrer'
            className='no-underline text-primary'
          >
            official documentation
          </Link>{' '}
          for more details.
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <ApexAreaChart />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <ApexColumnChart />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <ApexScatterChart />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <ApexLineChart />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ApexBarChart />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ApexCandlestickChart />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ApexHeatmapChart />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ApexRadialBarChart />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ApexRadarChart />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ApexDonutChart />
      </Grid>
    </Grid>
  )
}

export default ApexCharts
