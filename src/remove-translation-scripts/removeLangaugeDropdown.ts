import { promisify } from 'util'
import { exec as execCallback } from 'child_process'

import fs from 'fs-extra'

const exec = promisify(execCallback)

export const removeLangaugeDropdown = async () => {
  // Path to the LanguageDropdown.tsx file
  const fileToDelete = 'src/components/layout/shared/LanguageDropdown.tsx'
  const importPatternToDelete = new RegExp(`import .* from '.*LanguageDropdown';?`, 'g')

  await exec(`rm -rf ${fileToDelete}`)

  const filesToRemoveFrom = [
    'src/components/layout/vertical/NavbarContent.tsx',
    'src/components/layout/horizontal/NavbarContent.tsx'
  ]

  filesToRemoveFrom.forEach(async file => {
    let content = await fs.readFile(file, 'utf8')

    // Replace patterns in the file content
    content = content.replace(importPatternToDelete, '')

    // Use a RegExp object for the component removal, ensuring global replacement
    const languageDropdownPattern = new RegExp('<LanguageDropdown\\s*/>\\s*', 'g')

    content = content.replace(languageDropdownPattern, '')

    // Write the modified content back to the file
    await fs.writeFile(file, content, 'utf8')
    console.log(`Updated file: ${file}`)
  })
}
