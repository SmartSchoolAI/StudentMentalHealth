// Component Imports
import ForgotPasswordV2 from '@views/pages/auth/ForgotPasswordV2'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const ForgotPasswordV2Page = async () => {
  // Vars
  const mode = await getServerMode()

  return <ForgotPasswordV2 mode={mode} />
}

export default ForgotPasswordV2Page
