// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
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

const StepReview = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  return (
    <Grid container spacing={6} className='pbs-5'>
      <Grid size={{ xs: 12, lg: 6 }} className='flex flex-col gap-4'>
        <Typography variant='h4'>Almost done! 🚀</Typography>
        <Typography>Confirm your deal details information and submit to create it.</Typography>
        <table>
          <tbody>
            <tr>
              <td className='plb-1'>
                <Typography className='font-medium'>Deal Type</Typography>
              </td>
              <td className='plb-1'>
                <Typography>Percentage</Typography>
              </td>
            </tr>
            <tr>
              <td className='font-medium plb-1'>
                <Typography className='font-medium'>Amount</Typography>
              </td>
              <td className='plb-1'>
                <Typography>25% </Typography>
              </td>
            </tr>
            <tr>
              <td className='font-medium plb-1'>
                <Typography className='font-medium'>Deal Code</Typography>
              </td>
              <td className='plb-1'>
                <Chip variant='tonal' label='25PEROFF' color='warning' />
              </td>
            </tr>
            <tr>
              <td className='font-medium plb-1'>
                <Typography className='font-medium'>Deal Title</Typography>
              </td>
              <td className='plb-1'>
                <Typography>Black friday sale, 25% OFF </Typography>
              </td>
            </tr>
            <tr>
              <td className='font-medium plb-1'>
                <Typography className='font-medium'>Deal Duration</Typography>
              </td>
              <td className='plb-1'>
                <Typography>2021-07-14 to 2021-07-30 </Typography>
              </td>
            </tr>
          </tbody>
        </table>
        <FormControlLabel control={<Switch />} label='I have confirmed the deal details.' />
      </Grid>
      <Grid size={{ xs: 12, lg: 6, xl: 5 }}>
        <div className='flex justify-center items-end is-full bs-full border rounded'>
          <img alt='review-illustration' src='/images/illustrations/characters/2.png' height={305} />
        </div>
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

export default StepReview
