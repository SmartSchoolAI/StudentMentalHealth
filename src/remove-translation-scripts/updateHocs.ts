import fs from 'fs-extra'
import { consola } from 'consola'

// Update the auth guard file
export const updateAuthGuard = async () => {
  consola.start('Updating AuthGard file...')

  // Using fs.promises API for reading and writing files asynchronously
  let AuthGuardFileContent = await fs.promises.readFile('src/hocs/AuthGuard.tsx', 'utf8')

  // Modify the file content as needed
  AuthGuardFileContent = AuthGuardFileContent.replace(/(ChildrenType) & { locale: Locale }/, '$1')
    .replace(/\{ children, locale \}/, '{ children }')
    .replace(/lang={locale}/, '')

  // Write the modified content back to the file
  await fs.promises.writeFile('src/hocs/AuthGuard.tsx', AuthGuardFileContent)
  consola.success('Auth Guard file updated successfully\n')
}

// Update the guest only route file
export const updateGuestOnlyRoutes = async () => {
  consola.start('Updating AuthGard file...')

  // Using fs.promises API for reading and writing files asynchronously
  let GuestOnlyRouteFileContent = await fs.promises.readFile('src/hocs/GuestOnlyRoute.tsx', 'utf8')

  // Modify the file content as needed
  GuestOnlyRouteFileContent = GuestOnlyRouteFileContent.replace(/(ChildrenType) & { lang: Locale }/, '$1')
    .replace(/\{ children, lang \}/, '{ children }')
    .replace(/lang={locale}/, '')

  // Write the modified content back to the file
  await fs.promises.writeFile('src/hocs/GuestOnlyRoute.tsx', GuestOnlyRouteFileContent)
  consola.success('Guest Guard file updated successfully\n')
}
