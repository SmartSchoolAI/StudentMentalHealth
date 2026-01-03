// Component Imports
import Permissions from '@views/apps/permissions'

// Data Imports
import { getPermissionsData } from '@/app/server/actions'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/permissions` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getPermissionsData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/permissions`)

  if (!res.ok) {
    throw new Error('Failed to fetch permissions data')
  }

  return res.json()
} */

const PermissionsApp = async () => {
  // Vars
  const data = await getPermissionsData()

  return <Permissions permissionsData={data} />
}

export default PermissionsApp
