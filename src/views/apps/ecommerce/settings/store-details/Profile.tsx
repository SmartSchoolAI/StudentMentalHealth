// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Alert from '@mui/material/Alert'
import TextField from '@mui/material/TextField'

const Profile = () => {
  return (
    <Card>
      <CardHeader title='Profile' />
      <CardContent>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField fullWidth label='Store name' placeholder='ABCD' />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField fullWidth label='Phone' placeholder='+(123) 456-7890' />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField fullWidth label='Store contact email' placeholder='johndoe@email.com' />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField fullWidth label='Sender email' placeholder='johndoe@email.com' />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Alert severity='warning' icon={<i className='ri-notification-3-line' />} className='font-medium text-lg'>
              Confirm that you have access to johndoe@gmail.com in sender email settings.
            </Alert>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Profile
