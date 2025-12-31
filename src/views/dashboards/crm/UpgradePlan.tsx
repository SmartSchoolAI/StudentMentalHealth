// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

// Components Imports
import Link from '@components/Link'
import OptionMenu from '@core/components/option-menu'

type DataType = {
  avatarSrc: string
  title: string
  cardNumber: string
  alt: string
}

// Vars
const data: DataType[] = [
  {
    avatarSrc: '/images/logos/mastercard.png',
    title: 'Credit Card',
    cardNumber: '2566 xxxx xxxx 8908',
    alt: 'master-card'
  },
  {
    avatarSrc: '/images/logos/dinners-club.png',
    title: 'Credit Card',
    cardNumber: '8990 xxxx xxxx 6852',
    alt: 'credit-card'
  }
]

const UpgradePlan = () => {
  return (
    <Card>
      <CardHeader
        title='Upgrade Plan'
        action={<OptionMenu iconClassName='text-textPrimary' options={['Last 28 Days', 'Last Month', 'Last Year']} />}
      />
      <CardContent className='flex flex-col gap-3'>
        <Typography variant='body2'>
          Please make the payment to start enjoying all the features of our premium plan as soon as possible.
        </Typography>
        <div className='p-4 flex gap-4 rounded bg-primaryLight'>
          <div className='is-10 bs-10 p-2 rounded border border-primary'>
            <img src='/images/cards/briefcase.png' alt='briefcase' width={23} />
          </div>
          <div className='flex items-center justify-between is-full flex-wrap gap-x-4 gap-y-2'>
            <div className='flex flex-col gap-0.5'>
              <Typography color='text.primary' className='font-medium'>
                Platinum
              </Typography>
              <Typography variant='body2' component={Link} color='primary.main'>
                Upgrade Plan
              </Typography>
            </div>
            <div className='flex justify-center'>
              <Typography variant='body2' component='sup' color='text.primary' className='self-start mbs-[5px]'>
                $
              </Typography>
              <Typography variant='h4' component='span'>
                5,250
              </Typography>
              <Typography variant='body2' component='sub' color='text.primary' className='self-end mbe-[5px]'>
                /Year
              </Typography>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Typography color='text.primary' className='font-medium'>
            Payment details
          </Typography>
          {data.map((item, index) => (
            <div key={index} className='flex items-center gap-3'>
              <Avatar variant='rounded' className='bg-actionHover is-[42px] bs-[30px]'>
                <img src={item.avatarSrc} alt={item.alt} width={30} />
              </Avatar>

              <div className='flex items-center justify-between is-full flex-wrap gap-x-4 gap-y-2'>
                <div className='flex flex-col gap-1'>
                  <Typography color='text.primary' className='font-medium'>
                    {item.title}
                  </Typography>
                  <Typography variant='body2'>{item.cardNumber}</Typography>
                </div>
                <TextField name='cvv' label='CVV' size='small' className='is-20' />
              </div>
            </div>
          ))}
          <div>
            <Typography variant='body2' component={Link} color='primary.main'>
              Add Payment Method
            </Typography>
          </div>
        </div>
        <TextField fullWidth name='email' placeholder='Email Address' size='small' />
        <Button variant='contained' color='primary' fullWidth>
          Contact Now
        </Button>
      </CardContent>
    </Card>
  )
}

export default UpgradePlan
