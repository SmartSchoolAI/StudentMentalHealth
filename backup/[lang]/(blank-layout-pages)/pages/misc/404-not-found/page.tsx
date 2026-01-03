// Component Imports
import NotFound from '@views/NotFound'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const Error = async () => {
  // Vars
  const mode = await getServerMode()

  return <NotFound mode={mode} />
}

export default Error
