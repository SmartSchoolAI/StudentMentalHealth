'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const TotalSales = () => {
  // Vars
  const textPrimary = 'var(--mui-palette-text-primary)'

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true },
      animations: { enabled: false }
    },
    stroke: {
      width: 6,
      colors: ['var(--mui-palette-background-paper)']
    },
    labels: ['Direct', 'Organic', 'Referral', 'Mail'],
    legend: { show: false },
    dataLabels: {
      enabled: false
    },
    colors: [
      'var(--mui-palette-primary-main)',
      'var(--mui-palette-info-main)',
      'var(--mui-palette-warning-main)',
      'var(--mui-palette-error-main)'
    ],
    grid: {
      padding: {
        top: -7,
        bottom: 5
      }
    },
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
        expandOnClick: false,
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              offsetY: 18,
              color: textPrimary
            },
            value: {
              offsetY: -18,
              fontSize: '1.125rem',
              fontWeight: 500,
              formatter: value => `${value}%`,
              color: textPrimary
            },
            total: {
              show: true,
              fontSize: '0.8125rem',
              label: '1 Quarter',
              formatter: function () {
                return '28%'
              },
              color: 'var(--mui-palette-text-secondary)'
            }
          }
        }
      }
    }
  }

  return (
    <Card className='overflow-visible'>
      <CardContent className='flex justify-between bs-full'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-1'>
            <Typography variant='h5'>Total Sales</Typography>
            <Typography>Calculated in last 7 days</Typography>
          </div>
          <div className='flex items-center flex-wrap'>
            <Typography variant='h4'>$25,980</Typography>
            <div>
              <i className='ri-arrow-up-s-line align-bottom text-success' />
              <span className='text-success'>15.6%</span>
            </div>
          </div>
        </div>
        <AppReactApexCharts type='donut' width={130} height={114} options={options} series={[80, 22, 30, 50]} />
      </CardContent>
    </Card>
  )
}

export default TotalSales
