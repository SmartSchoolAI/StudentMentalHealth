// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const UpgradeAccount = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-3 relative items-start'>
        <div>
          <Typography variant='h5'>Upgrade Account 😀</Typography>
          <Typography>Add 15 team members</Typography>
        </div>
        <div>
          <Typography variant='h4' className='primary'>
            $199
          </Typography>
          <Typography>40% OFF 😍</Typography>
        </div>
        <Button size='small' variant='contained'>
          Upgrade Plan
        </Button>
        <img
          src='/images/illustrations/characters/13.png'
          alt='character image'
          height={160}
          className='absolute inline-end-11 bottom-5'
        />
      </CardContent>
    </Card>
  )
}

export default UpgradeAccount
