// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import LinearProgress from '@mui/material/LinearProgress'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Chip from '@mui/material/Chip'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

const FinanceSummary = () => {
  return (
    <Card>
      <CardHeader
        title='Finance Summary'
        subheader='Check out each Column for more details'
        action={
          <CustomAvatar skin='light' color='primary' size={44}>
            <i className='ri-question-line text-[28px]'></i>
          </CustomAvatar>
        }
      ></CardHeader>
      <CardContent>
        <Grid container spacing={9}>
          <Grid size={{ xs: 12 }}>
            <Grid container spacing={2}>
              <Grid size={{ sm: 6 }}>
                <div className='flex flex-col gap-1'>
                  <Typography>Annual Companies Taxes</Typography>
                  <Typography variant='h5'>$1450.35</Typography>
                </div>
              </Grid>
              <Grid size={{ sm: 6 }}>
                <div className='flex flex-col gap-1'>
                  <Typography>Next Tax Review Date</Typography>
                  <Typography variant='h5'>July 14, 2021</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Grid container spacing={2}>
              <Grid size={{ sm: 6 }}>
                <div className='flex flex-col gap-1'>
                  <Typography>Average Product Price</Typography>
                  <Typography variant='h5'>$85.50</Typography>
                </div>
              </Grid>
              <Grid size={{ sm: 6 }}>
                <div className='flex flex-col gap-1'>
                  <Typography>Satisfaction Rate</Typography>
                  <div className='flex items-center gap-5'>
                    <LinearProgress variant='determinate' value={75} className='is-20' />
                    <Typography>75%</Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Grid container spacing={2} justifyContent='space-between' alignItems='center'>
              <Grid size={{ xs: 6 }}>
                <AvatarGroup total={6}>
                  <Avatar alt='Travis Howard' src='/images/avatars/7.png' />
                  <Avatar alt='Agnes Walker' src='/images/avatars/8.png' />
                  <Avatar alt='John Doe' src='/images/avatars/6.png' />
                </AvatarGroup>
              </Grid>
              <Grid size={{ xs: 6 }} className='text-end'>
                <Chip label='5 Days Ago' variant='tonal' size='small' color='primary' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default FinanceSummary
