'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MuiStepper from '@mui/material/Stepper'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import type { StepperProps } from '@mui/material/Stepper'

// Third-party Imports
import { toast } from 'react-toastify'
import { Controller, useForm } from 'react-hook-form'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { email, object, minLength, string, array, forward, pipe, nonEmpty, check } from 'valibot'

// Component Imports
import StepperWrapper from '@core/styles/stepper'
import StepperCustomDot from '@components/stepper-dot'
import DirectionalIcon from '@components/DirectionalIcon'

// Vars
const steps = [
  {
    title: 'Account Details',
    subtitle: 'Enter your account details'
  },
  {
    title: 'Personal Info',
    subtitle: 'Setup Information'
  },
  {
    title: 'Social Links',
    subtitle: 'Add Social Links'
  }
]

// Styled Components
const Stepper = styled(MuiStepper)<StepperProps>(({ theme }) => ({
  justifyContent: 'center',
  '& .MuiStep-root': {
    '&:first-of-type': {
      paddingInlineStart: 0
    },
    '&:last-of-type': {
      paddingInlineEnd: 0
    },
    [theme.breakpoints.down('md')]: {
      paddingInline: 0
    }
  }
}))

const accountValidationSchema = object({
  username: pipe(string(), nonEmpty('This field is required'), minLength(1)),
  email: pipe(string(), nonEmpty('This field is required'), email('Please enter a valid email address')),
  password: pipe(
    string(),
    nonEmpty('This field is required'),
    minLength(8, 'Password must be at least 8 characters long')
  ),
  confirmPassword: pipe(string(), nonEmpty('This field is required'), minLength(1))
})

const accountSchema = pipe(
  accountValidationSchema,
  forward(
    check(input => input.password === input.confirmPassword, 'Passwords do not match.'),
    ['confirmPassword']
  )
)

const personalSchema = object({
  firstName: pipe(string(), nonEmpty('This field is required'), minLength(1)),
  lastName: pipe(string(), nonEmpty('This field is required'), minLength(1)),
  country: pipe(string(), nonEmpty('This field is required'), minLength(1)),
  language: pipe(array(string()), nonEmpty('This field is required'), minLength(1))
})

const socialSchema = object({
  twitter: pipe(string(), nonEmpty('This field is required'), minLength(1)),
  facebook: pipe(string(), nonEmpty('This field is required'), minLength(1)),
  google: pipe(string(), nonEmpty('This field is required'), minLength(1)),
  linkedIn: pipe(string(), nonEmpty('This field is required'), minLength(1))
})

