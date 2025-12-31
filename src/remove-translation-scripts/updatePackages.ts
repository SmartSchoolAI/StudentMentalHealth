import { promisify } from 'util'
import { exec as execCallback } from 'child_process'

import fs from 'fs-extra'
import { consola } from 'consola'

const exec = promisify(execCallback)

export const updatePackages = async () => {
  consola.start('Removing packages related to i18n...')

  // Detect package manager
  const packageManager = fs.existsSync('yarn.lock') ? 'yarn' : fs.existsSync('pnpm-lock.yaml') ? 'pnpm' : 'npm'

  // Remove packages
  let command =
    packageManager === 'yarn'
      ? `${packageManager} remove @formatjs/intl-localematcher @types/negotiator negotiator`
      : `${packageManager} uninstall @formatjs/intl-localematcher @types/negotiator negotiator`

  await exec(command)
  consola.success('Removed packages related to i18n successfully\n')

  // Add new package
  command =
    packageManager === 'npm'
      ? `${packageManager} install --save-dev eslint-plugin-unused-imports`
      : `${packageManager} add -D eslint-plugin-unused-imports`
  await exec(command)
  consola.success('eslint-plugin-unused-imports installed successfully\n')
}
