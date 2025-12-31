// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// Component Imports
import CustomIconButton from '@core/components/mui/IconButton'

const InviteAndShare = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-[3.4375rem]'>
        <div>
          <Typography variant='h5' className='mbe-5'>
            Invite your friends
          </Typography>
          <div className='flex items-center gap-4'>
            <TextField size='small' placeholder='Email Address' className='flex-auto' />
            <Button variant='contained' startIcon={<i className='ri-check-line' />} className='min-is-fit'>
              Submit
            </Button>
          </div>
        </div>
        <div>
          <Typography variant='h5' className='mbe-5'>
            Share the referral link
          </Typography>
          <div className='flex items-center gap-4'>
            <TextField size='small' placeholder='pixinvent.com/?ref=6479' className='flex-auto' />
            <div className='flex gap-2'>
              <CustomIconButton variant='contained' className='bg-facebook text-white'>
                <i className='ri-facebook-circle-line' />
              </CustomIconButton>
              <CustomIconButton variant='contained' className='bg-twitter text-white'>
                <i className='ri-twitter-line' />
              </CustomIconButton>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default InviteAndShare
