'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

type YRange = {
  min: number
  max: number
}

const generateDataHeat = (count: number, yrange: YRange) => {
  let i = 0
  const series = []

  while (i < count) {
    const x = `w${(i + 1).toString()}`
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push({
      x,
      y
    })
    i += 1
  }

  return series
}

// Vars
const series = [
  {
    name: 'Sun',
    data: generateDataHeat(24, { min: 0, max: 60 })
  },
  {
    name: 'Mon',
    data: generateDataHeat(24, { min: 0, max: 60 })
  },
  {
    name: 'Tue',
    data: generateDataHeat(24, { min: 0, max: 60 })
  },
  {
    name: 'Wed',
    data: generateDataHeat(24, { min: 0, max: 60 })
  },
  {
    name: 'Thu',
    data: generateDataHeat(24, { min: 0, max: 60 })
  },
  {
    name: 'Fri',
    data: generateDataHeat(24, { min: 0, max: 60 })
  },
  {
    name: 'Sat',
    data: generateDataHeat(24, { min: 0, max: 60 })
  }
]

const ApexHeatmapChart = () => {
  // Hooks
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      offsetX: theme.direction === 'rtl' ? 10 : -10
    },
    dataLabels: { enabled: false },
    legend: {
      position: 'bottom',
      labels: {
        colors: 'var(--mui-palette-text-secondary)'
      },
      markers: {
        height: 10,
        width: 10,
        offsetY: 0,
        offsetX: theme.direction === 'rtl' ? 7 : -4
      },
      itemMargin: {
        horizontal: 9
      }
    },
    plotOptions: {
      heatmap: {
        enableShades: false,
        colorScale: {
          ranges: [
            { to: 10, from: 0, name: '0-10', color: '#b9b3f8' },
            { to: 20, from: 11, name: '10-20', color: '#aba4f6' },
            { to: 30, from: 21, name: '20-30', color: '#9d95f5' },
            { to: 40, from: 31, name: '30-40', color: '#8f85f3' },
            { to: 50, from: 41, name: '40-50', color: '#8176f2' },
            { to: 60, from: 51, name: '50-60', color: '#7367f0' }
          ]
        }
      }
    },
    grid: {
      padding: { top: -20 }
    },
    yaxis: {
      labels: {
        style: { colors: 'var(--mui-palette-text-disabled)', fontSize: '13px' }
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    }
  }

  return (
    <Card>
      <CardHeader title='Daily Sales States' />
      <CardContent>
        <AppReactApexCharts type='heatmap' width='100%' height={400} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default ApexHeatmapChart
