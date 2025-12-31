// React Imports
import type { ReactNode } from 'react'

// MUI Imports
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { ContactType } from '@/types/apps/chatTypes'

// Component Imports
import { statusObj } from './SidebarLeft'
import AvatarWithBadge from './AvatarWithBadge'

type Props = {
  open: boolean
  handleClose: () => void
  activeUser: ContactType
  isBelowLgScreen: boolean
  isBelowSmScreen: boolean
}

const ScrollWrapper = ({
  children,
  isBelowLgScreen,
  className
}: {
  children: ReactNode
  isBelowLgScreen: boolean
  className?: string
}) => {
  if (isBelowLgScreen) {
    return <div className={classnames('bs-full overflow-x-hidden overflow-y-auto', className)}>{children}</div>
  } else {
    return (
      <PerfectScrollbar options={{ wheelPropagation: false }} className={className}>
        {children}
      </PerfectScrollbar>
    )
  }
}

const UserProfileRight = (props: Props) => {
  // Props
  const { open, handleClose, activeUser, isBelowLgScreen, isBelowSmScreen } = props

  return activeUser ? (
    <Drawer
      open={open}
      anchor='right'
      variant='persistent'
      ModalProps={{ keepMounted: true }}
      sx={{
        zIndex: 12,
        '& .MuiDrawer-paper': { width: isBelowSmScreen ? '100%' : '370px', position: 'absolute', border: 0 }
      }}
    >
      <IconButton size='small' className='absolute block-start-4 inline-end-4' onClick={handleClose}>
        <i className='ri-close-line text-2xl' />
      </IconButton>
      <div className='flex flex-col justify-center items-center gap-4 mbs-6 pli-5 pbs-5 pbe-1'>
        <AvatarWithBadge
          alt={activeUser.fullName}
          src={activeUser.avatar}
          color={activeUser.avatarColor}
          badgeColor={statusObj[activeUser.status]}
          className='bs-[84px] is-[84px] text-3xl'
          badgeSize={12}
        />
        <div className='text-center'>
          <Typography variant='h5'>{activeUser.fullName}</Typography>
          <Typography>{activeUser.role}</Typography>
        </div>
      </div>

      <ScrollWrapper isBelowLgScreen={isBelowLgScreen} className='flex flex-col gap-6 p-5'>
        <div className='flex flex-col gap-1'>
          <Typography className='uppercase' color='text.disabled'>
            About
          </Typography>
          <Typography>{activeUser.about}</Typography>
        </div>
        <div className='flex flex-col gap-1'>
          <Typography className='uppercase' color='text.disabled'>
            Personal Information
          </Typography>
          <List>
            <ListItem className='p-2 gap-2'>
              <ListItemIcon>
                <i className='ri-mail-line' />
              </ListItemIcon>
              <ListItemText primary={`${activeUser.fullName.toLowerCase().replace(/\s/g, '_')}@email.com`} />
            </ListItem>
            <ListItem className='p-2 gap-2'>
              <ListItemIcon>
                <i className='ri-phone-line' />
              </ListItemIcon>
              <ListItemText primary='+1(123) 456 - 7890' />
            </ListItem>
            <ListItem className='p-2 gap-2'>
              <ListItemIcon>
                <i className='ri-time-line' />
              </ListItemIcon>
              <ListItemText primary='Mon - Fri 10AM - 8PM' />
            </ListItem>
          </List>
        </div>
        <div className='flex flex-col gap-1'>
          <Typography className='uppercase' color='text.disabled'>
            Options
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton className='p-2 gap-2'>
                <ListItemIcon>
                  <i className='ri-bookmark-line' />
                </ListItemIcon>
                <ListItemText primary='Add Tag' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton className='p-2 gap-2'>
                <ListItemIcon>
                  <i className='ri-user-star-line' />
                </ListItemIcon>
                <ListItemText primary='Important Contact' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton className='p-2 gap-2'>
                <ListItemIcon>
                  <i className='ri-image-2-line' />
                </ListItemIcon>
                <ListItemText primary='Shared Image' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton className='p-2 gap-2'>
                <ListItemIcon>
                  <i className='ri-forbid-2-line' />
                </ListItemIcon>
                <ListItemText primary='Block Contact' />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <Button
          variant='contained'
          color='error'
          fullWidth
          className='mbs-auto'
          endIcon={<i className='ri-delete-bin-7-line' />}
        >
          Delete Contact
        </Button>
      </ScrollWrapper>
    </Drawer>
  ) : null
}

export default UserProfileRight
