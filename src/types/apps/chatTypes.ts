// Type Imports
import type { ThemeColor } from '@core/types'

export type StatusType = 'busy' | 'away' | 'online' | 'offline'

export type StatusObjType = Record<StatusType, ThemeColor>

export type ProfileUserType = {
  id: number
  role: string
  about: string
  avatar: string
  fullName: string
  status: StatusType
  settings: {
    isNotificationsOn: boolean
    isTwoStepAuthVerificationEnabled: boolean
  }
}

export type ContactType = {
  id: number
  fullName: string
  role: string
  about: string
  avatar?: string
  avatarColor?: ThemeColor
  status: StatusType
}

export type UserChatType = {
  message: string
  time: string | Date
  senderId: number
  msgStatus?: Record<'isSent' | 'isDelivered' | 'isSeen', boolean>
}

export type ChatType = {
  id: number
  userId: number
  unseenMsgs: number
  chat: UserChatType[]
}

export type ChatDataType = {
  profileUser: ProfileUserType
  contacts: ContactType[]
  chats: ChatType[]
  activeUser?: ContactType
}
