// Component Imports
import TwoStepsV1 from '@views/pages/auth/TwoStepsV1'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const TwoStepsV1Page = async () => {
  // Vars
  const mode = await getServerMode()

  return <TwoStepsV1 mode={mode} />
}

export default TwoStepsV1Page
