// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import type { ButtonProps } from '@mui/material/Button'

// Component Imports
import PaymentProvidersDialog from '@components/dialogs/payment-providers'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const PaymentProviders = () => {
  // Vars
  const buttonProps: ButtonProps = {
    variant: 'outlined',
    children: 'Choose A Provider'
  }

  return (
    <Card>
      <CardHeader title='Payment providers' />
      <CardContent>
        <Typography className='mbe-5'>
          Providers that enable you to accept payment methods at a rate set by the third-party. An additional fee will
          apply to new orders once you select a plan.
        </Typography>
        <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={PaymentProvidersDialog} />
      </CardContent>
    </Card>
  )
}

export default PaymentProviders
