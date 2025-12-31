// React Imports
import type { Dispatch, MouseEvent, ReactNode, SetStateAction } from 'react'

// MUI Imports
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Backdrop from '@mui/material/Backdrop'

// Third-party Imports
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { AppDispatch } from '@/redux-store'
import type { Email, EmailState } from '@/types/apps/emailTypes'

// Slice Imports
import { getCurrentEmail, moveEmailsToFolder } from '@/redux-store/slices/email'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Styles Imports
import styles from './styles.module.css'

// Data Imports
import { labelColors } from './SidebarLeft'

type Props = {
  isInitialMount: boolean
  isBelowSmScreen: boolean
  isBelowLgScreen: boolean
  reload: boolean
  areFilteredEmailsNone: boolean
  searchTerm: string
  selectedEmails: Set<number>
  dispatch: AppDispatch
  store: EmailState
  emails: Email[]
  folder?: string
  setSelectedEmails: Dispatch<SetStateAction<Set<number>>> // This type has been written to solve type error in this file
  setDrawerOpen: (value: boolean) => void
  handleToggleStarEmail: (e: MouseEvent, id: number) => void
  handleSingleEmailDelete: (e: MouseEvent, id: number) => void
  handleToggleIsReadStatus: (e: MouseEvent, id: number) => void
}

const ScrollWrapper = ({ children, isBelowLgScreen }: { children: ReactNode; isBelowLgScreen: boolean }) => {
  if (isBelowLgScreen) {
    return <div className='bs-full overflow-y-auto overflow-x-hidden relative'>{children}</div>
  } else {
    return <PerfectScrollbar options={{ wheelPropagation: false }}>{children}</PerfectScrollbar>
  }
}

const MailContentList = (props: Props) => {
  // Props
  const {
    isInitialMount,
    isBelowSmScreen,
    isBelowLgScreen,
    reload,
    areFilteredEmailsNone,
    searchTerm,
    selectedEmails,
    dispatch,
    store,
    emails,
    folder,
    setSelectedEmails,
    setDrawerOpen,
    handleToggleStarEmail,
    handleSingleEmailDelete,
    handleToggleIsReadStatus
  } = props

  // Toggle single selection of email
  const toggleEmailSelected = (emailId: number) => {
    setSelectedEmails(prevSelectedEmails => {
      const newSelectedEmails = new Set(prevSelectedEmails)

      if (newSelectedEmails.has(emailId)) {
        newSelectedEmails.delete(emailId)
      } else {
        newSelectedEmails.add(emailId)
      }

      return newSelectedEmails
    })
  }

  // Move single email to spam
  const handleMoveToSpam = (e: MouseEvent, id: number) => {
    e.stopPropagation()
    dispatch(moveEmailsToFolder({ emailIds: [id], folder: 'spam' }))
  }

  // Handle email click
  const handleEmailClick = (id: number) => {
    setDrawerOpen(true)

    if (store.currentEmailId !== id || emails.find(email => email.id === id)?.isRead === false) {
      dispatch(getCurrentEmail(id))
    }
  }

  return isInitialMount ? (
    <div className='flex items-center justify-center gap-2 grow is-full'>
      <CircularProgress />
      <Typography>Loading...</Typography>
    </div>
  ) : areFilteredEmailsNone ? (
    <div className='relative flex justify-center gap-2 grow is-full'>
      <Typography color='text.primary' className='m-3'>
        No emails found!
      </Typography>
      {reload && (
        <Backdrop open={reload} className='absolute text-white z-10 bg-textDisabled'>
          <CircularProgress color='inherit' />
        </Backdrop>
      )}
    </div>
  ) : (
    <div className='relative overflow-hidden grow is-full'>
      <ScrollWrapper isBelowLgScreen={isBelowLgScreen}>
        <div className='flex flex-col'>
          {emails
            .filter(
              email =>
                email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                email.from.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(email => (
              <div
                key={email.id}
                className={classnames('p-4 cursor-pointer', styles.emailList, { 'bg-actionHover': email.isRead })}
                onClick={() => handleEmailClick(email.id)}
              >
                <div className='flex items-center justify-between gap-2'>
                  <div className='flex items-center gap-2 overflow-hidden'>
                    <Checkbox
                      checked={selectedEmails.has(email.id)}
                      onChange={() => toggleEmailSelected(email.id)}
                      onClick={e => e.stopPropagation()}
                    />
                    <IconButton onClick={e => handleToggleStarEmail(e, email.id)}>
                      <i
                        className={classnames('ri-star-line', email.isStarred ? 'text-warning' : 'text-textSecondary')}
                      />
                    </IconButton>
                    <CustomAvatar src={email.from.avatar} alt={email.from.name} size={32} />
                    <div className='flex gap-4 justify-between items-center overflow-hidden'>
                      <Typography color='text.primary' className='font-medium whitespace-nowrap'>
                        {email.from.name}
                      </Typography>
                      <Typography variant='body2' noWrap>
                        {email.subject}
                      </Typography>
                    </div>
                  </div>
                  {!isBelowSmScreen && (
                    <div
                      className={classnames('flex items-center gap-2', styles.emailInfo, {
                        [styles.show]: isBelowLgScreen
                      })}
                    >
                      <div className='flex items-center gap-2'>
                        {email.labels.map(label => (
                          <i
                            key={label}
                            className={classnames('ri-circle-fill text-[10px]', labelColors[label].colorClass)}
                          />
                        ))}
                      </div>
                      <Typography variant='body2' color='text.disabled' className='whitespace-nowrap'>
                        {new Intl.DateTimeFormat('en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true
                        }).format(new Date(email.time))}
                      </Typography>
                    </div>
                  )}
                  {!isBelowLgScreen && (
                    <div className={styles.emailActions}>
                      <Tooltip title={folder === 'trash' ? 'Delete' : 'Move to trash'} placement='top'>
                        <IconButton onClick={e => handleSingleEmailDelete(e, email.id)}>
                          <i className='ri-delete-bin-7-line text-textSecondary' />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title={email.isRead ? 'Mark as unread' : 'Mark as read'} placement='top'>
                        <IconButton
                          onClick={e => {
                            handleToggleIsReadStatus(e, email.id)
                            setSelectedEmails(new Set())
                          }}
                        >
                          <i
                            className={classnames(
                              'text-textSecondary',
                              email.isRead ? 'ri-mail-unread-line' : 'ri-mail-open-line'
                            )}
                          />
                        </IconButton>
                      </Tooltip>
                      {(folder === 'inbox' || folder === 'trash') && (
                        <Tooltip title='Move to spam' placement='top'>
                          <IconButton onClick={e => handleMoveToSpam(e, email.id)}>
                            <i className='ri-error-warning-line text-textSecondary' />
                          </IconButton>
                        </Tooltip>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </ScrollWrapper>
      {reload && (
        <Backdrop open={reload} className='absolute text-white z-10 bg-textDisabled'>
          <CircularProgress color='inherit' />
        </Backdrop>
      )}
    </div>
  )
}

export default MailContentList
