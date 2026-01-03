// Component Imports
import EmailWrapper from '@views/apps/email'

const EmailLabelPage = async (props: { params: Promise<{ label: string }> }) => {
  const params = await props.params

  return <EmailWrapper label={params.label} />
}

export default EmailLabelPage
