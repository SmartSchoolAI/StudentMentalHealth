// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { AppDispatch } from '@/redux-store'
import type { Email } from '@/types/apps/emailTypes'

// Slice Imports
import { deleteTrashEmails, moveEmailsToFolder, toggleLabel, toggleReadEmails } from '@/redux-store/slices/email'

// Component Imports
import OptionMenu from '@core/components/option-menu'

// Data Imports
import { labelColors } from './SidebarLeft'

type Props = {
  areFilteredEmailsNone: boolean
  selectedEmails: Set<number>
  emails: Email[]
  folder?: string
  label?: string
  uniqueLabels: string[]
  dispatch: AppDispatch
  setReload: (value: boolean) => void
  setSelectedEmails: (value: Set<number>) => void
}

const MailContentActions = (props: Props) => {
  // Props
  const {
    areFilteredEmailsNone,
    selectedEmails,
    setSelectedEmails,
    emails,
    folder,
    label,
    uniqueLabels,
    setReload,
    dispatch
  } = props

  // Vars
  const areAllSelected = selectedEmails.size > 0 && selectedEmails.size === emails.length
  const isIndeterminate = selectedEmails.size > 0 && selectedEmails.size < emails.length

  // Handle reload
  const handleReload = () => {
    setReload(true)

    setTimeout(() => {
      setReload(false)
    }, 2000)
  }

  // Toggle all emails' selection
  const handleSelectAllCheckboxes = () => {
    if (areAllSelected) {
      setSelectedEmails(new Set())
    } else {
      const visibleEmailIds = new Set(
        emails
          .filter(email => {
            if (folder === 'starred' && email.folder !== 'trash') {
              return email.isStarred
            } else if (label && uniqueLabels.includes(label) && email.folder !== 'trash') {
              return email.labels.includes(label)
            } else {
              return email.folder === folder
            }
          })
          .map(email => email.id)
      )

      setSelectedEmails(visibleEmailIds)
    }
  }

  // Delete selected emails
  const handleEmailDelete = () => {
    const emailIds = emails.filter(email => selectedEmails.has(email.id)).map(email => email.id)

    if (folder === 'trash') {
      dispatch(deleteTrashEmails({ emailIds }))
      setSelectedEmails(new Set())
    } else {
      dispatch(moveEmailsToFolder({ emailIds, folder: 'trash' }))
      setSelectedEmails(new Set())
    }
  }

  // Toggle all selected emails' read status
  const handleToggleAllReadEmails = () => {
    const emailIds = emails.filter(email => selectedEmails.has(email.id)).map(email => email.id)

    dispatch(toggleReadEmails({ emailIds }))
    setSelectedEmails(new Set())
  }

  // Move all selected emails to spam
  const handleMoveAllToSpam = () => {
    const emailIds = emails.filter(email => selectedEmails.has(email.id)).map(email => email.id)

    dispatch(moveEmailsToFolder({ emailIds, folder: 'spam' }))
    setSelectedEmails(new Set())
  }

  // Move all selected emails to inbox
  const handleMoveAllToInbox = () => {
    const emailIds = emails.filter(email => selectedEmails.has(email.id)).map(email => email.id)

    dispatch(moveEmailsToFolder({ emailIds, folder: 'inbox' }))
    setSelectedEmails(new Set())
  }

  // Handle click on label option from menu list
  const handleLabelClick = (label: string) => {
    const emailIds = emails.filter(email => selectedEmails.has(email.id)).map(email => email.id)

    dispatch(toggleLabel({ emailIds, label }))
    setSelectedEmails(new Set())
  }

  return (
    <div className='flex items-center justify-between gap-4 max-sm:gap-0.5 is-full pli-4 plb-2 border-be'>
      <div className='flex items-center gap-1 max-sm:gap-0.5'>
        <Checkbox
          indeterminate={isIndeterminate}
          checked={areAllSelected}
          onChange={handleSelectAllCheckboxes}
          disabled={areFilteredEmailsNone}
        />
        {(isIndeterminate || areAllSelected) && (
          <>
            <Tooltip title={folder === 'trash' ? 'Delete' : 'Move to trash'} placement='top'>
              <IconButton onClick={handleEmailDelete}>
                <i className='ri-delete-bin-7-line text-textSecondary' />
              </IconButton>
            </Tooltip>
            <Tooltip
              title={
                selectedEmails.size > 0 &&
                emails.filter(email => selectedEmails.has(email.id)).every(email => email.isRead)
                  ? 'Mark as unread'
                  : 'Mark as read'
              }
              placement='top'
            >
              <IconButton onClick={handleToggleAllReadEmails}>
                <i
                  className={classnames(
                    'text-textSecondary',
                    selectedEmails.size > 0 &&
                      emails.filter(email => selectedEmails.has(email.id)).every(email => email.isRead)
                      ? 'ri-mail-unread-line'
                      : 'ri-mail-open-line'
                  )}
                />
              </IconButton>
            </Tooltip>
            {folder === 'inbox' && (
              <Tooltip title='Move to spam' placement='top'>
                <IconButton onClick={handleMoveAllToSpam}>
                  <i className='ri-error-warning-line text-textSecondary' />
                </IconButton>
              </Tooltip>
            )}
            {folder === 'spam' && (
              <Tooltip title='Move to inbox' placement='top'>
                <IconButton onClick={handleMoveAllToInbox}>
                  <i className='ri-inbox-line text-textSecondary' />
                </IconButton>
              </Tooltip>
            )}
            {folder === 'trash' && (
              <OptionMenu
                tooltipProps={{ title: 'Move to folder', placement: 'top' }}
                icon={<i className='ri-folder-3-line text-textSecondary' />}
                iconButtonProps={{ size: 'medium' }}
                options={[
                  {
                    text: 'Spam',
                    icon: <i className='ri-error-warning-line text-textSecondary mie-2' />,
                    menuItemProps: { onClick: handleMoveAllToSpam }
                  },
                  {
                    text: 'Inbox',
                    icon: <i className='ri-inbox-line text-textSecondary mie-2' />,
                    menuItemProps: { onClick: handleMoveAllToInbox }
                  }
                ]}
              />
            )}
            <OptionMenu
              tooltipProps={{ title: 'Toggle label', placement: 'top' }}
              icon={<i className='ri-price-tag-3-line text-textSecondary' />}
              iconButtonProps={{ size: 'medium' }}
              options={Object.entries(labelColors).map(([key, value]) => ({
                text: key.charAt(0).toUpperCase() + key.slice(1),
                menuItemProps: { onClick: () => handleLabelClick(key) },
                icon: <i className={`ri-circle-fill mie-2 text-xs text-${value.color}`} />
              }))}
            />
          </>
        )}
      </div>
      <div className='flex gap-1 max-sm:gap-0.5'>
        <Tooltip title='Refresh' placement='top'>
          <IconButton onClick={handleReload}>
            <i className='ri-refresh-line text-textSecondary' />
          </IconButton>
        </Tooltip>
        <IconButton>
          <i className='ri-more-2-line text-textSecondary' />
        </IconButton>
      </div>
    </div>
  )
}

export default MailContentActions
