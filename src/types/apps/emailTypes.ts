export type Attachment = {
  fileName: string
  thumbnail: string
  url: string
  size: string
}

export type Email = {
  id: number
  from: {
    email: string
    name: string
    avatar: string
  }
  to: { name: string; email: string }[]
  subject: string
  cc: string[]
  bcc: string[]
  message: string
  attachments: Attachment[]
  isStarred: boolean
  labels: string[]
  time: Date | string
  replies: Email[]
  folder: string
  isRead: boolean
}

export type EmailType = {
  emails: Email[]
  currentEmailId?: number
}

export type EmailState = EmailType & {
  filteredEmails: Email[]
}
