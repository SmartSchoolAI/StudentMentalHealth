// React Imports
import { useEffect, useState } from 'react'
import type { SyntheticEvent } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import TabContext from '@mui/lab/TabContext'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import Fade from '@mui/material/Fade'

// Component Imports
import CustomTabList from '@core/components/mui/TabList'

const StepPayment = ({ handleNext }: { handleNext: () => void }) => {
  // States
  const [value, setValue] = useState<string>('credit-card')
  const [openCollapse, setOpenCollapse] = useState<boolean>(true)
  const [openFade, setOpenFade] = useState<boolean>(true)

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (!openFade) {
      setTimeout(() => {
        setOpenCollapse(false)
      }, 300)
    }
  }, [openFade])

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, lg: 8 }} className='flex flex-col gap-5'>
        <Collapse in={openCollapse}>
          <Fade in={openFade} timeout={{ exit: 300 }}>
            <Alert
              icon={<i className='ri-percent-line' />}
              action={
                <IconButton
                  aria-label='close'
                  color='inherit'
                  size='small'
                  onClick={() => {
                    setOpenFade(false)
                  }}
                >
                  <i className='ri-close-line' />
                </IconButton>
              }
            >
              <AlertTitle>Available Offers</AlertTitle>
              <Typography color='success.main'>
                - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards
              </Typography>
              <Typography color='success.main'>
                - 25% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA
              </Typography>
            </Alert>
          </Fade>
        </Collapse>
        <TabContext value={value}>
          <CustomTabList
            variant='scrollable'
            scrollButtons='auto'
            onChange={handleChange}
            aria-label='customized tabs example'
            pill='true'
          >
            <Tab value='credit-card' label='Card' />
            <Tab value='cash-on-delivery' label='Cash On Delivery' />
            <Tab value='gift-card' label='Gift Card' />
          </CustomTabList>
          <Grid container>
            <Grid size={{ xs: 12, md: 8 }}>
              <TabPanel value='credit-card' className='p-0'>
                <form>
                  <Grid container spacing={5}>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth type='number' label='Card Number' placeholder='0000 0000 0000 0000' />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label='Name' placeholder='John Doe' />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>
                      <TextField fullWidth label='Expiry Date' placeholder='MM/YY' />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>
                      <TextField fullWidth label='CVV' placeholder='123' />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <FormControlLabel control={<Switch defaultChecked />} label='Save Card for future billing?' />
                    </Grid>
                    <Grid size={{ xs: 12 }} className='flex gap-4'>
                      <Button variant='contained' onClick={handleNext}>
                        Checkout
                      </Button>
                      <Button type='reset' variant='outlined' color='secondary'>
                        Reset
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </TabPanel>
              <TabPanel value='cash-on-delivery'>
                <Typography className='mbe-4' color='text.primary'>
                  Cash on Delivery is a type of payment method where the recipient make payment for the order at the
                  time of delivery rather than in advance.
                </Typography>
                <Button variant='contained' onClick={handleNext}>
                  Pay On Delivery
                </Button>
              </TabPanel>
              <TabPanel value='gift-card'>
                <Typography className='mbe-4' color='text.primary'>
                  Enter Gift Card Details
                </Typography>
                <Grid container spacing={5}>
                  <Grid size={{ xs: 12 }}>
                    <TextField fullWidth type='number' label='Gift Card Number' placeholder='Gift Card Number' />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField fullWidth type='number' label='Gift Card Pin' placeholder='Gift Card Pin' />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button variant='contained' onClick={handleNext}>
                      Redeem Gift Card
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
            </Grid>
          </Grid>
        </TabContext>
      </Grid>
      <Grid size={{ xs: 12, lg: 4 }}>
        <div className='border rounded'>
          <CardContent>
            <Typography className='font-medium mbe-4' color='text.primary'>
              Price Details
            </Typography>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between gap-2'>
                <Typography color='text.primary'>Order Total</Typography>
                <Typography>$1198.00</Typography>
              </div>
              <div className='flex items-center justify-between gap-2'>
                <Typography color='text.primary'>Delivery Charges</Typography>
                <div className='flex gap-2'>
                  <Typography color='text.disabled' className='line-through'>
                    $5.00
                  </Typography>
                  <Chip variant='tonal' size='small' color='success' label='Free' />
                </div>
              </div>
            </div>
          </CardContent>
          <Divider />
          <CardContent className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between gap-2'>
                <Typography className='font-medium' color='text.primary'>
                  Total
                </Typography>
                <Typography className='font-medium'>$1198.00</Typography>
              </div>
              <div className='flex items-center justify-between gap-2'>
                <Typography className='font-medium' color='text.primary'>
                  Deliver to:
                </Typography>
                <Chip variant='tonal' size='small' color='primary' label='Home' />
              </div>
            </div>
            <div>
              <Typography className='font-medium' color='text.primary'>
                John Doe (Default),
              </Typography>
              <Typography>4135 Parkway Street,</Typography>
              <Typography>Los Angeles, CA, 90017.</Typography>
              <Typography>Mobile : +1 906 568 2332</Typography>
            </div>
            <Typography
              href='/'
              component={Link}
              onClick={e => e.preventDefault()}
              className='font-medium'
              color='primary.main'
            >
              Change address
            </Typography>
          </CardContent>
        </div>
      </Grid>
    </Grid>
  )
}

export default StepPayment
