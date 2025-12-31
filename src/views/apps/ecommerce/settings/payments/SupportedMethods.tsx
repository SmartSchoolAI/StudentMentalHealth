// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import type { ButtonProps } from '@mui/material/Button'

// Component Imports
import Link from '@components/Link'
import PaymentMethod from '@components/dialogs/payment-method'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const SupportedMethods = () => {
  // Vars
  const buttonProps: ButtonProps = {
    variant: 'outlined',
    children: 'Add Payment Methods'
  }

  return (
    <Card>
      <CardHeader
        title='Supported payment methods'
        subheader={`Payment methods that are available with one of Vuexy's approved payment providers.`}
      />
      <CardContent className='flex flex-col items-start gap-5'>
        <Typography className='font-medium' color='text.primary'>
          Default
        </Typography>
        <div className='bg-actionHover rounded is-full p-5'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center rounded bg-white shadow-sm min-is-[58px] min-bs-[37px]'>
              <img src='/images/apps/ecommerce/paypal.png' height={25} />
            </div>
            <Typography component={Link} color='primary.main' className='font-medium'>
              Activate PayPal
            </Typography>
          </div>
          <Divider className='mlb-6' />
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <div>
                <Typography variant='body2' className='mbe-2'>
                  Provider
                </Typography>
                <Typography className='font-medium' color='text.primary'>
                  Paypal
                </Typography>
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <div>
                <Typography variant='body2' className='mbe-2'>
                  Status
                </Typography>
                <Chip variant='tonal' size='small' label='Inactive' color='warning' />
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <div>
                <Typography variant='body2' className='mbe-2'>
                  Transaction Fee
                </Typography>
                <Typography className='font-medium' color='text.primary'>
                  2.99%
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={PaymentMethod} />
      </CardContent>
    </Card>
  )
}

export default SupportedMethods
