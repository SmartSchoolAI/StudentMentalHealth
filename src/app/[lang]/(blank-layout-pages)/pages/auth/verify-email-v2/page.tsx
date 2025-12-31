// Component Imports
import VerifyEmailV2 from '@views/pages/auth/VerifyEmailV2'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const VerifyEmailV2Page = async () => {
  // Vars
  const mode = await getServerMode()

  return <VerifyEmailV2 mode={mode} />
}

export default VerifyEmailV2Page
