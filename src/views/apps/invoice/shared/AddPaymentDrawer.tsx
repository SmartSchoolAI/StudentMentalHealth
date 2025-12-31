// React Imports
import { useState } from 'react'
import type { FormEvent } from 'react'

// MUI Import
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

type Props = {
  open: boolean
  handleClose: () => void
}

type FormDataType = {
  paymentDate: Date
  paymentMethod: string
  paymentAmount: number
  paymentNote: string
}

// Vars
const initialData: FormDataType = {
  paymentDate: new Date(),
  paymentMethod: 'select-method',
  paymentAmount: 500,
  paymentNote: ''
}

const AddPaymentDrawer = ({ open, handleClose }: Props) => {
  // States
  const [formData, setFormData] = useState<FormDataType>(initialData)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleClose()
    setFormData(initialData)
  }

  const handleReset = () => {
    handleClose()
    setFormData(initialData)
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
        <Typography variant='h5'>Add New User</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <TextField
            fullWidth
            id='invoice-balance'
            label='Invoice Balance'
            slotProps={{
              input: {
                disabled: true
              }
            }}
            defaultValue='5000.00'
          />
          <TextField
            fullWidth
            id='payment-amount'
            label='Payment Amount'
            type='number'
            slotProps={{
              input: {
                startAdornment: <InputAdornment position='start'>$</InputAdornment>
              }
            }}
            value={formData.paymentAmount}
            onChange={e => setFormData({ ...formData, paymentAmount: +e.target.value })}
          />
          <AppReactDatepicker
            selected={formData.paymentDate}
            id='payment-date'
            onChange={(date: Date | null) => date !== null && setFormData({ ...formData, paymentDate: date })}
            customInput={<TextField fullWidth label='Payment Date' />}
          />
          <FormControl fullWidth>
            <InputLabel htmlFor='payment-method'>Payment Method</InputLabel>
            <Select
              label='Payment Method'
              labelId='payment-method'
              id='payment-method-select'
              value={formData.paymentMethod}
              onChange={e => setFormData({ ...formData, paymentMethod: e.target.value as string })}
            >
              <MenuItem value='select-method' disabled>
                Select Payment Method
              </MenuItem>
              <MenuItem value='cash'>Cash</MenuItem>
              <MenuItem value='bank-transfer'>Bank Transfer</MenuItem>
              <MenuItem value='credit'>Credit</MenuItem>
              <MenuItem value='debit'>Debit</MenuItem>
              <MenuItem value='paypal'>Paypal</MenuItem>
            </Select>
          </FormControl>
          <TextField
            rows={6}
            multiline
            fullWidth
            label='Internal Payment Note'
            placeholder='Internal Payment Note'
            value={formData.paymentNote}
            onChange={e => setFormData({ ...formData, paymentNote: e.target.value })}
          />
          <div className='flex items-center gap-4'>
            <Button size='large' variant='contained' type='submit'>
              Send
            </Button>
            <Button size='large' variant='outlined' color='secondary' type='reset' onClick={handleReset}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddPaymentDrawer
