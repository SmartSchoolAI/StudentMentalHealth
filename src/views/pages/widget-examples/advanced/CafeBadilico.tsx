// MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

// Components Imports
import OptionMenu from '@core/components/option-menu'

const CafeBadilico = () => {
  return (
    <Card>
      <CardMedia className='bs-[162px]' image='/images/cards/cafe-badilico.png'></CardMedia>
      <CardContent className='flex flex-col gap-4'>
        <div>
          <div className='flex items-center justify-between mbe-2.5'>
            <Typography variant='h5'>Cafe Badilico</Typography>
            <OptionMenu iconClassName='text-textPrimary' options={['Edit Title', 'Edit Timings', 'Edit Description']} />
          </div>
          <div className='flex items-center gap-2'>
            <Rating
              name='google-nest-rating'
              className='flex items-center'
              value={4}
              readOnly
              emptyIcon={<i className='ri-star-fill'></i>}
              icon={<i className='ri-star-fill'></i>}
            />
            <Typography>4 Star (12.4k)</Typography>
          </div>
        </div>
        <Typography>Italian</Typography>
        <Typography>
          The refrigerated dairy aisle of your local grocery store can be a great source tasty, convenient selections
          for your.
        </Typography>
        <Divider />
        <Typography>Tonight’s availability</Typography>
        <div className='flex gap-2'>
          <Chip label='5:30PM' size='small' />
          <Chip label='7:00PM' size='small' />
          <Chip label='7:15PM' size='small' />
        </div>
      </CardContent>
      <CardActions className='grid'>
        <Button variant='contained'>Book Now</Button>
      </CardActions>
    </Card>
  )
}

export default CafeBadilico
