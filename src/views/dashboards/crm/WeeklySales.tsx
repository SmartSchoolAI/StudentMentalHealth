// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import OptionsMenu from '@core/components/option-menu'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const WeeklySales = () => {
  // Vars
  const primaryColorWithOpacity = 'rgba(var(--mui-palette-primary-mainChannel) / 0.1)'

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    tooltip: { enabled: false },
    grid: {
      show: false,
      padding: {
        top: -15,
        left: -10,
        right: -10,
        bottom: 30
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        distributed: true,
        columnWidth: '60%'
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [
      primaryColorWithOpacity,
      primaryColorWithOpacity,
      primaryColorWithOpacity,
      primaryColorWithOpacity,
      'var(--mui-palette-primary-main)',
      primaryColorWithOpacity,
      primaryColorWithOpacity
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: 'on',
      labels: {
        style: {
          fontSize: '13px',
          colors: 'var(--mui-palette-text-secondary)'
        }
      }
    },
    yaxis: { show: false }
  }

  return (
    <Card>
      <CardHeader
        title='Weekly Sales'
        subheader='Total 85.4k Sales'
        action={<OptionsMenu iconClassName='text-textPrimary' options={['Last 28 Days', 'Last Month', 'Last Year']} />}
      />
      <CardContent>
        <AppReactApexCharts
          type='bar'
          height={258}
          width='100%'
          series={[{ data: [40, 60, 50, 60, 90, 40, 50] }]}
          options={options}
        />
        <div className='flex items-center justify-around'>
          <div className='flex items-center gap-3'>
            <CustomAvatar skin='light' color='primary' variant='rounded'>
              <i className='ri-pie-chart-2-line text-primary' />
            </CustomAvatar>
            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                34.6k
              </Typography>
              <Typography>Sales</Typography>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <CustomAvatar skin='light' color='success' variant='rounded'>
              <i className='ri-money-dollar-circle-line text-success' />
            </CustomAvatar>
            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                $482k
              </Typography>
              <Typography>Total Profit</Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default WeeklySales
