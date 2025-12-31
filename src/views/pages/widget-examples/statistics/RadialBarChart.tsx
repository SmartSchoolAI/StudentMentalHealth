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

const RadialBarChart = () => {
  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    grid: {
      padding: {
        top: -10,
        bottom: 20
      }
    },
    stroke: {
      lineCap: 'square',
      curve: 'straight'
    },
    colors: ['var(--mui-palette-info-main)'],
    plotOptions: {
      radialBar: {
        endAngle: 90,
        startAngle: -90,
        hollow: { size: '60%' },
        track: { background: 'var(--mui-palette-customColors-trackBg)' },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 0,
            fontWeight: 500,
            fontSize: '1.25rem',
            color: 'var(--mui-palette-text-secondary)'
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 700,
        options: {
          grid: {
            padding: {
              left: 20,
              right: 20
            }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h4'>135k</Typography>
        <AppReactApexCharts type='radialBar' height={212} width='100%' options={options} series={[78]} />
        <Typography color='text.primary' className='font-medium text-center'>
          Total Sales
        </Typography>
      </CardContent>
    </Card>
  )
}

export default RadialBarChart
