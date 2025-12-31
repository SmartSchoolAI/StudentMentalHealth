'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useTheme } from '@mui/material/styles'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Types Imports
import type { ThemeColor } from '@core/types'

// Components Imports
import OptionsMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

interface DataType {
  title: string
  icon: string
  subtitle: string
  avatarColor: ThemeColor
}

// Vars
const data: DataType[] = [
  {
    title: '$48,568.20',
    avatarColor: 'success',
    subtitle: 'Total Profit',
    icon: 'ri-pie-chart-2-line'
  },
  {
    title: '$38,453.25',
    avatarColor: 'primary',
    subtitle: 'Total Income',
    icon: 'ri-money-dollar-circle-line'
  },
  {
    title: '$2,453.45',
    avatarColor: 'secondary',
    subtitle: 'Total Expense',
    icon: 'ri-bank-card-line'
  }
]

const series = [
  {
    name: 'Income',
    data: [29000, 22000, 25000, 18500, 29000, 20000, 34500]
  },
  {
    name: 'Profit',
    data: [0, 16000, 11000, 15500, 0, 12500, 9500]
  },
  {
    name: 'Expense',
    data: [0, 0, 0, 14000, 0, 11500, 12000]
  }
]

const ProfitStackedBar = () => {
  // Hooks
  const theme = useTheme()

  // Vars
  const disabledText = 'var(--mui-palette-text-disabled)'

  const options: ApexOptions = {
    chart: {
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
    colors: ['var(--mui-palette-primary-main)', 'var(--mui-palette-success-main)', 'var(--mui-palette-secondary-main)'],
    grid: {
      strokeDashArray: 10,
      padding: { top: -20, left: -3, bottom: -10 },
      xaxis: {
        lines: { show: false }
      },
      borderColor: 'var(--mui-palette-divider)'
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 6,
      curve: 'smooth',
      lineCap: 'round',
      colors: ['var(--mui-palette-background-paper)']
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
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
      labels: {
        style: { colors: disabledText, fontSize: theme.typography.body2.fontSize as string }
      }
    },
    yaxis: {
      labels: {
        offsetY: 2,
        offsetX: -15,
        formatter: (value: number) => (value > 999 ? `${(value / 1000).toFixed(0)}k` : `${value}`),
        style: { colors: disabledText, fontSize: theme.typography.body2.fontSize as string }
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        options: {
          plotOptions: { bar: { columnWidth: '42%' } }
        }
      },
      {
        breakpoint: 1350,
        options: {
          plotOptions: { bar: { columnWidth: '50%' } }
        }
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '32%'
            }
          }
        }
      },
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '37%'
            }
          }
        }
      },
      {
        breakpoint: 900,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '42%'
            }
          }
        }
      },
      {
        breakpoint: 785,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '50%'
            }
          }
        }
      },
      {
        breakpoint: 700,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '60%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '45%'
            }
          }
        }
      },
      {
        breakpoint: 500,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '60%'
            }
          }
        }
      },
      {
        breakpoint: 400,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '65%'
            }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <Grid container>
        <Grid size={{ xs: 12, sm: 7 }} className='border-be sm:border-be-0 sm:border-ie'>
          <CardHeader title='Total Profit' />
          <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
            <AppReactApexCharts type='bar' height={262} width='100%' series={series} options={options} />
          </CardContent>
        </Grid>
        <Grid size={{ xs: 12, sm: 5 }}>
          <CardHeader
            title='$482.85k'
            subheader='Last month balance $234.40k'
            action={
              <OptionsMenu iconClassName='text-textPrimary' options={['Last 28 Days', 'Last Month', 'Last Year']} />
            }
          />
          <CardContent className='flex flex-col gap-4 !pbs-2.5'>
            {data.map((item: DataType, index: number) => {
              return (
                <div key={index} className='flex items-center gap-3'>
                  <CustomAvatar skin='light' variant='rounded' color={item.avatarColor}>
                    <i className={item.icon} />
                  </CustomAvatar>
                  <div className='flex flex-col gap-1'>
                    <Typography className='font-medium' color='text.primary'>
                      {item.title}
                    </Typography>
                    <Typography>{item.subtitle}</Typography>
                  </div>
                </div>
              )
            })}
            <Button fullWidth variant='contained'>
              View Report
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ProfitStackedBar
