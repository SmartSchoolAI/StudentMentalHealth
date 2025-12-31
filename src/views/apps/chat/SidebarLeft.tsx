// React Imports
import { useState } from 'react'
import type { ReactNode, RefObject } from 'react'

// MUI Imports
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Autocomplete from '@mui/material/Autocomplete'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

// Third-party Imports
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { ThemeColor } from '@core/types'
import type { ChatDataType, StatusObjType } from '@/types/apps/chatTypes'
import type { AppDispatch } from '@/redux-store'

// Slice Imports
import { addNewChat } from '@/redux-store/slices/chat'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import UserProfileLeft from './UserProfileLeft'
import AvatarWithBadge from './AvatarWithBadge'

// Util Imports
import { getInitials } from '@/utils/getInitials'
import { formatDateToMonthShort } from './utils'

export const statusObj: StatusObjType = {
  busy: 'error',
  away: 'warning',
  online: 'success',
  offline: 'secondary'
}

type Props = {
  chatStore: ChatDataType
  getActiveUserData: (id: number) => void
  dispatch: AppDispatch
  backdropOpen: boolean
  setBackdropOpen: (value: boolean) => void
  sidebarOpen: boolean
  setSidebarOpen: (value: boolean) => void
  isBelowLgScreen: boolean
  isBelowMdScreen: boolean
  isBelowSmScreen: boolean
  messageInputRef: RefObject<HTMLDivElement>
}

type RenderChatType = {
  chatStore: ChatDataType
  getActiveUserData: (id: number) => void
  setSidebarOpen: (value: boolean) => void
  backdropOpen: boolean
  setBackdropOpen: (value: boolean) => void
  isBelowMdScreen: boolean
}

// Render chat list
const renderChat = (props: RenderChatType) => {
  // Props
  const { chatStore, getActiveUserData, setSidebarOpen, backdropOpen, setBackdropOpen, isBelowMdScreen } = props

  return chatStore.chats.map(chat => {
    const contact = chatStore.contacts.find(contact => contact.id === chat.userId) || chatStore.contacts[0]
    const isChatActive = chatStore.activeUser?.id === contact.id

    return (
      <li
        key={chat.id}
        className={classnames('flex items-start gap-4 pli-3 plb-2 cursor-pointer rounded mbe-1', {
          'bg-primary shadow-xs': isChatActive,
          'text-[var(--mui-palette-primary-contrastText)]': isChatActive
        })}
        onClick={() => {
          getActiveUserData(chat.userId)
          isBelowMdScreen && setSidebarOpen(false)
          isBelowMdScreen && backdropOpen && setBackdropOpen(false)
        }}
      >
        <AvatarWithBadge
          src={contact.avatar}
          isChatActive={isChatActive}
          alt={contact.fullName}
          badgeColor={statusObj[contact.status]}
          color={contact.avatarColor}
        />
        <div className='min-is-0 flex-auto'>
          <Typography color='inherit'>{contact?.fullName}</Typography>
          {chat.chat.length ? (
            <Typography variant='body2' color={isChatActive ? 'inherit' : 'text.secondary'} className='truncate'>
              {chat.chat[chat.chat.length - 1].message}
            </Typography>
          ) : (
            <Typography variant='body2' color={isChatActive ? 'inherit' : 'text.secondary'} className='truncate'>
              {contact.role}
            </Typography>
          )}
        </div>
        <div className='flex flex-col items-end justify-start'>
          <Typography
            variant='body2'
            color='inherit'
            className={classnames('truncate', {
              'text-textDisabled': !isChatActive
            })}
          >
            {chat.chat.length ? formatDateToMonthShort(chat.chat[chat.chat.length - 1].time) : null}
          </Typography>
          {chat.unseenMsgs > 0 ? <Chip label={chat.unseenMsgs} color='error' size='small' /> : null}
        </div>
      </li>
    )
  })
}

// Scroll wrapper for chat list
const ScrollWrapper = ({ children, isBelowLgScreen }: { children: ReactNode; isBelowLgScreen: boolean }) => {
  if (isBelowLgScreen) {
    return <div className='bs-full overflow-y-auto overflow-x-hidden'>{children}</div>
  } else {
    return <PerfectScrollbar options={{ wheelPropagation: false }}>{children}</PerfectScrollbar>
  }
}

