// React Imports
import { useState, useRef } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'

// Third-party Imports
import { useForm, Controller } from 'react-hook-form'

// Type Imports
import type { categoryType } from './ProductCategoryTable'

type Props = {
  open: boolean
  handleClose: () => void
  categoryData: categoryType[]
  setData: (data: categoryType[]) => void
}

type FormValues = {
  title: string
  description: string
}

const AddCategoryDrawer = (props: Props) => {
  // Props
  const { open, handleClose, categoryData, setData } = props

  // States
  const [fileName, setFileName] = useState('')
  const [category, setCategory] = useState('')
  const [comment, setComment] = useState('')
  const [status, setStatus] = useState('')

  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Hooks
  const {
    control,
    reset: resetForm,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      title: '',
      description: ''
    }
  })

  // Handle Form Submit
  const handleFormSubmit = (data: FormValues) => {
    const newData = {
      id: categoryData.length + 1,
      categoryTitle: data.title,
      description: data.description,
      totalProduct: Math.floor(Math.random() * 9000) + 1000,
      totalEarning: Math.floor(Math.random() * 90000) + 10000,
      image: `/images/apps/ecommerce/product-${Math.floor(Math.random() * 20) + 1}.png`
    }

    setData([...categoryData, newData])
    handleReset()
  }

  // Handle Form Reset
  const handleReset = () => {
    handleClose()
    resetForm({ title: '', description: '' })
    setFileName('')
    setCategory('')
    setComment('')
    setStatus('')
  }

  // Handle File Upload
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (files && files.length !== 0) {
      setFileName(files[0].name)
    }
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
        <Typography variant='h5'>Add Category</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit(data => handleFormSubmit(data))} className='flex flex-col gap-5'>
          <Controller
            name='title'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Title'
                placeholder='Fashion'
                {...(errors.title && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <Controller
            name='description'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Description'
                placeholder='Enter a description...'
                {...(errors.description && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <div className='flex items-center gap-4'>
            <TextField
              size='small'
              placeholder='No file chosen'
              variant='outlined'
              value={fileName}
              className='flex-auto'
              slotProps={{
                input: {
                  readOnly: true,
                  endAdornment: fileName ? (
                    <InputAdornment position='end'>
                      <IconButton size='small' edge='end' onClick={() => setFileName('')}>
                        <i className='ri-close-line' />
                      </IconButton>
                    </InputAdornment>
                  ) : null
                }
              }}
            />
            <Button component='label' variant='outlined' htmlFor='contained-button-file' className='min-is-fit'>
              Choose
              <input hidden id='contained-button-file' type='file' onChange={handleFileUpload} ref={fileInputRef} />
            </Button>
          </div>
          <FormControl fullWidth>
            <InputLabel id='category'>Parent Category</InputLabel>
            <Select
              fullWidth
              id='category'
              value={category}
              onChange={e => setCategory(e.target.value)}
              label='Parent Category'
              labelId='category'
            >
              <MenuItem value='HouseHold'>HouseHold</MenuItem>
              <MenuItem value='Management'>Management</MenuItem>
              <MenuItem value='Electronics'>Electronics</MenuItem>
              <MenuItem value='Office'>Office</MenuItem>
              <MenuItem value='Accessories'>Accessories</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label='Comment'
            value={comment}
            onChange={e => setComment(e.target.value)}
            multiline
            rows={4}
            placeholder='Write a Comment...'
          />
          <FormControl fullWidth>
            <InputLabel id='plan-select'>Category Status</InputLabel>
            <Select
              fullWidth
              id='select-status'
              value={status}
              onChange={e => setStatus(e.target.value)}
              label='Category Status'
              labelId='status-select'
            >
              <MenuItem value='Published'>Published</MenuItem>
              <MenuItem value='Inactive'>Inactive</MenuItem>
              <MenuItem value='Scheduled'>Scheduled</MenuItem>
            </Select>
          </FormControl>
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
    </Drawer>
  )
}

export default AddCategoryDrawer
