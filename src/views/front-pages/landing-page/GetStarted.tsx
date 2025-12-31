// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

const GetStarted = () => {
  return (
    <section className='relative'>
      <img
        src='/images/front-pages/landing-page/get-started-bg.png'
        alt='background-image'
        className='absolute is-full flex -z-1 pointer-events-none bs-full block-end-0'
      />
      <div
        className={classnames(
          'flex items-center flex-wrap justify-center lg:justify-between gap-y-4 gap-x-28',
          frontCommonStyles.layoutSpacing
        )}
      >
        <div className='flex flex-col items-center lg:items-start gap-y-8 pbs-9 lg:plb-9 z-[1]'>
          <div className='flex flex-col gap-1 max-lg:items-center'>
            <Typography color='primary.main' className='font-bold text-[32px] max-sm:text-center'>
              Ready to Get Started?
            </Typography>
            <Typography className='font-medium max-sm:text-center'>
              Start your project with a 14-day free trial
            </Typography>
          </div>
          <Button
            component={Link}
            href='/front-pages/payment'
            variant='contained'
            endIcon={<DirectionalIcon ltrIconClass='ri-arrow-right-line' rtlIconClass='ri-arrow-left-line' />}
          >
            Get Started
          </Button>
        </div>
        <div className='flex pbs-4 lg:pbs-[60px] md:pie-4 z-[1]'>
          <img
            src='/images/front-pages/landing-page/crm-dashboard.png'
            alt='dashboard-image'
            className='max-is-[600px] is-full'
          />
        </div>
      </div>
    </section>
  )
}

export default GetStarted
