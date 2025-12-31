'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import AddressBook from './AddressBookCard'
import PaymentMethod from './PaymentMethodCard'

const AddressBilling = () => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <AddressBook />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <PaymentMethod />
      </Grid>
    </Grid>
  )
}

export default AddressBilling
