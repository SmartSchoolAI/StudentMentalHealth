'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'

const Address = () => {
  // States
  const [state, setState] = useState('')

  return (
    <Card>
      <CardHeader title='Billing Address' />
      <CardContent>
        <form>
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth label='Company Name' variant='outlined' placeholder='ThemeSelection' />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth label='Billing Email' variant='outlined' placeholder='john.doe@example.com' />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth label='TAX ID' variant='outlined' placeholder='Enter TAX ID' />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth label='VAT Number' variant='outlined' placeholder='Enter VAT Number' />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                type='number'
                label='Mobile Number'
                placeholder='202 555 0111'
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment position='start'>US (+1)</InputAdornment>
                  }
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <FormControl fullWidth>
                <InputLabel>Country</InputLabel>
                <Select label='Country' value={state} onChange={e => setState(e.target.value)}>
                  <MenuItem value=''>Select Country</MenuItem>
                  <MenuItem value='australia'>Australia</MenuItem>
                  <MenuItem value='canada'>Canada</MenuItem>
                  <MenuItem value='france'>France</MenuItem>
                  <MenuItem value='united-kingdom'>United Kingdom</MenuItem>
                  <MenuItem value='united-states'>United States</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label='Billing Address' variant='outlined' placeholder='Billing Address' />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth label='State' variant='outlined' placeholder='California' />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth type='number' label='Zip Code' variant='outlined' placeholder='231465' />
            </Grid>
            <Grid size={{ xs: 12 }} className='flex gap-4 flex-wrap'>
              <Button variant='contained'>Save Changes</Button>
              <Button variant='outlined' type='reset' color='secondary' onClick={() => setState('')}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default Address
