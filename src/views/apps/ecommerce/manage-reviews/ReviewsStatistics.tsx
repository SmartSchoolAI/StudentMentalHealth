'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Vars
const series = [{ data: [32, 52, 72, 94, 116, 94, 72] }]

const ReviewsStatistics = () => {
  // Hook
  const theme = useTheme()

  // Vars
  const successLightOpacity = 'var(--mui-palette-success-lightOpacity)'

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 7,
        distributed: true,
        columnWidth: '40%'
      }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [
      successLightOpacity,
      successLightOpacity,
      successLightOpacity,
      successLightOpacity,
      'var(--mui-palette-success-main)',
      successLightOpacity,
      successLightOpacity
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      show: false,
      padding: {
        top: -30,
        left: -10,
        right: -7,
        bottom: -12
      }
    },
    xaxis: {
      categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: 'on',
      labels: {
        style: {
          colors: 'var(--mui-palette-text-disabled)',
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize as string
        }
      }
    },
    yaxis: { show: false },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            width: 275
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardContent>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <div className='bs-full flex flex-col items-start justify-between gap-6'>
              <div className='flex flex-col items-start gap-2'>
                <Typography variant='h5'>Reviews statistics</Typography>
                <div className='flex items-center gap-2'>
                  <Typography>12 New reviews</Typography>
                  <Chip label='+8.4%' variant='tonal' size='small' color='success' />
                </div>
              </div>
              <div className='flex flex-col items-start gap-2'>
                <Typography color='text.primary'>
                  <span className='text-success'>87%</span> Positive reviews
                </Typography>
                <Typography variant='body2'>Weekly Report</Typography>
              </div>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} className='flex justify-center'>
            <AppReactApexCharts type='bar' width='100%' height={156} series={series} options={options} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ReviewsStatistics
