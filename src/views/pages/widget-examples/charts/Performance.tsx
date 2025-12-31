'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Component Imports
import OptionsMenu from '@core/components/option-menu'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const series = [
  {
    name: 'Income',
    data: [70, 90, 90, 90, 80, 90]
  },
  {
    name: 'Net Worth',
    data: [120, 80, 100, 80, 100, 80]
  }
]

const Performance = () => {
  // Hooks
  const theme = useTheme()

  // Vars
  const divider = 'var(--mui-palette-divider)'
  const textDisabled = 'var(--mui-palette-text-disabled)'

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    colors: ['var(--mui-palette-primary-main)', 'var(--mui-palette-info-main)'],
    plotOptions: {
      radar: {
        polygons: {
          connectorColors: divider,
          strokeColors: [divider, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent']
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['var(--mui-palette-primary-main)', 'var(--mui-palette-info-main)'],
        shadeIntensity: 1,
        type: 'vertical',
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    markers: { size: 0 },
    legend: {
      fontSize: '15px',
      labels: { colors: 'var(--mui-palette-text-secondary)' },
      markers: { height: 10, width: 10, offsetX: theme.direction === 'rtl' ? 7 : -4 },
      itemMargin: { horizontal: 9 }
    },
    grid: { show: false },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontSize: '13px',
          colors: [textDisabled, textDisabled, textDisabled, textDisabled, textDisabled, textDisabled]
        }
      }
    },
    yaxis: { show: false }
  }

  return (
    <Card>
      <CardHeader
        title='Performance'
        action={<OptionsMenu iconClassName='text-textPrimary' options={['Last 28 Days', 'Last Month', 'Last Year']} />}
      />
      <CardContent>
        <AppReactApexCharts type='radar' height={299} width='100%' series={series} options={options} />
      </CardContent>
    </Card>
  )
}

export default Performance
