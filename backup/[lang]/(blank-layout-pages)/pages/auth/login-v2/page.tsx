// Component Imports
import LoginV2 from '@views/pages/auth/LoginV2'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const LoginV2Page = async () => {
  // Vars
  const mode = await getServerMode()

  return <LoginV2 mode={mode} />
}

export default LoginV2Page
