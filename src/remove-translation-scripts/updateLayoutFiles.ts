import fs from 'fs-extra'
import { consola } from 'consola'

// Update the main layout file
export const updateLayoutFile = async () => {
  consola.start('Updating layout file...')

  // Using fs.promises API for reading and writing files asynchronously
  let layoutFileContent = await fs.promises.readFile('src/app/layout.tsx', 'utf8')

  // Modify the file content as needed
  layoutFileContent = layoutFileContent
    .replace(/lang={lang}/g, "lang='en'")
    .replace(/const headersList.*/, '')
    .replace(/<TranslationWrapper[^>]*>([\s\S]*?)<\/TranslationWrapper>/, '$1')
    .replace(/&\s*\{[^}]*params:\s*Promise<[^}]*lang:\s*string[^}]*\}>\s}/, '')
    .replace(/const params = await props.params/g, '')

  // Write the modified content back to the file
  await fs.promises.writeFile('src/app/layout.tsx', layoutFileContent)
  consola.success('Layout file updated successfully\n')

  consola.start('Updating notFound file...')

  let notFoundFileContent = await fs.promises.readFile('src/app/[...not-found]/page.tsx', 'utf8')

  notFoundFileContent = notFoundFileContent.replace(/const params = await props.params/g, '')

  await fs.promises.writeFile('src/app/[...not-found]/page.tsx', notFoundFileContent)
  consola.success('notFound file updated successfully\n')
}

// Update Private routes Layout file
export const updateDashboardLayoutFile = async () => {
  consola.start('Updating dashboard layout file...')

  const filePath = 'src/app/(dashboard)/(private)/layout.tsx'

  let content = await fs.promises.readFile(filePath, 'utf8')

  // Add disableDirection to <Customizer> if not already present
  content = content
    .replace(/<Customizer((?!disableDirection)[^>]*?)\/?>/g, `<Customizer$1 disableDirection />`)
    .replace(/const dictionary = await getDictionary\(lang\)\n?/, '')
    .replace(/(AuthGuard\s*[^>]*?)locale={lang}(.*?>)/, '$1$2')
    .replace(/&\s*\{[^}]*params:\s*Promise<[^}]*lang:\s*string[^}]*\}>\s}/, '')
    .replace(/const params = await props.params/g, '')

  await fs.promises.writeFile(filePath, content)
  consola.success('Added disabledDirection prop in customizer component\n')
}

// Update Guest routes Layout file
export const updateGuestLayoutFile = async () => {
  consola.start('Updating guest layout file...')

  const filePath = 'src/app/(blank-layout-pages)/(guest-only)/layout.tsx'

  let content = await fs.promises.readFile(filePath, 'utf8')

  content = content
    .replace(/lang={lang}/g, '')
    .replace(/&\s*\{[^}]*params:\s*Promise<[^}]*lang:\s*string[^}]*\}>\s}/, '')
    .replace(/const params = await props.params/g, '')

  await fs.promises.writeFile(filePath, content)
}

export const updateBlankLayoutFile = async () => {
  consola.start('Updating blank layout pages file...')

  const filePath = 'src/app/(blank-layout-pages)/layout.tsx'

  let content = await fs.promises.readFile(filePath, 'utf8')

  content = content.replace(/const params = await props.params/g, '')

  await fs.promises.writeFile(filePath, content)
}

export const updateFrontLayoutFile = async () => {
  consola.start('Updating front layout file...')

  const filePath = 'src/app/front-pages/layout.tsx'

  let content = await fs.promises.readFile(filePath, 'utf8')

  content = content.replace(/<((html|body).*?)>\s*<InitColorSchemeScript.*?\/>(.*?)<\/body>\s*<\/html>/gs, '$3')

  await fs.promises.writeFile(filePath, content)

  consola.success('Front layout file updated successfully\n')
}
