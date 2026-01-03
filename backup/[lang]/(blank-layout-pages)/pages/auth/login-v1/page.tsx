// Component Imports
import LoginV1 from '@views/pages/auth/LoginV1'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const LoginV1Page = async () => {
  // Vars
  const mode = await getServerMode()

  return <LoginV1 mode={mode} />
}

export default LoginV1Page
