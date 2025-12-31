// React Imports
import { useState } from 'react'
import type { ReactNode } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Drawer from '@mui/material/Drawer'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'

// Types Imports
import type { Email, EmailState } from '@/types/apps/emailTypes'
import type { ThemeColor } from '@core/types'
import type { Locale } from '@configs/i18n'

// Components Imports
import ComposeMail from './ComposeMail'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Styles Imports
import styles from './styles.module.css'

type Props = {
  store: EmailState
  isBelowLgScreen: boolean
  isBelowMdScreen: boolean
  isBelowSmScreen: boolean
  sidebarOpen: boolean
  setSidebarOpen: (value: boolean) => void
  uniqueLabels: string[]
  folder?: string
  label: string
}

type LabelColor = {
  color: ThemeColor
  colorClass: string
}

// Constants
const icons = {
  inbox: 'ri-mail-line',
  sent: 'ri-send-plane-line',
  draft: 'ri-edit-box-line',
  starred: 'ri-star-line',
  spam: 'ri-spam-2-line',
  trash: 'ri-delete-bin-7-line'
}

export const labelColors: { [key: string]: LabelColor } = {
  personal: { color: 'success', colorClass: 'text-success' },
  company: { color: 'primary', colorClass: 'text-primary' },
  important: { color: 'warning', colorClass: 'text-warning' },
  private: { color: 'error', colorClass: 'text-error' }
}

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
    store,
    isBelowLgScreen,
    isBelowMdScreen,
    isBelowSmScreen,
    sidebarOpen,
    setSidebarOpen,
    uniqueLabels,
    folder,
    label
  } = props

  // States
  const [openCompose, setOpenCompose] = useState(false)

  // Hooks
  const { lang: locale } = useParams()

  const folderCounts = store.emails.reduce((counts: Record<string, number>, email: Email) => {
    if (!email.isRead && email.folder !== 'trash') {
      counts[email.folder] = (counts[email.folder] || 0) + 1
    } else if (email.folder === 'draft') {
      counts.draft = (counts.draft || 0) + 1
    }

    return counts
  }, {})

  return (
    <>
      <Drawer
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        className='bs-full'
        variant={!isBelowMdScreen ? 'permanent' : 'persistent'}
        ModalProps={{ disablePortal: true, keepMounted: true }}
        sx={{
          zIndex: isBelowMdScreen && sidebarOpen ? 11 : 10,
          position: !isBelowMdScreen ? 'static' : 'absolute',
          '& .MuiDrawer-paper': {
            boxShadow: 'none',
            overflow: 'hidden',
            width: '260px',
            position: !isBelowMdScreen ? 'static' : 'absolute'
          }
        }}
      >
        <CardContent>
          <Button color='primary' variant='contained' fullWidth onClick={() => setOpenCompose(true)}>
            Compose
          </Button>
        </CardContent>
        <ScrollWrapper isBelowLgScreen={isBelowLgScreen}>
          <div className='flex flex-col gap-1 plb-4'>
            {Object.entries(icons).map(([key, value]) => (
              <Link
                key={key}
                href={getLocalizedUrl(`/apps/email/${key}`, locale as Locale)}
                prefetch
                className={classnames(
                  'flex items-center justify-between plb-1 pli-5 gap-2.5 min-bs-8 bs-[32px] cursor-pointer',
                  {
                    [styles.activeSidebarListItem]: key === folder && !label
                  }
                )}
              >
                <div className='flex items-center gap-2.5'>
                  <i className={classnames(value, 'text-xl')} />
                  <Typography className='capitalize' color='inherit'>
                    {key}
                  </Typography>
                </div>
                {folderCounts[key] && (
                  <Chip
                    label={folderCounts[key]}
                    size='small'
                    variant='tonal'
                    color={
                      key === 'inbox' ? 'primary' : key === 'draft' ? 'warning' : key === 'spam' ? 'error' : 'default'
                    }
                  />
                )}
              </Link>
            ))}
          </div>
          <div className='flex flex-col gap-4 plb-4'>
            <Typography variant='caption' className='uppercase pli-5'>
              Labels
            </Typography>
            <div className='flex flex-col gap-3'>
              {uniqueLabels.map(labelName => (
                <Link
                  key={labelName}
                  href={getLocalizedUrl(`/apps/email/label/${labelName}`, locale as Locale)}
                  prefetch
                  className={classnames('flex items-center gap-x-2 pli-5 cursor-pointer', {
                    [styles.activeSidebarListItem]: labelName === label
                  })}
                >
                  <i className={classnames('ri-circle-fill text-xs', labelColors[labelName].colorClass)} />
                  <Typography className='capitalize' color='inherit'>
                    {labelName}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>
        </ScrollWrapper>
      </Drawer>
      <ComposeMail
        openCompose={openCompose}
        setOpenCompose={setOpenCompose}
        isBelowSmScreen={isBelowSmScreen}
        isBelowMdScreen={isBelowMdScreen}
      />
    </>
  )
}

export default SidebarLeft
