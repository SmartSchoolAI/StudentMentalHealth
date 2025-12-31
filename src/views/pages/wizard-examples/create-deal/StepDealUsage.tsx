// MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

const StepDealUsage = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  return (
    <Grid container spacing={5} className='pbs-5'>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <InputLabel id='select-user-type'>User Type</InputLabel>
          <Select labelId='select-user-type' label='User Type' defaultValue=''>
            <MenuItem value='all'>All</MenuItem>
            <MenuItem value='registered'>Registered</MenuItem>
            <MenuItem value='unregistered'>Unregistered</MenuItem>
            <MenuItem value='prime-members'>Prime Members</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField fullWidth type='number' label='Max Users' placeholder='500' />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField fullWidth type='number' label='Minimum Cart Amount' placeholder='$99' />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField fullWidth type='number' label='Promotional Fee' placeholder='$9' />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <InputLabel id='select-payment-method'>Payment Method</InputLabel>
          <Select labelId='select-payment-method' label='Payment Method' defaultValue=''>
            <MenuItem value='any'>Any</MenuItem>
            <MenuItem value='credit-card'>Credit Card</MenuItem>
            <MenuItem value='net-banking'>Net Banking</MenuItem>
            <MenuItem value='wallet'>Wallet</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <InputLabel id='select-deal-status'>Deal Status</InputLabel>
          <Select labelId='select-deal-status' label='Deal Status' defaultValue=''>
            <MenuItem value='active'>Active</MenuItem>
            <MenuItem value='inactive'>Inactive</MenuItem>
            <MenuItem value='suspended'>Suspended</MenuItem>
            <MenuItem value='abandoned'>Abandoned</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <FormControlLabel control={<Switch />} label='Limit this discount to a single-use per customer?' />
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

export default StepDealUsage
