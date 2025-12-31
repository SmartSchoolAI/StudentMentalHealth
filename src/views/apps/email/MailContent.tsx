// React Imports
import { useState } from 'react'
import type { MouseEvent } from 'react'

// Types Imports
import type { AppDispatch } from '@/redux-store'
import type { EmailState } from '@/types/apps/emailTypes'

// Slice Imports
import { moveEmailsToFolder, deleteTrashEmails, toggleReadEmails, toggleStarEmail } from '@/redux-store/slices/email'

// Component Imports
import MailContentSearch from './MailContentSearch'
import MailContentActions from './MailContentActions'
import MailContentList from './MailContentList'
import MailDetails from './MailDetails'

type Props = {
  folder?: string
  label?: string
  store: EmailState
  dispatch: AppDispatch
  uniqueLabels: string[]
  isInitialMount: boolean
  setSidebarOpen: (value: boolean) => void
  isBelowLgScreen: boolean
  isBelowMdScreen: boolean
  isBelowSmScreen: boolean
  setBackdropOpen: (value: boolean) => void
}

const MailContent = (props: Props) => {
  // Props
  const {
    folder,
    label,
    store,
    dispatch,
    uniqueLabels,
    isInitialMount,
    setSidebarOpen,
    isBelowLgScreen,
    isBelowMdScreen,
    isBelowSmScreen,
    setBackdropOpen
  } = props

  // States
  const [selectedEmails, setSelectedEmails] = useState<Set<number>>(new Set())
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [reload, setReload] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  // Vars
  const emails = store.filteredEmails
  const currentEmail = emails.find(email => email.id === store.currentEmailId)

  const areFilteredEmailsNone =
    emails.length === 0 ||
    emails.filter(
      email =>
        email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.from.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).length === 0

  // Action for deleting single email
  const handleSingleEmailDelete = (e: MouseEvent, emailId: number) => {
    e.stopPropagation()
    setSelectedEmails(prevSelectedEmails => {
      const newSelectedEmails = new Set(prevSelectedEmails)

      newSelectedEmails.delete(emailId)

      return newSelectedEmails
    })

    if (folder === 'trash') {
      dispatch(deleteTrashEmails({ emailIds: [emailId] }))
    } else {
      dispatch(moveEmailsToFolder({ emailIds: [emailId], folder: 'trash' }))
    }
  }

  // Toggle read status for single email
  const handleToggleIsReadStatus = (e: MouseEvent, id: number) => {
    e.stopPropagation()
    dispatch(toggleReadEmails({ emailIds: [id] }))
  }

  // Toggle star for single email
  const handleToggleStarEmail = (e: MouseEvent, id: number) => {
    e.stopPropagation()
    dispatch(toggleStarEmail({ emailId: id }))
  }

  return (
    <div className='flex flex-col items-center justify-center is-full bs-full relative overflow-hidden bg-backgroundPaper'>
      <MailContentSearch
        isBelowScreen={isBelowMdScreen}
        searchTerm={searchTerm}
        setSidebarOpen={setSidebarOpen}
        setBackdropOpen={setBackdropOpen}
        setSearchTerm={setSearchTerm}
      />
      <MailContentActions
        areFilteredEmailsNone={areFilteredEmailsNone}
        selectedEmails={selectedEmails}
        setSelectedEmails={setSelectedEmails}
        emails={emails}
        folder={folder}
        label={label}
        uniqueLabels={uniqueLabels}
        setReload={setReload}
        dispatch={dispatch}
      />
      <MailContentList
        isInitialMount={isInitialMount}
        isBelowSmScreen={isBelowSmScreen}
        isBelowLgScreen={isBelowLgScreen}
        reload={reload}
        areFilteredEmailsNone={areFilteredEmailsNone}
        searchTerm={searchTerm}
        selectedEmails={selectedEmails}
        dispatch={dispatch}
        store={store}
        emails={emails}
        folder={folder}
        setSelectedEmails={setSelectedEmails}
        setDrawerOpen={setDrawerOpen}
        handleToggleStarEmail={handleToggleStarEmail}
        handleSingleEmailDelete={handleSingleEmailDelete}
        handleToggleIsReadStatus={handleToggleIsReadStatus}
      />
      <MailDetails
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        isBelowSmScreen={isBelowSmScreen}
        isBelowLgScreen={isBelowLgScreen}
        currentEmail={currentEmail}
        emails={emails}
        folder={folder}
        label={label}
        dispatch={dispatch}
        handleSingleEmailDelete={handleSingleEmailDelete}
        handleToggleIsReadStatus={handleToggleIsReadStatus}
        handleToggleStarEmail={handleToggleStarEmail}
      />
    </div>
  )
}

export default MailContent
