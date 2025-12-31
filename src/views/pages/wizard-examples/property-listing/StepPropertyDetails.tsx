// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI IMports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import type { TypographyProps } from '@mui/material/Typography'

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

// Styled Components
const Content = styled(Typography, {
  name: 'MuiCustomInputVertical',
  slot: 'content'
})<TypographyProps>(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center'
}))

// Vars
const data: CustomInputVerticalData[] = [
  {
    value: 'sale',
    title: 'Sell the property',
    content: (
      <Content>
        Post your property for sale.
        <br />
        Unlimited free listing.
      </Content>
    ),
    asset: 'ri-money-dollar-circle-line',
    isSelected: true
  },
  {
    value: 'rent',
    title: 'Rent the property',
    content: (
      <Content>
        Post your property for sale.
        <br />
        Unlimited free listing.
      </Content>
    ),
    asset: 'ri-home-6-line'
  }
]

const StepPropertyDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  // Vars
  const initialSelectedOption: string = data.filter(item => item.isSelected)[
    data.filter(item => item.isSelected).length - 1
  ].value

  // States
  const [selectedOption, setSelectedOption] = useState<string>(initialSelectedOption)

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
            gridProps={{ size: { xs: 12, sm: 6 } }}
            selected={selectedOption}
            name='custom-radios-basic'
            handleChange={handleOptionChange}
            data={typeof item.asset === 'string' ? { ...item, asset } : item}
          />
        )
      })}
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl fullWidth>
          <InputLabel id='validation-property-select'>Property Type</InputLabel>
          <Select label='Property Type' labelId='validation-property-select' defaultValue=''>
            <MenuItem value='residential'>Residential</MenuItem>
            <MenuItem value='commercial'>Commercial</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField fullWidth type='number' label='Zip Code' placeholder='99950' />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl fullWidth>
          <InputLabel id='country-select'>Country</InputLabel>
          <Select label='Country' labelId='country-select' aria-describedby='country-select' defaultValue=''>
            <MenuItem value='UK'>UK</MenuItem>
            <MenuItem value='USA'>USA</MenuItem>
            <MenuItem value='India'>India</MenuItem>
            <MenuItem value='Australia'>Australia</MenuItem>
            <MenuItem value='Germany'>Germany</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField fullWidth label='Landmark' placeholder='Nr. Hard Rock Cafe' />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField fullWidth label='City' placeholder='Los Angeles' />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField fullWidth label='State' placeholder='California' />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField fullWidth multiline minRows={2} label='Address' placeholder='12, Business Park' />
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
