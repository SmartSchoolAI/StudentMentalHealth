'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

// Components Imports
import CustomIconButton from '@core/components/mui/IconButton'

const ProductVariants = () => {
  // States
  const [count, setCount] = useState(1)

  const deleteForm = (e: SyntheticEvent) => {
    e.preventDefault()

    // @ts-ignore
    e.target.closest('.repeater-item').remove()
  }

  return (
    <Card>
      <CardHeader title='Product Variants' />
      <CardContent>
        <Grid container spacing={5}>
          {Array.from(Array(count).keys()).map((item, index) => (
            <Grid key={index} size={{ xs: 12 }} className='repeater-item'>
              <Grid container spacing={5}>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <FormControl fullWidth>
                    <InputLabel>Select Variant</InputLabel>
                    <Select label='Select Variant' defaultValue='Size'>
                      <MenuItem value='Size'>Size</MenuItem>
                      <MenuItem value='Color'>Color</MenuItem>
                      <MenuItem value='Weight'>Weight</MenuItem>
                      <MenuItem value='Smell'>Smell</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 8 }}>
                  <div className='flex items-center gap-5'>
                    <TextField fullWidth label='Variant Value' placeholder='Enter Variant Value' />
                    <CustomIconButton onClick={deleteForm} className='min-is-fit'>
                      <i className='ri-close-line' />
                    </CustomIconButton>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          ))}
          <Grid size={{ xs: 12 }}>
            <Button variant='contained' onClick={() => setCount(count + 1)} startIcon={<i className='ri-add-line' />}>
              Add Another Option
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProductVariants
