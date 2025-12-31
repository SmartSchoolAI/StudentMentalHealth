// Component Imports
import VerifyEmailV1 from '@views/pages/auth/VerifyEmailV1'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const VerifyEmailV1Page = async () => {
  // Vars
  const mode = await getServerMode()

  return <VerifyEmailV1 mode={mode} />
}

export default VerifyEmailV1Page
