'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import OptionsMenu from '@core/components/option-menu'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const CardWidgetsSalesOverview = () => {
  // Vars
  const textSecondary = 'var(--mui-palette-text-secondary)'

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    grid: {
      padding: {
        left: 20,
        right: 20
      }
    },
    colors: [
      'var(--mui-palette-primary-main)',
      'rgba(var(--mui-palette-primary-mainChannel) / 0.7)',
      'rgba(var(--mui-palette-primary-mainChannel) / 0.5)',
      'var(--mui-palette-customColors-trackBg)'
    ],
    stroke: { width: 0 },
    legend: { show: false },
    dataLabels: { enabled: false },
    labels: ['Apparel', 'Electronics', 'FMCG', 'Other Sales'],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      pie: {
        customScale: 0.9,
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              offsetY: 25,
              fontSize: '0.875rem',
              color: textSecondary
            },
            value: {
              offsetY: -15,
              fontWeight: 500,
              fontSize: '24px',
              formatter: value => `${value}k`,
              color: 'var(--mui-palette-text-primary)'
            },
            total: {
              show: true,
              fontSize: '0.875rem',
              label: 'Weekly Sales',
              color: textSecondary,
              formatter: value => `${value.globals.seriesTotals.reduce((total: number, num: number) => total + num)}k`
            }
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Sales Overview'
        action={<OptionsMenu iconClassName='text-textPrimary' options={['Last 28 Days', 'Last Month', 'Last Year']} />}
      />
      <CardContent>
        <Grid container>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ mb: [3, 0] }}>
            <AppReactApexCharts type='donut' height={265} width='100%' series={[12, 25, 13, 50]} options={options} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ my: 'auto' }}>
            <div className='flex items-center gap-3'>
              <CustomAvatar skin='light' color='primary' variant='rounded'>
                <i className='ri-wallet-line text-primary' />
              </CustomAvatar>
              <div className='flex flex-col'>
                <Typography>Number of Sales</Typography>
                <Typography variant='h5'>$86,400</Typography>
              </div>
            </div>
            <Divider className='mlb-6' />
            <Grid container spacing={6}>
              <Grid size={{ xs: 6 }}>
                <div className='flex items-center gap-2 mbe-1'>
                  <div>
                    <i className='ri-circle-fill text-[10px] text-primary' />
                  </div>
                  <Typography>Apparel</Typography>
                </div>
                <Typography className='font-medium'>$12,150</Typography>
              </Grid>
              <Grid size={{ xs: 6 }}>
                <div className='flex items-center gap-2 mbe-1'>
                  <div>
                    <i className='ri-circle-fill text-[10px] text-primary' />
                  </div>
                  <Typography>Electronics</Typography>
                </div>
                <Typography className='font-medium'>$24,900</Typography>
              </Grid>
              <Grid size={{ xs: 6 }}>
                <div className='flex items-center gap-2 mbe-1'>
                  <div>
                    <i className='ri-circle-fill text-[10px] text-primary' />
                  </div>
                  <Typography>FMCG</Typography>
                </div>
                <Typography className='font-medium'>$12,750</Typography>
              </Grid>
              <Grid size={{ xs: 6 }}>
                <div className='flex items-center gap-2 mbe-1'>
                  <div>
                    <i className='ri-circle-fill text-[10px] text-primary' />
                  </div>
                  <Typography>Other Sales</Typography>
                </div>
                <Typography className='font-medium'>$50,200</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardWidgetsSalesOverview
