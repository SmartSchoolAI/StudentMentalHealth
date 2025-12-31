'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Component Imports
import OptionsMenu from '@core/components/option-menu'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const TotalRevenue = () => {
  const textSecondaryColor = 'var(--mui-palette-text-secondary)'

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    labels: ['Returning', 'New Users', 'Referrals'],
    legend: { show: false },
    stroke: { lineCap: 'round' },
    colors: ['var(--mui-palette-primary-main)', 'var(--mui-palette-success-main)', 'var(--mui-palette-warning-main)'],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '40%'
        },
        track: {
          margin: 10,
          background: 'transparent'
        },
        dataLabels: {
          name: {
            offsetY: 28,
            fontSize: '0.75rem',
            color: textSecondaryColor
          },
          value: {
            offsetY: -12,
            fontWeight: 500,
            fontSize: '1.75rem',
            color: 'var(--mui-palette-text-primary)',
            formatter(value) {
              return `${value}k`
            }
          },
          total: {
            show: true,
            fontWeight: 400,
            fontSize: '0.75rem',
            color: textSecondaryColor,
            label: `${new Date().getFullYear()}`,
            formatter(value) {
              return `${value.globals.seriesTotals.reduce((total: number, num: number) => total + num)}k`
            }
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Total Revenue'
        action={<OptionsMenu options={['Last 28 Days', 'Last Month', 'Last Year']} iconClassName='text-textPrimary' />}
      />
      <CardContent>
        <AppReactApexCharts type='radialBar' height={250} width='100%' series={[71, 78, 86]} options={options} />
        <div className='flex justify-around'>
          <div className='flex items-center flex-col justify-center gap-1'>
            <div className='flex items-center justify-center gap-2'>
              <i className='ri-circle-fill text-[10px] text-success' />
              <Typography className='font-medium' color='text.primary'>
                856
              </Typography>
            </div>
            <Typography>New User</Typography>
          </div>
          <Divider orientation='vertical' className='bs-auto' />
          <div className='flex items-center flex-col justify-center gap-1'>
            <div className='flex items-center justify-center gap-2'>
              <i className='ri-circle-fill text-[10px] text-primary' />
              <Typography className='font-medium' color='text.primary'>
                345
              </Typography>
            </div>
            <Typography>Returning</Typography>
          </div>
          <Divider orientation='vertical' className='bs-auto' />
          <div className='flex items-center flex-col justify-center gap-1'>
            <div className='flex items-center justify-center gap-2'>
              <i className='ri-circle-fill text-[10px] text-warning' />
              <Typography className='font-medium' color='text.primary'>
                258
              </Typography>
            </div>
            <Typography>Referrals</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default TotalRevenue
