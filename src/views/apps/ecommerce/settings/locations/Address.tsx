'use client'

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

const Address = () => {
  // States
  const [country, setCountry] = useState('')

  return (
    <Card>
      <CardHeader title='Address' />
      <CardContent className='flex flex-col gap-4'>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth>
              <InputLabel>Country/Region</InputLabel>
              <Select label='Country/Region' value={country} onChange={e => setCountry(e.target.value)}>
                <MenuItem value='United States'>United States</MenuItem>
                <MenuItem value='UK'>UK</MenuItem>
                <MenuItem value='Canada'>Canada</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label='Address' placeholder='123, New Street' />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label='Apartment, suite, etc.' placeholder='Empire Heights' />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label='Phone' placeholder='+1 (234) 456-7890' />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label='City' placeholder='New York' />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label='State' placeholder='New York' />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth type='number' label='PIN code' placeholder='123897' />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Address
