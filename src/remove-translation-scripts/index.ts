import { promisify } from 'util'
import { exec as execCallback, execSync } from 'child_process'

import { consola } from 'consola'

import { updatePackages } from './updatePackages'
import { findAndReplaceInFiles } from './findAndReplaceInFiles'
import {
  updateLayoutFile,
  updateDashboardLayoutFile,
  updateGuestLayoutFile,
  updateBlankLayoutFile,
  updateFrontLayoutFile
} from './updateLayoutFiles'
import { removeFilesAndFolders } from './removeFilesAndFolders'
import removeUnwantedCode from './removeUnwantedCode'
import { reverseEslintConfig, updateEslintConfig } from './removeUnusedImports'
import { updateMenuFiles } from './updateMenuFiles'
import { removeLangaugeDropdown } from './removeLangaugeDropdown'
import { modifyGenerateMenuFile } from './modifyGenerateMenuFile'
import { updateAuthGuard, updateGuestOnlyRoutes } from './updateHocs'

const exec = promisify(execCallback)

async function main() {
  await updatePackages()

  consola.start('Moving files from src/app/[lang] to src/app...')
  execSync('cp -r src/app/\\[lang\\]/* src/app')
  execSync('rm -rf src/app/\\[lang\\]')
  consola.success('Moved files from src/app/[lang] to src/app')

  await removeFilesAndFolders()

  await updateAuthGuard()

  await updateGuestOnlyRoutes()

  await findAndReplaceInFiles()

  await updateMenuFiles()

  await removeLangaugeDropdown()

  await updateLayoutFile()

  await updateDashboardLayoutFile()

  await updateGuestLayoutFile()

  await updateBlankLayoutFile()

  await updateFrontLayoutFile()

  await modifyGenerateMenuFile()

  await updateEslintConfig()

  // ────────────── Lint & Format Files ──────────────

  // Run eslint command to fix all the linting error and give space after imports
  consola.start('Run eslint command to fix all the linting error and give space after imports')

  await exec('npx eslint --fix "src/**/*.{js,jsx,ts,tsx}"')

  consola.success('Linted all the files successfully!\n')

  // Run pnpm format command to format all the files using prettier
  consola.start('Run pnpm format command to format all the files using prettier')

  await exec('pnpm run format')
  await exec('npx eslint --fix "src/**/*.{js,jsx,ts,tsx}"')

  consola.success('Formatted all the files successfully!\n')

  // ────────────── Remove Unwanted Code & Comments ──────────────

  await removeUnwantedCode()

  await reverseEslintConfig()
}

main()
