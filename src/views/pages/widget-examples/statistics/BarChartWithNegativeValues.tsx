'use client'

// Next Imports
import dynamic from 'next/dynamic'

//MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const series = [
  {
    name: 'Earning',
    data: [180, 120, 284, 180, 102]
  },
  {
    name: 'Expense',
    data: [-100, -130, -100, -80, -120]
  }
]

const BarChartWithNegativeValues = () => {
  // Hooks
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    grid: {
      padding: {
        top: -15,
        left: -20,
        right: -10,
        bottom: -3
      },
      yaxis: {
        lines: { show: false }
      },
      xaxis: {
        lines: { show: false }
      }
    },
    legend: { show: false },
    stroke: {
      lineCap: 'round',

      width: 4,
      colors: ['var(--mui-palette-background-paper)']
    },
    dataLabels: { enabled: false },
    colors: ['var(--mui-palette-text-primary)', 'var(--mui-palette-error-main)'],
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '40%',
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'all'
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
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    },
    yaxis: {
      labels: { show: false }
    },
    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '24%'
            }
          }
        }
      },
      {
        breakpoint: 1288,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '28%'
            }
          }
        }
      },
      {
        breakpoint: 935,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '36%'
            }
          }
        }
      },
      {
        breakpoint: 780,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '44%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '18%'
            }
          }
        }
      },
      {
        breakpoint: 470,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '24%'
            }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h4'>4,350</Typography>
        <AppReactApexCharts type='bar' height={116} width='100%' options={options} series={series} />
        <Typography color='text.primary' className='font-medium text-center'>
          Sessions
        </Typography>
      </CardContent>
    </Card>
  )
}

export default BarChartWithNegativeValues
