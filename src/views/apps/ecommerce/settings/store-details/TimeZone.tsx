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

const TimeZone = () => {
  // States
  const [timezone, setTimezone] = useState('')
  const [unit, setUnit] = useState('')
  const [defaultWeight, setDefaultWeight] = useState('')

  return (
    <Card>
      <CardHeader
        title='Time zone and units of measurement'
        subheader='Used to calculate product prices, shipping weights, and order times.'
      />
      <CardContent>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth>
              <InputLabel>Time zone</InputLabel>
              <Select
                label='Time zone'
                name='timezone'
                variant='outlined'
                value={timezone}
                onChange={e => setTimezone(e.target.value)}
              >
                <MenuItem value='International Date Line West'>(UTC-12:00) International Date Line West</MenuItem>
                <MenuItem value='Coordinated Universal Time-11'>(UTC-11:00) Coordinated Universal Time-11</MenuItem>
                <MenuItem value='Alaska'>(UTC-09:00) Alaska</MenuItem>
                <MenuItem value='Baja California'>(UTC-08:00) Baja California</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <FormControl fullWidth>
              <InputLabel>Unit system</InputLabel>
              <Select
                label='Unit system'
                name='unit'
                variant='outlined'
                value={unit}
                onChange={e => setUnit(e.target.value)}
              >
                <MenuItem value='Metric System'>Metric System</MenuItem>
                <MenuItem value='Imperial'>Imperial</MenuItem>
                <MenuItem value='International System'>International System</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <FormControl fullWidth>
              <InputLabel>Default weight unit</InputLabel>
              <Select
                label='Default weight unit'
                name='default'
                variant='outlined'
                value={defaultWeight}
                onChange={e => setDefaultWeight(e.target.value)}
              >
                <MenuItem value='Kilogram'>Kilogram</MenuItem>
                <MenuItem value='Pounds'>Pounds</MenuItem>
                <MenuItem value='Gram'>Gram</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TimeZone
