// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { CustomInputVerticalData } from '@core/components/custom-inputs/types'

// Component Imports
import CustomInputVertical from '@core/components/custom-inputs/Vertical'
import DirectionalIcon from '@components/DirectionalIcon'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

// Vars
const data: CustomInputVerticalData[] = [
  {
    title: 'I am the Builder',
    value: 'builder',
    content: 'List property as Builder, list your project and get highest reach.',
    asset: 'ri-home-6-line',
    isSelected: true
  },
  {
    title: 'I am the Owner',
    value: 'owner',
    content: 'Submit property as an Individual. Lease, Rent or Sell at the best price.',
    asset: 'ri-user-3-line'
  },
  {
    title: 'I am the broker',
    value: 'broker',
    content: 'Earn highest commission by listing your clients properties at the best price.',
    asset: 'ri-money-dollar-circle-line'
  }
]

const StepPersonalDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  // Vars
  const initialSelectedOption: string = data.filter(item => item.isSelected)[
    data.filter(item => item.isSelected).length - 1
  ].value

  // States
  const [selectedOption, setSelectedOption] = useState<string>(initialSelectedOption)
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false)

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleOptionChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedOption(prop)
    } else {
      setSelectedOption((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Grid container spacing={5}>
      {data.map((item, index) => {
        let asset

        if (item.asset && typeof item.asset === 'string') {
          asset = <i className={classnames(item.asset, 'text-[28px]')} />
        }

        return (
          <CustomInputVertical
            type='radio'
            key={index}
            gridProps={{ size: { xs: 12, sm: 4 } }}
            selected={selectedOption}
            name='custom-radios-basic'
            handleChange={handleOptionChange}
            data={typeof item.asset === 'string' ? { ...item, asset } : item}
          />
        )
      })}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField fullWidth label='First Name' placeholder='John' />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField fullWidth label='Last Name' placeholder='Doe' />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField fullWidth label='Username' placeholder='john.doe' />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label='Password'
          placeholder='············'
          id='personal-details-password'
          type={isPasswordShown ? 'text' : 'password'}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    size='small'
                    edge='end'
                    onClick={handleClickShowPassword}
                    onMouseDown={e => e.preventDefault()}
                    aria-label='toggle password visibility'
                  >
                    <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                  </IconButton>
                </InputAdornment>
              )
            }
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField fullWidth label='Email' placeholder='john.doe@gmail.com' />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label='Contact'
          placeholder='202 555 0111'
          slotProps={{
            input: {
              startAdornment: <InputAdornment position='start'>US (+1)</InputAdornment>
            }
          }}
        />
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

export default StepPersonalDetails
