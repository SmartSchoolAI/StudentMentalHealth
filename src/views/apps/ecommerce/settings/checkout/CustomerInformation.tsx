// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

const CustomerInformation = () => {
  // States
  const [name, setName] = useState('last-name')
  const [company, setCompany] = useState('dont')
  const [address, setAddress] = useState('dont')
  const [shipping, setShipping] = useState('dont')

  return (
    <Card>
      <CardHeader title='Customer information' />
      <CardContent className='flex flex-col gap-4'>
        <div>
          <FormLabel id='name-radio-buttons-group-label'>Full name</FormLabel>
          <RadioGroup
            value={name}
            onChange={e => setName(e.target.value)}
            aria-labelledby='name-radio-buttons-group'
            className='items-start'
          >
            <FormControlLabel value='last-name' control={<Radio />} label='Only require last name' />
            <FormControlLabel value='first-last-name' control={<Radio />} label='Require first and last name' />
          </RadioGroup>
        </div>
        <div>
          <FormLabel id='company-radio-buttons-group-label'>Company name</FormLabel>
          <RadioGroup
            value={company}
            onChange={e => setCompany(e.target.value)}
            aria-labelledby='company-radio-buttons-group'
            className='items-start'
          >
            <FormControlLabel value='dont' control={<Radio />} label="Don't include" />
            <FormControlLabel value='optional' control={<Radio />} label='Optional' />
            <FormControlLabel value='required' control={<Radio />} label='Required' />
          </RadioGroup>
        </div>
        <div>
          <FormLabel id='address-radio-buttons-group-label'>Address line 2 (apartment, unit, etc.)</FormLabel>
          <RadioGroup
            value={address}
            onChange={e => setAddress(e.target.value)}
            aria-labelledby='address-radio-buttons-group'
            className='items-start'
          >
            <FormControlLabel value='dont' control={<Radio />} label="Don't include" />
            <FormControlLabel value='optional' control={<Radio />} label='Optional' />
            <FormControlLabel value='required' control={<Radio />} label='Required' />
          </RadioGroup>
        </div>
        <div>
          <FormLabel id='shipping-radio-buttons-group-label'>Shipping address phone number</FormLabel>
          <RadioGroup
            value={shipping}
            onChange={e => setShipping(e.target.value)}
            aria-labelledby='shipping-radio-buttons-group'
            className='items-start'
          >
            <FormControlLabel value='dont' control={<Radio />} label="Don't include" />
            <FormControlLabel value='optional' control={<Radio />} label='Optional' />
            <FormControlLabel value='required' control={<Radio />} label='Required' />
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomerInformation
