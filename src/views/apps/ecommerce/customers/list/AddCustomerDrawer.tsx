// React Imports
import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import Typography from '@mui/material/Typography'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useForm, Controller } from 'react-hook-form'

// Types Imports
import type { Customer } from '@/types/apps/ecommerceTypes'

type Props = {
  open: boolean
  handleClose: () => void
  setData: (data: Customer[]) => void
  customerData?: Customer[]
}

type FormValidateType = {
  fullName: string
  email: string
  country: string
}

type FormNonValidateType = {
  contact: string
  address1: string
  address2: string
  town: string
  state: string
  postcode: string
}

type countryType = {
  country: string
}

export const country: { [key: string]: countryType } = {
  india: { country: 'India' },
  australia: { country: 'Australia' },
  france: { country: 'France' },
  brazil: { country: 'Brazil' },
  us: { country: 'United States' },
  china: { country: 'China' }
}

// Vars
const initialData = {
  contact: '',
  address1: '',
  address2: '',
  town: '',
  state: '',
  postcode: ''
}

const AddCustomerDrawer = (props: Props) => {
  // Props
  const { open, handleClose, setData, customerData } = props

  // States
  const [formData, setFormData] = useState<FormNonValidateType>(initialData)

  // Hooks
  const {
    control,
    reset: resetForm,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValidateType>({
    defaultValues: {
      fullName: '',
      email: '',
      country: ''
    }
  })

  const onSubmit = (data: FormValidateType) => {
    const newData: Customer = {
      id: (customerData?.length && customerData?.length + 1) || 1,
      customer: data.fullName,
      customerId: customerData?.[Math.floor(Math.random() * 100) + 1].customerId ?? '1',
      email: data.email,
      country: `${country[data.country].country}`,
      countryCode: 'st',
      countryFlag: `/images/cards/${data.country}.png`,
      order: Math.floor(Math.random() * 1000) + 1,
      totalSpent: Math.floor(Math.random() * (1000000 - 100) + 100) / 100,
      avatar: `/images/avatars/${Math.floor(Math.random() * 8) + 1}.png`
    }

    setData([...(customerData ?? []), newData])
    resetForm({ fullName: '', email: '', country: '' })
    setFormData(initialData)
    handleClose()
  }

  const handleReset = () => {
    handleClose()
    resetForm({ fullName: '', email: '', country: '' })
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
        <Typography variant='h5'>Add a Customer</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <PerfectScrollbar options={{ wheelPropagation: false, suppressScrollX: true }}>
        <div className='p-5'>
          <form onSubmit={handleSubmit(data => onSubmit(data))} className='flex flex-col gap-5'>
            <Typography color='text.primary' className='font-medium'>
              Basic Information
            </Typography>
            <Controller
              name='fullName'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label='First Name'
                  placeholder='John'
                  {...(errors.fullName && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  type='email'
                  label='Email Address'
                  placeholder='johndoe@gmail.com'
                  {...(errors.email && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />
            <FormControl fullWidth>
              <InputLabel id='country' error={Boolean(errors.country)}>
                Country*
              </InputLabel>
              <Controller
                name='country'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select label='Country*' {...field} error={Boolean(errors.country)}>
                    <MenuItem value='india'>India</MenuItem>
                    <MenuItem value='australia'>Australia</MenuItem>
                    <MenuItem value='france'>France</MenuItem>
                    <MenuItem value='brazil'>Brazil</MenuItem>
                    <MenuItem value='us'>USA</MenuItem>
                    <MenuItem value='china'>China</MenuItem>
                  </Select>
                )}
              />
              {errors.country && <FormHelperText error>This field is required.</FormHelperText>}
            </FormControl>
            <Typography color='text.primary' className='font-medium'>
              Shipping Information
            </Typography>
            <TextField
              fullWidth
              label='Address Line 1*'
              name='address1'
              variant='outlined'
              value={formData.address1}
              onChange={e => setFormData({ ...formData, address1: e.target.value })}
            />
            <TextField
              fullWidth
              label='Address Line 2*'
              name='address2'
              variant='outlined'
              value={formData.address2}
              onChange={e => setFormData({ ...formData, address2: e.target.value })}
            />
            <TextField
              fullWidth
              label='Town*'
              name='town'
              variant='outlined'
              value={formData.town}
              onChange={e => setFormData({ ...formData, town: e.target.value })}
            />
            <TextField
              fullWidth
              label='State/Province*'
              name='state'
              variant='outlined'
              value={formData.state}
              onChange={e => setFormData({ ...formData, state: e.target.value })}
            />
            <TextField
              fullWidth
              label='Post Code*'
              name='postcode'
              variant='outlined'
              value={formData.postcode}
              onChange={e => setFormData({ ...formData, postcode: e.target.value })}
            />
            <TextField
              label='Mobile Number'
              type='number'
              fullWidth
              placeholder='(397) 294-5153'
              value={formData.contact}
              onChange={e => setFormData({ ...formData, contact: e.target.value })}
            />
            <div className='flex justify-between'>
              <div className='flex flex-col items-start gap-1'>
                <Typography color='text.primary' className='font-medium'>
                  Use as a billing address?
                </Typography>
                <Typography variant='body2'>Please check budget for more info.</Typography>
              </div>
              <Switch defaultChecked />
            </div>
            <div className='flex items-center gap-4'>
              <Button variant='contained' type='submit'>
                Add
              </Button>
              <Button variant='outlined' color='error' type='reset' onClick={handleReset}>
                Discard
              </Button>
            </div>
          </form>
        </div>
      </PerfectScrollbar>
    </Drawer>
  )
}

export default AddCustomerDrawer
