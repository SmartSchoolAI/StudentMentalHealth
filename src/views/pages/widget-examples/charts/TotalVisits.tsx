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

const TotalVisits = () => {
  // Hooks
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    labels: ['Cricket'],
    stroke: { lineCap: 'round' },
    grid: {
      padding: {
        top: -10
      }
    },
    colors: [theme.palette.info.main],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.2,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.1,
        stops: [0, 90]
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
      radialBar: {
        endAngle: 180,
        startAngle: -180,
        inverseOrder: true,
        hollow: { size: '62%' },
        track: { background: 'var(--mui-palette-customColors-trackBg)' },
        dataLabels: {
          name: { offsetY: 26 },
          value: {
            offsetY: -14,
            fontWeight: 500,
            fontSize: '1.5rem',
            formatter: value => `${value}k`,
            color: 'var(--mui-palette-text-primary)'
          },
          total: {
            show: true,
            label: 'Growth',
            fontWeight: 400,
            fontSize: '14px',
            color: 'var(--mui-palette-text-secondary)'
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Total Visits'
        action={<OptionsMenu iconClassName='text-textPrimary' options={['Last 28 Days', 'Last Month', 'Last Year']} />}
      />
      <CardContent className='flex items-center flex-col'>
        <AppReactApexCharts type='radialBar' height={183} width='100%' series={[78]} options={options} />
        <div className='flex flex-col gap-2'>
          <Typography>42.2k New Visits</Typography>
          <Chip variant='tonal' color='info' label='This Year' size='small' />
        </div>
      </CardContent>
    </Card>
  )
}

export default TotalVisits
