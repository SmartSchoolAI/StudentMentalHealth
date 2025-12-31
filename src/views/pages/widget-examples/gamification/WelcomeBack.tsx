// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const WelcomeBack = () => {
  return (
    <Card className='relative overflow-visible sm:mt-6 md:mt-0'>
      <CardContent className='!pbe-0 sm:!pbe-5'>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant='h4' className='mbe-9'>
              Welcome back <span className='font-bold'>John!</span> 🥳
            </Typography>
            <Typography>You have 4 tasks to finish today, You already completed 68% 😍 tasks. Good job!</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} className='flex justify-center sm:absolute sm:inline-end-11 sm:bottom-0 sm'>
            <img
              alt='Congratulations John'
              src='/images/illustrations/characters-with-objects/4.png'
              className='bs-auto max-is-full max-bs-[200px]'
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default WelcomeBack