const SidebarLeft = (props: Props) => {
  // Props
  const {
    chatStore,
    getActiveUserData,
    dispatch,
    backdropOpen,
    setBackdropOpen,
    sidebarOpen,
    setSidebarOpen,
    isBelowLgScreen,
    isBelowMdScreen,
    isBelowSmScreen,
    messageInputRef
  } = props

  // States
  const [userSidebar, setUserSidebar] = useState(false)
  const [searchValue, setSearchValue] = useState<string | null>()

  const handleChange = (event: any, newValue: string | null) => {
    setSearchValue(newValue)
    dispatch(addNewChat({ id: chatStore.contacts.find(contact => contact.fullName === newValue)?.id }))
    getActiveUserData(
      chatStore.contacts.find(contact => contact.fullName === newValue)?.id || (chatStore.activeUser?.id as number)
    )
    isBelowMdScreen && setSidebarOpen(false)
    setBackdropOpen(false)
    setSearchValue(null)
    messageInputRef.current?.focus()
  }

  return (
    <>
      <Drawer
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        className='bs-full'
        variant={!isBelowMdScreen ? 'permanent' : 'persistent'}
        ModalProps={{
          disablePortal: true,
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          zIndex: isBelowMdScreen && sidebarOpen ? 11 : 10,
          position: !isBelowMdScreen ? 'static' : 'absolute',
          ...(isBelowSmScreen && sidebarOpen && { width: '100%' }),
          '& .MuiDrawer-paper': {
            overflow: 'hidden',
            boxShadow: 'none',
            width: isBelowSmScreen ? '100%' : '370px',
            position: !isBelowMdScreen ? 'static' : 'absolute'
          }
        }}
      >
        <div className='flex plb-[18px] pli-5 gap-4 border-be'>
          <AvatarWithBadge
            alt={chatStore.profileUser.fullName}
            src={chatStore.profileUser.avatar}
            badgeColor={statusObj[chatStore.profileUser.status]}
            onClick={() => {
              setUserSidebar(true)
            }}
          />
          <div className='flex is-full items-center flex-auto sm:gap-x-3'>
            <Autocomplete
              fullWidth
              size='small'
              id='select-contact'
              options={chatStore.contacts.map(contact => contact.fullName) || []}
              value={searchValue || null}
              onChange={handleChange}
              renderInput={params => (
                <TextField
                  {...params}
                  variant='outlined'
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '999px !important' } }}
                  placeholder='Search Contacts'
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position='end'>
                          <i className='ri-search-line text-xl' />
                        </InputAdornment>
                      )
                    }
                  }}
                />
              )}
              renderOption={(props, option) => {
                const contact = chatStore.contacts.find(contact => contact.fullName === option)

                return (
                  <li
                    {...props}
                    key={option.toLowerCase().replace(/\s+/g, '-')}
                    className={classnames('gap-3 max-sm:pli-3', props.className)}
                  >
                    {contact ? (
                      contact.avatar ? (
                        <Avatar
                          alt={contact.fullName}
                          src={contact.avatar}
                          key={option.toLowerCase().replace(/\s+/g, '-')}
                        />
                      ) : (
                        <CustomAvatar
                          color={contact.avatarColor as ThemeColor}
                          skin='light'
                          key={option.toLowerCase().replace(/\s+/g, '-')}
                        >
                          {getInitials(contact.fullName)}
                        </CustomAvatar>
                      )
                    ) : null}
                    {option}
                  </li>
                )
              }}
            />
            {isBelowMdScreen ? (
              <IconButton
                className='p-0 mis-2'
                onClick={() => {
                  setSidebarOpen(false)
                  setBackdropOpen(false)
                }}
              >
                <i className='ri-close-line' />
              </IconButton>
            ) : null}
          </div>
        </div>
        <ScrollWrapper isBelowLgScreen={isBelowLgScreen}>
          <ul className='p-3 pbs-4'>
            {renderChat({
              chatStore,
              getActiveUserData,
              backdropOpen,
              setSidebarOpen,
              isBelowMdScreen,
              setBackdropOpen
            })}
          </ul>
        </ScrollWrapper>
      </Drawer>

      <UserProfileLeft
        userSidebar={userSidebar}
        setUserSidebar={setUserSidebar}
        profileUserData={chatStore.profileUser}
        dispatch={dispatch}
        isBelowLgScreen={isBelowLgScreen}
        isBelowSmScreen={isBelowSmScreen}
      />
    </>
  )
}

export default SidebarLeft
