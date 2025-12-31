'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Components Imports
import OptionsMenu from '@core/components/option-menu'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const TotalProfitRadialBar = () => {
  // Hooks
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    stroke: { dashArray: 5 },
    colors: ['var(--mui-palette-primary-main)'],
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
        endAngle: 90,
        startAngle: -90,
        hollow: { size: '55%' },
        track: { background: 'var(--mui-palette-customColors-trackBg)' },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: -10,
            fontWeight: 500,
            fontSize: '1.125rem',
            color: 'var(--mui-palette-text-primary)',
            formatter: val => {
              const num = (val * 35250) / 100

              return num > 999 ? `${(num / 1000).toFixed(1)}k` : `${num}`
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          chart: {
            height: 290.5
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader
        title='Total Profit'
        action={<OptionsMenu iconClassName='text-textPrimary' options={['Refresh', 'Edit', 'Delete']} />}
      />
      <CardContent className='flex items-center flex-col' sx={{ pt: `${theme.spacing(7)} !important` }}>
        <AppReactApexCharts type='radialBar' height={228.5} width='100%' series={[80]} options={options} />
        <div className='flex flex-col gap-2 mt-10'>
          <Typography>18k New Sales</Typography>
          <Chip variant='tonal' color='primary' label='This Year' size='small' />
        </div>
      </CardContent>
    </Card>
  )
}

export default TotalProfitRadialBar
