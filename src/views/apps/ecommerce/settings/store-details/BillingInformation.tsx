// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

const BillingInformation = () => {
  // States
  const [country, setCountry] = useState('')

  return (
    <Card>
      <CardHeader title='Billing Information' />
      <CardContent>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField fullWidth label='Legal business name' placeholder='Pixinvent' />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <FormControl fullWidth>
              <InputLabel>Country*</InputLabel>
              <Select
                label='Country*'
                name='country'
                variant='outlined'
                value={country}
                onChange={e => setCountry(e.target.value)}
              >
                <MenuItem value='India'>India</MenuItem>
                <MenuItem value='Canada'>Canada</MenuItem>
                <MenuItem value='UK'>UK</MenuItem>
                <MenuItem value='United States'>United States</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField fullWidth label='Address' placeholder='126, New Street' />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField fullWidth label='Apartment,suit, etc.' placeholder='Empire Heights' />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label='City' placeholder='New York' />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label='State' placeholder='New York' />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth type='number' label='PIN Code' placeholder='111011' />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default BillingInformation
