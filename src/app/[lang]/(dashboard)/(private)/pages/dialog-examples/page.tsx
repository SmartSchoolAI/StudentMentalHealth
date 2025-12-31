// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import DialogAddCard from '@views/pages/dialog-examples/DialogAddCard'
import DialogEditUserInfo from '@views/pages/dialog-examples/DialogEditUserInfo'
import DialogAuthentication from '@views/pages/dialog-examples/DialogAuthentication'
import DialogAddNewAddress from '@views/pages/dialog-examples/DialogAddNewAddress'
import DialogShareProject from '@views/pages/dialog-examples/DialogShareProject'
import DialogReferEarn from '@views/pages/dialog-examples/DialogReferEarn'
import DialogPaymentMethod from '@views/pages/dialog-examples/DialogPaymentMethod'
import DialogPaymentProviders from '@views/pages/dialog-examples/DialogPaymentProviders'
import DialogCreateApp from '@views/pages/dialog-examples/DialogCreateApp'
import DialogPricing from '@views/pages/dialog-examples/DialogPricing'

// Data Imports
import { getPricingData } from '@/app/server/actions'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/pages/pricing` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getPricingData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/pricing`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
} */

const DialogExamples = async () => {
  // Vars
  const data = await getPricingData()

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <DialogAddCard />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <DialogEditUserInfo />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <DialogAuthentication />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <DialogAddNewAddress />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <DialogShareProject />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <DialogReferEarn />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <DialogPaymentMethod />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <DialogPaymentProviders />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <DialogPricing data={data} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <DialogCreateApp />
      </Grid>
    </Grid>
  )
}

export default DialogExamples
