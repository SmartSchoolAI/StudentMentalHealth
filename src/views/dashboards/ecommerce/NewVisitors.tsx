// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Third-party Imports\
import type { ApexOptions } from 'apexcharts'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const NewVisitors = () => {
  // Vars
  const primaryColorWithOpacity = 'rgba(var(--mui-palette-primary-mainChannel) / 0.1)'

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    grid: {
      show: false,
      padding: {
        top: -10,
        bottom: -14
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
    tooltip: {
      enabled: false
    },
    colors: [
      primaryColorWithOpacity,
      primaryColorWithOpacity,
      primaryColorWithOpacity,
      primaryColorWithOpacity,
      'var(--mui-palette-primary-main)',
      primaryColorWithOpacity,
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
      tickPlacement: 'on',
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    },
    yaxis: { show: false }
  }

  return (
    <Card>
      <CardContent className='flex justify-between gap-x-5'>
        <div className='flex flex-col justify-between'>
          <Typography variant='h5'>New Visitors</Typography>
          <div className='flex flex-col gap-2'>
            <Typography>48% new visitors this week.</Typography>
            <div className='flex items-center'>
              <Typography variant='h4'>12,480</Typography>
              <i className='ri-arrow-up-s-line text-success' />
              <Typography color='success.main'>28</Typography>
            </div>
          </div>
        </div>
        <AppReactApexCharts
          type='bar'
          width='100%'
          height={145}
          series={[{ data: [40, 60, 50, 60, 90, 40, 50] }]}
          options={options}
        />
      </CardContent>
    </Card>
  )
}

export default NewVisitors
