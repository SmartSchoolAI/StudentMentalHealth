// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// Component Imports
import Link from '@components/Link'
import CustomIconButton from '@core/components/mui/IconButton'

const TwoStepVerification = () => {
  return (
    <Card>
      <CardHeader title='Two-step verification' subheader='Keep your account secure with authentication step.' />
      <CardContent>
        <InputLabel htmlFor='sms' className='font-medium text-textPrimary mbe-1'>
          SMS
        </InputLabel>
        <div className='flex items-center gap-5 mbe-4'>
          <TextField id='sms' placeholder='+1(968) 819-2547' fullWidth size='small' />
          <div className='flex gap-2'>
            <CustomIconButton variant='outlined' color='secondary'>
              <i className='ri-edit-box-line' />
            </CustomIconButton>
            <CustomIconButton variant='outlined' color='secondary'>
              <i className='ri-user-add-line' />
            </CustomIconButton>
          </div>
        </div>
        <Typography>
          Two-factor authentication adds an additional layer of security to your account by requiring more than just a
          password to log in.{' '}
          <Typography component={Link} color='primary.main'>
            Learn more.
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TwoStepVerification
