// Component Imports
import EmailWrapper from '@views/apps/email'

const EmailFolderPage = async (props: { params: Promise<{ folder: string }> }) => {
  const params = await props.params

  return <EmailWrapper folder={params.folder} />
}

export default EmailFolderPage
