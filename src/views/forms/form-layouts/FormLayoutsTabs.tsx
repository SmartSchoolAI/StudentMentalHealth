'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

type FormDataType = {
  firstName: string
  lastName: string
  country: string
  language: string[]
  date: Date | null
  phoneNumber: string
  username: string
  email: string
  password: string
  isPasswordShown: boolean
  confirmPassword: string
  setIsConfirmPasswordShown: boolean
  twitter: string
  facebook: string
  google: string
  linkedin: string
  instagram: string
  quora: string
}

const FormLayoutsWithTabs = () => {
  // States
  const [value, setValue] = useState('personal_info')

  const [formData, setFormData] = useState<FormDataType>({
    firstName: '',
    lastName: '',
    country: '',
    language: [],
    date: null,
    phoneNumber: '',
    username: '',
    email: '',
    password: '',
    isPasswordShown: false,
    confirmPassword: '',
    setIsConfirmPasswordShown: false,
    twitter: '',
    facebook: '',
    google: '',
    linkedin: '',
    instagram: '',
    quora: ''
  })

  const handleClickShowPassword = () => setFormData(show => ({ ...show, isPasswordShown: !show.isPasswordShown }))

  const handleClickShowConfirmPassword = () =>
    setFormData(show => ({ ...show, setIsConfirmPasswordShown: !show.setIsConfirmPasswordShown }))

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      country: '',
      language: [],
      date: null,
      phoneNumber: '',
      username: '',
      email: '',
      password: '',
      isPasswordShown: false,
      confirmPassword: '',
      setIsConfirmPasswordShown: false,
      twitter: '',
      facebook: '',
      google: '',
      linkedin: '',
      instagram: '',
      quora: ''
    })
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList variant='scrollable' onChange={handleTabChange} className='border-be'>
          <Tab label='Personal Info' value='personal_info' />
          <Tab label='Account Details' value='account_details' />
          <Tab label='Social Links' value='social_links' />
        </TabList>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
            <TabPanel value='personal_info'>
              <Grid container spacing={5}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label='First Name'
                    placeholder='John'
                    value={formData.firstName}
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label='Last Name'
                    placeholder='Doe'
                    value={formData.lastName}
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth>
                    <InputLabel>Country</InputLabel>
                    <Select
                      label='Country'
                      value={formData.country}
                      onChange={e => setFormData({ ...formData, country: e.target.value })}
                    >
                      <MenuItem value='UK'>UK</MenuItem>
                      <MenuItem value='USA'>USA</MenuItem>
                      <MenuItem value='Australia'>Australia</MenuItem>
                      <MenuItem value='Germany'>Germany</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth>
                    <InputLabel>Language</InputLabel>
                    <Select
                      multiple
                      label='Language'
                      value={formData.language}
                      onChange={e => setFormData({ ...formData, language: e.target.value as string[] })}
                    >
                      <MenuItem value='English'>English</MenuItem>
                      <MenuItem value='French'>French</MenuItem>
                      <MenuItem value='Spanish'>Spanish</MenuItem>
                      <MenuItem value='Portuguese'>Portuguese</MenuItem>
                      <MenuItem value='Italian'>Italian</MenuItem>
                      <MenuItem value='German'>German</MenuItem>
                      <MenuItem value='Arabic'>Arabic</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <AppReactDatepicker
                    selected={formData.date}
                    showYearDropdown
                    showMonthDropdown
                    onChange={(date: Date | null) => setFormData({ ...formData, date })}
                    placeholderText='MM/DD/YYYY'
                    customInput={<TextField fullWidth label='Birth Date' placeholder='MM-DD-YYYY' />}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label='Phone Number'
                    type='number'
                    placeholder='123-456-7890'
                    value={formData.phoneNumber}
                    onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                  />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value='account_details'>
              <Grid container spacing={5}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label='Username'
                    placeholder='johnDoe'
                    value={formData.username}
                    onChange={e => setFormData({ ...formData, username: e.target.value })}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    type='email'
                    label='Email'
                    placeholder='johndoe@gmail.com'
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label='Password'
                    placeholder='············'
                    id='form-layout-tabs-password'
                    type={formData.isPasswordShown ? 'text' : 'password'}
                    value={formData.password}
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
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
                              <i className={formData.isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                            </IconButton>
                          </InputAdornment>
                        )
                      }
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label='Confirm Password'
                    placeholder='············'
                    id='form-layout-tabs-confirm-password'
                    type={formData.setIsConfirmPasswordShown ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
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
                              <i className={formData.setIsConfirmPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                            </IconButton>
                          </InputAdornment>
                        )
                      }
                    }}
                  />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value='social_links' className='pbs-0'>
              <Grid container spacing={5}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label='Twitter'
                    placeholder='https://twitter.com/johndoe'
                    value={formData.twitter}
                    onChange={e => setFormData({ ...formData, twitter: e.target.value })}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label='Facebook'
                    placeholder='https://facebook.com/johndoe'
                    value={formData.facebook}
                    onChange={e => setFormData({ ...formData, facebook: e.target.value })}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label='Google+'
                    placeholder='https://plus.google.com/johndoe'
                    value={formData.google}
                    onChange={e => setFormData({ ...formData, google: e.target.value })}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label='LinkedIn'
                    placeholder='https://linkedin.com/johndoe'
                    value={formData.linkedin}
                    onChange={e => setFormData({ ...formData, linkedin: e.target.value })}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label='Instagram'
                    placeholder='https://instagram.com/johndoe'
                    value={formData.instagram}
                    onChange={e => setFormData({ ...formData, instagram: e.target.value })}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label='Quora'
                    placeholder='https://quora.com/johndoe'
                    value={formData.quora}
                    onChange={e => setFormData({ ...formData, quora: e.target.value })}
                  />
                </Grid>
              </Grid>
            </TabPanel>
          </CardContent>
          <Divider />
          <CardActions>
            <Button type='submit' variant='contained' className='mie-2'>
              Submit
            </Button>
            <Button type='reset' variant='outlined' onClick={() => handleReset()}>
              Reset
            </Button>
          </CardActions>
        </form>
      </TabContext>
    </Card>
  )
}

export default FormLayoutsWithTabs
