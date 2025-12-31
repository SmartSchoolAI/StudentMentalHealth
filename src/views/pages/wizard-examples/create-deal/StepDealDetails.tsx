// React Imports
import { useState, forwardRef } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Chip from '@mui/material/Chip'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import type { TextFieldProps } from '@mui/material/TextField'
import type { SelectChangeEvent } from '@mui/material/Select'

// Third-party Imports
import { formatDate } from 'date-fns/format'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

type CustomInputProps = TextFieldProps & {
  label?: string
  end: Date | number
  start: Date | number
}

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

// Vars
const offeredItemsArray = ['Apple iPhone 12 Pro', 'Apple iPhone 12 Mini', 'Apple iPhone 12', 'Apple iPhone 11 Pro Max']

const CustomInput = forwardRef((props: CustomInputProps, ref) => {
  // Vars
  const startDate = props.start !== null ? formatDate(props.start, 'MM/dd/yyyy') : ''
  const endDate = props.end !== null ? ` - ${formatDate(props.end, 'MM/dd/yyyy')}` : null
  const value = `${startDate}${endDate !== null ? endDate : ''}`

  return <TextField fullWidth inputRef={ref} label={props.label || ''} {...props} value={value} />
})

const StepDealDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  // States
  const [startDate, setStartDate] = useState<Date | undefined | null>(null)
  const [endDate, setEndDate] = useState<Date | undefined | null>(null)
  const [offeredItems, setOfferedItems] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof offeredItems>) => {
    setOfferedItems(typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDateChange = (dates: [Date | null, Date | null], event: SyntheticEvent<any, Event> | undefined) => {
    const [start, end] = dates

    setStartDate(start)
    setEndDate(end)
  }

  return (
    <Grid container spacing={5} className='pbs-5'>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField fullWidth label='Deal Title' placeholder='Black Friday sale, 25% off' />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField fullWidth label='Deal Code' placeholder='25PEROFF' />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          fullWidth
          multiline
          minRows={4}
          label='Deal Description'
          placeholder='To sell or distribute something as a business deal'
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth>
              <InputLabel id='select-offered-items'>Offered Items</InputLabel>
              <Select
                multiple
                value={offeredItems}
                onChange={handleChange}
                labelId='select-offered-items'
                input={<OutlinedInput label='Offered Items' />}
                renderValue={selected => (
                  <div className='flex flex-wrap gap-2'>
                    {selected.map((value, index) => (
                      <Chip key={index} label={value} />
                    ))}
                  </div>
                )}
              >
                {offeredItemsArray.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth>
              <InputLabel id='select-cart-condition'>Cart Condition</InputLabel>
              <Select labelId='select-cart-condition' label='Cart Condition' defaultValue=''>
                <MenuItem value='all'>
                  <Typography noWrap>Cart must contain all selected Downloads</Typography>
                </MenuItem>
                <MenuItem value='any'>
                  <Typography noWrap>Cart needs one or more of the selected Downloads</Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <AppReactDatepicker
          selectsRange
          endDate={endDate as Date}
          selected={startDate}
          startDate={startDate as Date}
          id='date-range-picker'
          onChange={handleDateChange}
          shouldCloseOnSelect={false}
          customInput={
            <CustomInput label='Deal Duration' start={startDate as Date | number} end={endDate as Date | number} />
          }
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl>
          <FormLabel className='text-[.8125rem] leading-5'>Notify Users</FormLabel>
          <FormGroup aria-label='position' row>
            <FormControlLabel value='email' label='Email' control={<Checkbox />} />
            <FormControlLabel value='sms' label='SMS' control={<Checkbox />} />
            <FormControlLabel control={<Checkbox />} value='push-notification' label='Push Notification' />
          </FormGroup>
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

export default StepDealDetails
