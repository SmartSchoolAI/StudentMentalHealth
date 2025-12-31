'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import StepperWrapper from '@core/styles/stepper'
import StepAccountDetails from './StepAccountDetails'
import StepPersonalInfo from './StepPersonalInfo'
import StepBillingDetails from './StepBillingDetails'
import StepperCustomDot from '@components/stepper-dot'
import Logo from '@components/layout/shared/Logo'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Vars
const steps = [
  {
    title: 'Account',
    subtitle: 'Account Details'
  },
  {
    title: 'Personal',
    subtitle: 'Enter Information'
  },
  {
    title: 'Billing',
    subtitle: 'Payment Details'
  }
]

const getStepContent = (step: number, handleNext: () => void, handlePrev: () => void) => {
  switch (step) {
    case 0:
      return <StepAccountDetails activeStep={step} handleNext={handleNext} />
    case 1:
      return <StepPersonalInfo activeStep={step} handleNext={handleNext} handlePrev={handlePrev} />
    case 2:
      return <StepBillingDetails activeStep={step} handlePrev={handlePrev} />

    default:
      return null
  }
}

const RegisterMultiSteps = () => {
  // States
  const [activeStep, setActiveStep] = useState<number>(0)

  // Hooks
  const { settings } = useSettings()
  const theme = useTheme()
  const { lang: locale } = useParams()

  // Handle Stepper
  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handlePrev = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <div className='flex bs-full justify-between items-center'>
      <div
        className={classnames('flex bs-full items-center justify-center is-[594px] max-md:hidden', {
          'border-ie': settings.skin === 'bordered'
        })}
      >
        <img
          src='/images/illustrations/characters/4.png'
          alt='multi-steps-character'
          className={classnames('mis-[92px] bs-auto max-bs-[628px] max-is-full', {
            'scale-x-[-1]': theme.direction === 'rtl'
          })}
        />
      </div>
      <div className='flex justify-center items-center bs-full is-full bg-backgroundPaper'>
        <Link
          href={getLocalizedUrl('/', locale as Locale)}
          className='absolute block-start-5 sm:block-start-[25px] inline-start-6 sm:inline-start-[25px]'
        >
          <Logo />
        </Link>
        <StepperWrapper className='p-5 sm:p-8 is-[700px]'>
          <Stepper className='mbe-12 mbs-16 sm:mbs-0' activeStep={activeStep}>
            {steps.map((step, index) => {
              return (
                <Step key={index} onClick={() => setActiveStep(index)}>
                  <StepLabel
                    slots={{
                      stepIcon: StepperCustomDot
                    }}
                  >
                    <div className='step-label cursor-pointer'>
                      <Typography className='step-number' color='text.primary'>{`0${index + 1}`}</Typography>
                      <div>
                        <Typography className='step-title' color='text.primary'>
                          {step.title}
                        </Typography>
                        <Typography className='step-subtitle' color='text.primary'>
                          {step.subtitle}
                        </Typography>
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
          {getStepContent(activeStep, handleNext, handlePrev)}
        </StepperWrapper>
      </div>
    </div>
  )
}

export default RegisterMultiSteps
