// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import type { TypographyProps } from '@mui/material/Typography'
import type { ButtonProps } from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { CustomInputHorizontalData, CustomInputVerticalData } from '@core/components/custom-inputs/types'

// Component Imports
import CustomInputHorizontal from '@core/components/custom-inputs/Horizontal'
import CustomInputVertical from '@core/components/custom-inputs/Vertical'
import AddEditAddress from '@components/dialogs/add-edit-address'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

// Styled Components
const HorizontalContent = styled(Typography, {
  name: 'MuiCustomInputHorizontal',
  slot: 'content'
})<TypographyProps>({})

const VerticalContent = styled(Typography, {
  name: 'MuiCustomInputVertical',
  slot: 'content'
})<TypographyProps>({
  textAlign: 'center'
})

// Vars
const data: CustomInputHorizontalData[] = [
  {
    title: 'John Doe (Default)',
    meta: <Chip size='small' variant='tonal' label='Home' color='primary' />,
    value: 'home',
    isSelected: true,
    content: (
      <HorizontalContent component='div' className='flex flex-col bs-full gap-3'>
        <Typography variant='body2'>
          4135 Parkway Street, Los Angeles, CA, 90017.
          <br />
          Mobile : 1234567890 Cash / Card on delivery available
        </Typography>
        <Divider />
        <div className='flex items-center gap-4 mbs-0.5'>
          <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='primary.main'>
            Edit
          </Typography>
          <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='primary.main'>
            Remove
          </Typography>
        </div>
      </HorizontalContent>
    )
  },
  {
    title: 'ACME Inc.',
    meta: <Chip size='small' variant='tonal' label='Office' color='success' />,
    value: 'office',
    content: (
      <HorizontalContent component='div' className='flex flex-col bs-full gap-3'>
        <Typography variant='body2'>
          87 Hoffman Avenue, New York, NY, 10016.
          <br />
          Mobile : 1234567890 Cash / Card on delivery available
        </Typography>
        <Divider />
        <div className='flex items-center gap-4 mbs-0.5'>
          <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='primary.main'>
            Edit
          </Typography>
          <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='primary.main'>
            Remove
          </Typography>
        </div>
      </HorizontalContent>
    )
  }
]

const dataIcons: CustomInputVerticalData[] = [
  {
    isSelected: true,
    value: 'standard',
    title: 'Standard',
    asset: 'ri-user-3-line',
    content: (
      <>
        <Chip size='small' variant='tonal' label='Free' color='success' className='absolute inline-end-5' />
        <VerticalContent variant='body2' className='my-auto'>
          Get your product in 1 Week.
        </VerticalContent>
      </>
    )
  },
  {
    value: 'express',
    title: 'Express',
    asset: 'ri-star-smile-line',
    content: (
      <>
        <Chip label='$10' variant='tonal' size='small' color='secondary' className='absolute inline-end-5' />
        <VerticalContent variant='body2' className='my-auto'>
          Get your product in 3-4 days.
        </VerticalContent>
      </>
    )
  },
  {
    value: 'overnight',
    title: 'Overnight',
    asset: 'ri-vip-crown-line',
    content: (
      <>
        <Chip label='$15' variant='tonal' size='small' color='secondary' className='absolute inline-end-5' />
        <VerticalContent variant='body2' className='my-auto'>
          Get your product in 1 day.
        </VerticalContent>
      </>
    )
  }
]

const StepAddress = ({ handleNext }: { handleNext: () => void }) => {
  // Vars
  const initialSelectedOption: string = data.filter(item => item.isSelected)[
    data.filter(item => item.isSelected).length - 1
  ].value

  // Vars
  const buttonProps: ButtonProps = {
    variant: 'outlined',
    children: 'Add New Address',
    className: 'self-start'
  }

  // States
  const [selectedOption, setSelectedOption] = useState<string>(initialSelectedOption)
  const [selectedSpeed, setSelectedSpeed] = useState<string>('standard')

  const handleOptionChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedOption(prop)
    } else {
      setSelectedOption((prop.target as HTMLInputElement).value)
    }
  }

  const handleSpeedChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedSpeed(prop)
    } else {
      setSelectedSpeed((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, lg: 8 }} className='flex flex-col gap-6'>
        <div className='flex flex-col gap-4'>
          <Typography color='text.primary' className='font-medium self-start'>
            Select your preferable address
          </Typography>
          <Grid container spacing={6} className='is-full'>
            {data.map((item, index) => (
              <CustomInputHorizontal
                type='radio'
                key={index}
                data={item}
                gridProps={{
                  size: {
                    sm: 6,
                    xs: 12
                  }
                }}
                selected={selectedOption}
                name='custom-radios-basic'
                handleChange={handleOptionChange}
              />
            ))}
          </Grid>
          <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={AddEditAddress} />
        </div>
        <div className='flex flex-col gap-4'>
          <Typography color='text.primary' className='font-medium self-start'>
            Choose Delivery Speed
          </Typography>
          <Grid container spacing={6} className='is-full'>
            {dataIcons.map((item, index) => {
              let asset

              if (item.asset && typeof item.asset === 'string') {
                asset = <i className={classnames(item.asset, 'text-[28px]')} />
              }

              return (
                <CustomInputVertical
                  type='radio'
                  key={index}
                  gridProps={{
                    size: {
                      sm: 4,
                      xs: 12
                    }
                  }}
                  selected={selectedSpeed}
                  name='custom-radios-basic'
                  handleChange={handleSpeedChange}
                  data={typeof item.asset === 'string' ? { ...item, asset } : item}
                />
              )
            })}
          </Grid>
        </div>
      </Grid>
      <Grid size={{ xs: 12, lg: 4 }} className='flex flex-col gap-4'>
        <div className='border rounded'>
          <CardContent className='flex flex-col gap-4'>
            <Typography className='font-medium' color='text.primary'>
              Estimated Delivery Date
            </Typography>
            <div className='flex gap-4 items-center'>
              <img width={60} height={60} src='/images/pages/google-home.png' alt='Google Home' />
              <div>
                <Typography>Google - Google Home - White</Typography>
                <Typography className='font-medium'>18th Nov 2021</Typography>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <img width={60} height={60} src='/images/pages/iPhone-11.png' alt='iphone 11' />
              <div>
                <Typography>Apple iPhone 11 (64GB, Black)</Typography>
                <Typography className='font-medium'>20th Nov 2021</Typography>
              </div>
            </div>
          </CardContent>
          <Divider />
          <CardContent className='flex flex-col gap-4'>
            <Typography className='font-medium' color='text.primary'>
              Price Details
            </Typography>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2 justify-between flex-wrap'>
                <Typography color='text.primary'>Order Total</Typography>
                <Typography>$1198.00</Typography>
              </div>
              <div className='flex justify-between flex-wrap'>
                <Typography color='text.primary'>Delivery Charges</Typography>
                <div className='flex gap-2'>
                  <Typography color='text.disabled' className='line-through'>
                    $5.00
                  </Typography>
                  <Chip size='small' variant='tonal' color='success' label='Free' />
                </div>
              </div>
            </div>
          </CardContent>
          <Divider />
          <CardContent className='flex items-center justify-between flex-wrap'>
            <Typography className='font-medium' color='text.primary'>
              Total
            </Typography>
            <Typography className='font-medium' color='text.primary'>
              $1198.00
            </Typography>
          </CardContent>
        </div>
        <div className='flex justify-end'>
          <Button className='max-sm:is-full lg:is-full' variant='contained' onClick={handleNext}>
            Place Order
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default StepAddress
