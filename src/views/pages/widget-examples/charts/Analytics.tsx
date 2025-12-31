'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Third Party Imports
import classnames from 'classnames'
import type { ApexOptions } from 'apexcharts'

// Components Imports
import OptionsMenu from '@core/components/option-menu'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

type AnalyticsDataType = {
  title: string
  value: string
  percentage: string
  icon: string
  trend: 'up' | 'down'
}

// Vars
const series = [
  {
    name: 'Revenue',
    data: [16000, 12000, 16000, 18000, 15000, 35000, 16000]
  },
  {
    name: 'Transactions',
    data: [10000, 12000, 10000, 0, 10000, 10000, 10000]
  },
  {
    name: 'Total Profit',
    data: [0, 15000, 0, 0, 12000, 0, 10000]
  }
]

const analyticsData: AnalyticsDataType[] = [
  {
    title: 'Revenue',
    value: '$845k',
    percentage: '82%',
    icon: 'ri-arrow-up-s-line',
    trend: 'up'
  },
  {
    title: 'Transactions',
    value: '$12.5k',
    percentage: '37%',
    icon: 'ri-arrow-down-s-line',
    trend: 'down'
  },
  {
    title: 'Total Profit',
    value: '$27.6k',
    percentage: '49%',
    icon: 'ri-arrow-up-s-line',
    trend: 'up'
  }
]

const Analytics = () => {
  // Hooks
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      offsetY: -25,
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '35%',
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'all'
      }
    },
    legend: { show: false },
    grid: {
      xaxis: { lines: { show: false } },
      strokeDashArray: 10,
      borderColor: 'var(--mui-palette-divider)',
      padding: {
        left: -15,
        right: -5,
        bottom: -14
      }
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 6,
      curve: 'smooth',
      lineCap: 'round',
      colors: ['var(--mui-palette-background-paper)']
    },
    colors: ['var(--mui-palette-success-main)', 'var(--mui-palette-secondary-main)', 'var(--mui-palette-warning-main)'],
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      labels: { show: false }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '45%'
            }
          }
        }
      },
      {
        breakpoint: 1350,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '55%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '35%'
            }
          }
        }
      },
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '45%'
            }
          }
        }
      },
      {
        breakpoint: 850,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '55%'
            }
          }
        }
      },
      {
        breakpoint: 700,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '65%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '40%'
            }
          }
        }
      },
      {
        breakpoint: 500,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '50%'
            }
          }
        }
      },
      {
        breakpoint: 400,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '60%'
            }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader
        title='Analytics'
        action={<OptionsMenu iconClassName='text-textPrimary' options={['Last 28 Days', 'Last Month', 'Last Year']} />}
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <AppReactApexCharts type='bar' height={211} width='100%' series={series} options={options} />
        <div className='flex flex-col gap-2'>
          {analyticsData.map((item, index) => {
            return (
              <div key={index} className='flex items-center gap-4'>
                <Typography className='font-medium grow' color='text.primary'>
                  {item.title}
                </Typography>
                <Typography>{item.value}</Typography>
                <Typography className='font-medium' color='text.primary'>
                  {item.percentage}
                </Typography>
                <i className={classnames(item.icon, item.trend === 'up' ? 'text-success' : 'text-error')} />
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export default Analytics
