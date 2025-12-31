// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import type { TypographyProps } from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// Component Imports
import CustomInputVertical from '@core/components/custom-inputs/Vertical'
import DirectionalIcon from '@components/DirectionalIcon'
import type { CustomInputVerticalData } from '@core/components/custom-inputs/types'

type StepBillingDetailsProps = {
  handlePrev: () => void
  activeStep: number
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
const customInputData: CustomInputVerticalData[] = [
  {
    title: 'Basic',
    value: 'basic',
    content: (
      <Content component='div' className='flex justify-center items-center flex-col bs-full gap-2'>
        <Typography variant='body2' className='mlb-auto'>
          A simple start for start ups & Students
        </Typography>
        <div>
          <Typography color='primary.main' variant='body2' component='sup' className='self-start'>
            $
          </Typography>
          <Typography color='primary.main' variant='h4' component='span'>
            0
          </Typography>
          <Typography color='text.disabled' variant='body2' component='sub' className='self-end'>
            /month
          </Typography>
        </div>
      </Content>
    ),
    isSelected: true
  },
  {
    title: 'Standard',
    value: 'standard',
    content: (
      <Content component='div' className='flex justify-center items-center flex-col bs-full'>
        <Typography variant='body2' className='mlb-auto'>
          For small to medium businesses
        </Typography>
        <div>
          <Typography color='primary.main' variant='body2' component='sup' className='self-start'>
            $
          </Typography>
          <Typography color='primary.main' variant='h4' component='span'>
            99
          </Typography>
          <Typography variant='body2' component='sub' className='self-end' color='text.disabled'>
            /month
          </Typography>
        </div>
      </Content>
    )
  },
  {
    title: 'Enterprise',
    value: 'enterprise',
    content: (
      <Content component='div' className='flex justify-center items-center flex-col bs-full'>
        <Typography variant='body2' className='mlb-auto'>
          Solution for enterprise & organizations
        </Typography>
        <div>
          <Typography color='primary.main' variant='body2' component='sup' className='self-start'>
            $
          </Typography>
          <Typography color='primary.main' variant='h4' component='span'>
            499
          </Typography>
          <Typography variant='body2' component='sub' className='self-end' color='text.disabled'>
            /month
          </Typography>
        </div>
      </Content>
    )
  }
]

const StepBillingDetails = ({ handlePrev, activeStep }: StepBillingDetailsProps) => {
  // Vars
  const initialSelectedOption: string = customInputData.filter(item => item.isSelected)[
    customInputData.filter(item => item.isSelected).length - 1
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
    <>
      <div className='mbe-5'>
        <Typography variant='h4'>Select Plan</Typography>
        <Typography>Select plan as per your requirement</Typography>
      </div>
      <Grid container spacing={5}>
        {customInputData.map((item, index) => (
          <CustomInputVertical
            type='radio'
            key={index}
            data={item}
            gridProps={{ size: { xs: 12, sm: 4 } }}
            selected={selectedOption}
            name='custom-radios-basic'
            handleChange={handleOptionChange}
          />
        ))}
      </Grid>
      <div className='mbs-12 mbe-5'>
        <Typography variant='h4'>Payment Information</Typography>
        <Typography>Enter your card information</Typography>
      </div>
      <Grid container spacing={5}>
        <Grid size={{ xs: 12 }}>
          <TextField fullWidth label='Card Number' placeholder='1234 1234 1234 1234' />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField fullWidth label='Name on Card' placeholder='John Doe' />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField fullWidth label='Expiry Date' placeholder='MM/YY' />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField fullWidth label='CVV' placeholder='123' />
        </Grid>
        <Grid size={{ xs: 12 }} className='flex justify-between'>
          <Button
            disabled={activeStep === 0}
            variant='outlined'
            color='secondary'
            onClick={handlePrev}
            startIcon={<DirectionalIcon ltrIconClass='ri-arrow-left-line' rtlIconClass='ri-arrow-right-line' />}
          >
            Previous
          </Button>
          <Button
            variant='contained'
            color='success'
            onClick={() => alert('Submitted..!!')}
            endIcon={<i className='ri-check-line' />}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default StepBillingDetails
