// MUI Imports
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

const FaqFooter = () => {
  return (
    <>
      <div className='flex justify-center items-center flex-col text-center mlb-6 gap-2'>
        <Chip label='Question' size='small' color='primary' variant='tonal' />
        <Typography variant='h4'>You still have a question?</Typography>
        <Typography>
          If you cannot find a question in our FAQ, you can always contact us. We will answer you shortly!
        </Typography>
      </div>
      <Grid container spacing={6} className='mbs-6'>
        <Grid size={{ xs: 12, md: 6 }}>
          <div className='flex justify-center items-center flex-col gap-4 p-6 rounded bg-actionHover'>
            <CustomAvatar variant='rounded' color='primary' skin='light' size={50}>
              <i className='ri-phone-line text-3xl' />
            </CustomAvatar>
            <div className='flex items-center flex-col gap-1'>
              <Typography variant='h5'>+ (810) 2548 2568</Typography>
              <Typography>We are always happy to help!</Typography>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <div className='flex justify-center items-center flex-col gap-4 p-6 rounded bg-actionHover'>
            <CustomAvatar variant='rounded' color='primary' skin='light' size={50}>
              <i className='ri-mail-line text-3xl' />
            </CustomAvatar>
            <div className='flex items-center flex-col gap-1'>
              <Typography variant='h5'>hello@help.com</Typography>
              <Typography>Best way to get answer faster!</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default FaqFooter
