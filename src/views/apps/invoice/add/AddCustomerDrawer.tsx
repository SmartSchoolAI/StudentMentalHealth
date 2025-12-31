// React Imports
import { useState } from 'react'
import type { FormEvent } from 'react'

// MUI Imports
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Divider from '@mui/material/Divider'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  onFormSubmit: (formData: FormDataType) => void
}

export type FormDataType = {
  name: string
  company: string
  email: string
  address: string
  country: string
  contactNumber: string
}

// Vars
export const initialFormData: FormDataType = {
  name: '',
  company: '',
  email: '',
  address: '',
  country: 'USA',
  contactNumber: ''
}

const countries = ['USA', 'UK', 'Russia', 'Australia', 'Canada']

const AddCustomerDrawer = ({ open, setOpen, onFormSubmit }: Props) => {
  // States
  const [data, setData] = useState<FormDataType>(initialFormData)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setOpen(false)
    onFormSubmit(data)
    handleReset()
  }

  const handleReset = () => {
    setOpen(false)
    setData(initialFormData)
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <div className='flex items-center justify-between pli-5 plb-4'>
        <Typography variant='h6'>Add New Customer</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={e => handleSubmit(e)} className='flex flex-col gap-5'>
          <TextField
            fullWidth
            id='name'
            label='Name'
            value={data.name}
            onChange={e => setData({ ...data, name: e.target.value })}
          />
          <TextField
            fullWidth
            id='company'
            label='Company'
            value={data.company}
            onChange={e => setData({ ...data, company: e.target.value })}
          />
          <TextField
            fullWidth
            id='email'
            label='Email'
            value={data.email}
            onChange={e => setData({ ...data, email: e.target.value })}
          />
          <TextField
            rows={6}
            multiline
            fullWidth
            id='address'
            label='Address'
            value={data.address}
            onChange={e => setData({ ...data, address: e.target.value })}
          />
          <FormControl>
            <InputLabel id='country'>Country</InputLabel>
            <Select
              id='country'
              label='Country'
              name='country'
              variant='outlined'
              value={data?.country?.toLowerCase().replace(/\s+/g, '-') || ''}
              onChange={e => setData({ ...data, country: e.target.value })}
            >
              {countries.map((item, index) => (
                <MenuItem key={index} value={item.toLowerCase().replace(/\s+/g, '-')}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            id='contact'
            type='number'
            label='Contact Number'
            value={data.contactNumber}
            onChange={e => setData({ ...data, contactNumber: e.target.value })}
          />
          <div className='flex items-center gap-4'>
            <Button variant='contained' type='submit'>
              Add
            </Button>
            <Button variant='outlined' color='secondary' type='reset' onClick={handleReset}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddCustomerDrawer
