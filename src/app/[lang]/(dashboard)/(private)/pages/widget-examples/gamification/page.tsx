// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import Award from '@views/pages/widget-examples/gamification/Award'
import Congratulations from '@views/pages/widget-examples/gamification/Congratulations'
import WelcomeBack from '@views/pages/widget-examples/gamification/WelcomeBack'
import UpgradeAccount from '@views/pages/widget-examples/gamification/UpgradeAccount'

const Gamification = () => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Award />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }} className='self-end'>
        <Congratulations />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }} className='self-end'>
        <WelcomeBack />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <UpgradeAccount />
      </Grid>
    </Grid>
  )
}

export default Gamification
