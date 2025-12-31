// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

const StepPropertyDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  // States
  const [date, setDate] = useState<Date | null | undefined>(null)

  return (
    <Grid container spacing={5}>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          type='number'
          label='Total Area'
          placeholder='1000'
          slotProps={{
            input: {
              endAdornment: <InputAdornment position='end'>sq-ft</InputAdornment>
            }
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          type='number'
          label='Carpet Area'
          placeholder='800'
          slotProps={{
            input: {
              endAdornment: <InputAdornment position='end'>sq-ft</InputAdornment>
            }
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          type='number'
          label='Plot Area'
          placeholder='800'
          slotProps={{
            input: {
              endAdornment: <InputAdornment position='end'>sq-yd</InputAdornment>
            }
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <AppReactDatepicker
          selected={date}
          placeholderText='YYYY-MM-DD'
          dateFormat={'yyyy-MM-dd'}
          onChange={(date: Date | null) => setDate(date)}
          customInput={<TextField fullWidth label='Available From' />}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl className='gap-2'>
          <FormLabel id='possession-status-radio'>Possession Status</FormLabel>
          <RadioGroup name='possession-status-group' defaultValue='under-construction'>
            <FormControlLabel value='under-construction' control={<Radio />} label='Under Construction' />
            <FormControlLabel value='ready-to-move' control={<Radio />} label='Ready to Move' />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl className='gap-2'>
          <FormLabel id='transaction-radio'>Transaction Type</FormLabel>
          <RadioGroup defaultValue='new-property' name='transaction-group' aria-labelledby='transaction-radio'>
            <FormControlLabel value='new-property' control={<Radio />} label='New property' />
            <FormControlLabel value='resale' control={<Radio />} label='Resale' />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl className='gap-2'>
          <FormLabel id='main-road-radio'>Is Property Facing Main Road</FormLabel>
          <RadioGroup defaultValue='yes' name='main-road-group' aria-labelledby='main-road-radio'>
            <FormControlLabel value='yes' control={<Radio />} label='Yes' />
            <FormControlLabel value='no' control={<Radio />} label='No' />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl className='gap-2'>
          <FormLabel id='gated-colony-radio'>Gated Colony</FormLabel>
          <RadioGroup defaultValue='yes' name='gated-colony-group' aria-labelledby='gated-colony-radio'>
            <FormControlLabel value='yes' control={<Radio />} label='Yes' />
            <FormControlLabel value='no' control={<Radio />} label='No' />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <div className='flex items-center justify-between'>
          <Button
            variant='outlined'
            color='secondary'
            disabled={activeStep === 0}
            onClick={handlePrev}
            startIcon={<DirectionalIcon ltrIconClass='ri-arrow-left-line' rtlIconClass='ri-arrow-right-line' />}
          >
            Previous
          </Button>
          <Button
            variant='contained'
            color={activeStep === steps.length - 1 ? 'success' : 'primary'}
            onClick={handleNext}
            endIcon={
              activeStep === steps.length - 1 ? (
                <i className='ri-check-line' />
              ) : (
                <DirectionalIcon ltrIconClass='ri-arrow-right-line' rtlIconClass='ri-arrow-left-line' />
              )
            }
          >
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default StepPropertyDetails
