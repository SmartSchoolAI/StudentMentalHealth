// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import ReactPlayer from '@/libs/ReactPlayer'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import CustomIconButton from '@core/components/mui/IconButton'

const FreeCourses = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <div className='flex flex-col items-center justify-center gap-y-4 bs-full text-center'>
              <CustomAvatar variant='rounded' skin='light' color='primary' size={52}>
                <i className='ri-gift-line text-4xl' />
              </CustomAvatar>
              <Typography variant='h4'>Today&apos;s Free Courses</Typography>
              <Typography>
                We offers 284 Free Online courses from top tutors and companies to help you start or advance your career
                skills. Learn online for free and fast today!
              </Typography>
              <Button variant='contained'>Get Premium Courses</Button>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <div className='border rounded bs-full'>
              <div className='mli-2 mbs-2 overflow-hidden rounded'>
                <ReactPlayer
                  playing
                  controls
                  src='https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
                  height={200}
                  className='bg-black is-full!'
                  light={
                    <img src='/images/apps/academy/7.png' alt='Thumbnail' className='is-full object-cover h-50!' />
                  }
                  playIcon={
                    <CustomIconButton variant='contained' color='error' className='absolute rounded-full'>
                      <i className='ri-play-line' />
                    </CustomIconButton>
                  }
                />
              </div>
              <div className='flex flex-col gap-2 p-5'>
                <Typography variant='h5'>Your First Singing Lesson</Typography>
                <Typography>
                  In the same way as any other artistic domain, singing lends itself perfectly to self-teaching.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <div className='border rounded bs-full'>
              <div className='mli-2 mbs-2 overflow-hidden rounded'>
                <ReactPlayer
                  playing
                  controls
                  src='https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
                  height={200}
                  className='bg-black is-full!'
                  light={
                    <img src='/images/apps/academy/8.png' alt='Thumbnail' className='is-full object-cover h-50!' />
                  }
                  playIcon={
                    <CustomIconButton variant='contained' color='error' className='absolute rounded-full'>
                      <i className='ri-play-line' />
                    </CustomIconButton>
                  }
                />
              </div>
              <div className='flex flex-col gap-2 p-5'>
                <Typography variant='h5'>Guitar for Beginners</Typography>
                <Typography>
                  The Fender Acoustic Guitar is the best choice for both beginners and professionals offering a great
                  sound.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default FreeCourses