const StepperLinearWithValidation = () => {
  // States
  const [activeStep, setActiveStep] = useState(0)
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false)

  // Vars
  const Languages = ['English', 'French', 'Spanish', 'Portuguese', 'Italian', 'German', 'Arabic']

  // Hooks
  const {
    reset: accountReset,
    control: accountControl,
    handleSubmit: handleAccountSubmit,
    formState: { errors: accountErrors }
  } = useForm({
    resolver: valibotResolver(accountSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const {
    reset: personalReset,
    control: personalControl,
    handleSubmit: handlePersonalSubmit,
    formState: { errors: personalErrors }
  } = useForm({
    resolver: valibotResolver(personalSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      country: '',
      language: []
    }
  })

  const {
    reset: socialReset,
    control: socialControl,
    handleSubmit: handleSocialSubmit,
    formState: { errors: socialErrors }
  } = useForm({
    resolver: valibotResolver(socialSchema),
    defaultValues: {
      twitter: '',
      facebook: '',
      google: '',
      linkedIn: ''
    }
  })

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleClickShowConfirmPassword = () => setIsConfirmPasswordShown(show => !show)

  const onSubmit = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)

    if (activeStep === steps.length - 1) {
      toast.success('Form Submitted')
    }
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
    accountReset({ email: '', username: '', password: '', confirmPassword: '' })
    personalReset({ firstName: '', lastName: '', country: '', language: [] })
    socialReset({ twitter: '', facebook: '', google: '', linkedIn: '' })
    setIsPasswordShown(false)
    setIsConfirmPasswordShown(false)
  }

  const renderStepContent = (activeStep: number) => {
    switch (activeStep) {
      case 0:
        return (
          <form key={0} onSubmit={handleAccountSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid size={{ xs: 12 }}>
                <Typography className='font-medium' color='text.primary'>
                  {steps[0].title}
                </Typography>
                <Typography variant='body2'>{steps[0].subtitle}</Typography>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name='username'
                  control={accountControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='Username'
                      placeholder='johnDoe'
                      {...(accountErrors.username && { error: true, helperText: accountErrors.username.message })}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name='email'
                  control={accountControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      type='email'
                      label='Email'
                      placeholder='johndoe@gmail.com'
                      {...(accountErrors.email && { error: true, helperText: accountErrors.email.message })}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name='password'
                  control={accountControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='Password'
                      placeholder='············'
                      id='stepper-linear-validation-password'
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
                      {...(accountErrors.password && { error: true, helperText: accountErrors.password.message })}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name='confirmPassword'
                  control={accountControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='Confirm Password'
                      placeholder='············'
                      id='stepper-linear-confirmPassword'
                      type={isConfirmPasswordShown ? 'text' : 'password'}
                      {...(accountErrors['confirmPassword'] && {
                        error: true,
                        helperText: accountErrors['confirmPassword'].message
                      })}
                      slotProps={{
                        input: {
                          endAdornment: (
                            <InputAdornment position='end'>
                              <IconButton
                                size='small'
                                edge='end'
                                onClick={handleClickShowConfirmPassword}
                                onMouseDown={e => e.preventDefault()}
                                aria-label='toggle password visibility'
                              >
                                <i className={isConfirmPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                              </IconButton>
                            </InputAdornment>
                          )
                        }
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12 }} className='flex justify-between'>
                <Button
                  variant='outlined'
                  disabled
                  color='secondary'
                  startIcon={<DirectionalIcon ltrIconClass='ri-arrow-left-line' rtlIconClass='ri-arrow-right-line' />}
                >
                  Back
                </Button>
                <Button
                  variant='contained'
                  type='submit'
                  endIcon={<DirectionalIcon ltrIconClass='ri-arrow-right-line' rtlIconClass='ri-arrow-left-line' />}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      case 1:
        return (
          <form key={1} onSubmit={handlePersonalSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid size={{ xs: 12 }}>
                <Typography className='font-medium' color='text.primary'>
                  {steps[1].title}
                </Typography>
                <Typography variant='body2'>{steps[1].subtitle}</Typography>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name='firstName'
                  control={personalControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='First Name'
                      placeholder='John'
                      {...(personalErrors.firstName && {
                        error: true,
                        helperText: personalErrors.firstName.message
                      })}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name='lastName'
                  control={personalControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='Last Name'
                      placeholder='Doe'
                      {...(personalErrors.lastName && {
                        error: true,
                        helperText: personalErrors.lastName.message
                      })}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <InputLabel error={Boolean(personalErrors.country)}>Country</InputLabel>
                  <Controller
                    name='country'
                    control={personalControl}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select label='Country' {...field} error={Boolean(personalErrors.country)}>
                        <MenuItem value='UK'>UK</MenuItem>
                        <MenuItem value='USA'>USA</MenuItem>
                        <MenuItem value='Australia'>Australia</MenuItem>
                        <MenuItem value='Germany'>Germany</MenuItem>
                      </Select>
                    )}
                  />
                  {personalErrors.country && <FormHelperText error>country is a required field</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <InputLabel error={Boolean(personalErrors.language)}>Language</InputLabel>
                  <Controller
                    name='language'
                    control={personalControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <Select
                        multiple
                        label='Language'
                        value={Array.isArray(value) ? value : []}
                        onChange={onChange}
                        error={Boolean(personalErrors.language)}
                      >
                        {Languages.map(language => (
                          <MenuItem key={language} value={language}>
                            {language}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                  {personalErrors.language && <FormHelperText error>language is a required field</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12 }} className='flex justify-between'>
                <Button
                  variant='outlined'
                  onClick={handleBack}
                  color='secondary'
                  startIcon={<DirectionalIcon ltrIconClass='ri-arrow-left-line' rtlIconClass='ri-arrow-right-line' />}
                >
                  Back
                </Button>
                <Button
                  variant='contained'
                  type='submit'
                  endIcon={<DirectionalIcon ltrIconClass='ri-arrow-right-line' rtlIconClass='ri-arrow-left-line' />}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      case 2:
        return (
          <form key={2} onSubmit={handleSocialSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid size={{ xs: 12 }}>
                <Typography className='font-medium' color='text.primary'>
                  {steps[2].title}
                </Typography>
                <Typography variant='body2'>{steps[2].subtitle}</Typography>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name='twitter'
                  control={socialControl}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      onChange={onChange}
                      fullWidth
                      label='Twitter'
                      placeholder='https://twitter.com/johndoe'
                      {...(socialErrors.twitter && { error: true, helperText: socialErrors.twitter.message })}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name='facebook'
                  control={socialControl}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      onChange={onChange}
                      fullWidth
                      label='Facebook'
                      placeholder='https://facebook.com/johndoe'
                      {...(socialErrors.facebook && { error: true, helperText: socialErrors.facebook.message })}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name='google'
                  control={socialControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='Google'
                      placeholder='https://google.com/johndoe'
                      {...(socialErrors.google && { error: true, helperText: socialErrors.google.message })}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name='linkedIn'
                  control={socialControl}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='LinkedIn'
                      placeholder='https://linkedin.com/johndoe'
                      {...(socialErrors.linkedIn && { error: true, helperText: socialErrors.linkedIn.message })}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12 }} className='flex justify-between'>
                <Button
                  variant='outlined'
                  onClick={handleBack}
                  color='secondary'
                  startIcon={<DirectionalIcon ltrIconClass='ri-arrow-left-line' rtlIconClass='ri-arrow-right-line' />}
                >
                  Back
                </Button>
                <Button variant='contained' type='submit' endIcon={<i className='ri-check-line' />}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      default:
        return <Typography color='text.primary'>Unknown stepIndex</Typography>
    }
  }

  return (
    <Card>
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const labelProps: {
                error?: boolean
              } = {}

              if (index === activeStep) {
                labelProps.error = false

                if (
                  (accountErrors.email ||
                    accountErrors.username ||
                    accountErrors.password ||
                    accountErrors['confirmPassword']) &&
                  activeStep === 0
                ) {
                  labelProps.error = true
                } else if (
                  (personalErrors.firstName ||
                    personalErrors.lastName ||
                    personalErrors.country ||
                    personalErrors.language) &&
                  activeStep === 1
                ) {
                  labelProps.error = true
                } else if (
                  (socialErrors.google || socialErrors.twitter || socialErrors.facebook || socialErrors.linkedIn) &&
                  activeStep === 2
                ) {
                  labelProps.error = true
                } else {
                  labelProps.error = false
                }
              }

              return (
                <Step key={index}>
                  <StepLabel
                    {...labelProps}
                    slots={{
                      stepIcon: StepperCustomDot
                    }}
                  >
                    <div className='step-label'>
                      <Typography className='step-number' color='text.primary'>{`0${index + 1}`}</Typography>
                      <div>
                        <Typography className='step-title' color='text.primary'>
                          {label.title}
                        </Typography>
                        <Typography className='step-subtitle' color='text.primary'>
                          {label.subtitle}
                        </Typography>
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </CardContent>
      <Divider />
      <CardContent>
        {activeStep === steps.length ? (
          <>
            <Typography className='mlb-2 mli-1' color='text.primary'>
              All steps are completed!
            </Typography>
            <div className='flex justify-end mt-4'>
              <Button variant='contained' onClick={handleReset}>
                Reset
              </Button>
            </div>
          </>
        ) : (
          renderStepContent(activeStep)
        )}
      </CardContent>
    </Card>
  )
}

export default StepperLinearWithValidation
