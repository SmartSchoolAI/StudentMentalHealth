'use client'

// React Imports
import { useEffect, useRef, useState } from 'react'

// MUI Imports
import { useMediaQuery } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

// Type Imports
import type { RootState } from '@/redux-store'

// Slice Imports
import { filterEmails } from '@/redux-store/slices/email'

// Component Imports
import SidebarLeft from './SidebarLeft'
import MailContent from './MailContent'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Util Imports
import { commonLayoutClasses } from '@layouts/utils/layoutClasses'

const EmailWrapper = ({ folder, label }: { folder?: string; label?: string }) => {
  // States
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [backdropOpen, setBackdropOpen] = useState(false)

  // Refs
  const isInitialMount = useRef(true)

  // Hooks
  const { settings } = useSettings()
  const emailStore = useSelector((state: RootState) => state.emailReducer)
  const dispatch = useDispatch()
  const isBelowLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  // Vars
  const uniqueLabels = [...new Set(emailStore.emails.flatMap(email => email.labels))]

  // Handle backdrop on click
  const handleBackdropClick = () => {
    setSidebarOpen(false)
    setBackdropOpen(false)
  }

  // Set loading false on initial mount
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    }
  }, [])

  // Filter all emails based on folder and label
  useEffect(() => {
    dispatch(filterEmails({ emails: emailStore.emails, folder, label, uniqueLabels }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailStore.emails, folder, label])

  // Hide backdrop when left sidebar is closed
  useEffect(() => {
    if (backdropOpen && !sidebarOpen) {
      setBackdropOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidebarOpen])

  // Hide backdrop when screen size is above md
  useEffect(() => {
    if (backdropOpen && !isBelowMdScreen) {
      setBackdropOpen(false)
    }

    if (sidebarOpen && !isBelowMdScreen) {
      setSidebarOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBelowMdScreen])

  return (
    <div
      className={classnames(commonLayoutClasses.contentHeightFixed, 'flex is-full overflow-hidden rounded relative', {
        border: settings.skin === 'bordered',
        'shadow-md': settings.skin !== 'bordered'
      })}
    >
      <SidebarLeft
        store={emailStore}
        isBelowLgScreen={isBelowLgScreen}
        isBelowMdScreen={isBelowMdScreen}
        isBelowSmScreen={isBelowSmScreen}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        folder={folder}
        uniqueLabels={uniqueLabels}
        label={label || ''}
      />
      <Backdrop open={backdropOpen} onClick={handleBackdropClick} className='absolute z-10' />
      <MailContent
        store={emailStore}
        dispatch={dispatch}
        folder={folder}
        label={label}
        uniqueLabels={uniqueLabels}
        isInitialMount={isInitialMount.current}
        setSidebarOpen={setSidebarOpen}
        isBelowLgScreen={isBelowLgScreen}
        isBelowMdScreen={isBelowMdScreen}
        isBelowSmScreen={isBelowSmScreen}
        setBackdropOpen={setBackdropOpen}
      />
    </div>
  )
}

export default EmailWrapper
