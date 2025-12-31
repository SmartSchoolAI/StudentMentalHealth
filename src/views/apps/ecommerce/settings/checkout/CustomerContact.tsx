// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Alert from '@mui/material/Alert'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const CustomerContact = () => {
  // States
  const [method, setMethod] = useState('phone')

  return (
    <Card>
      <CardHeader title='Customer contact method' subheader='Select what contact method customers use to check out.' />
      <CardContent>
        <RadioGroup
          value={method}
          onChange={e => setMethod(e.target.value)}
          aria-labelledby='method-radio-buttons-group'
          className='items-start mbe-4'
        >
          <FormControlLabel value='phone' control={<Radio />} label='Phone number' />
          <FormControlLabel value='email' control={<Radio />} label='Email' />
        </RadioGroup>
        <Alert severity='warning' icon={<i className='ri-information-line' />} className='font-medium text-lg'>
          To send SMS updates, you need to install an SMS App.
        </Alert>
      </CardContent>
    </Card>
  )
}

export default CustomerContact
