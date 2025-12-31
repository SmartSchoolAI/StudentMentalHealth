import path from 'path'

import fs from 'fs-extra'
import { globbySync } from 'globby'

const removeUnwantedCodeAndComments = async () => {
  const baseDirs = ['src/app', 'src/components', 'src/layouts', 'src/views']

  baseDirs.forEach(baseDir => {
    const filePattern = path.join(baseDir, '**/*.{tsx,ts}').replace(/\\/g, '/')
    const files = globbySync(filePattern)

    files.forEach(file => {
      let content = fs.readFileSync(file, 'utf8')

      // Remove single-line comments with optional whitespace characters and a blank line after
      content = content.replace(/\/\/.* Imports\n{2,}/g, '')

      fs.writeFileSync(file, content)
    })
  })
}

export default removeUnwantedCodeAndComments
