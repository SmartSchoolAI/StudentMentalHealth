// React Imports
import type { MouseEvent, RefObject } from 'react'

// MUI Imports
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@core/types'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Util Imports
import { getInitials } from '@/utils/getInitials'

const BadgeContentSpan = styled('span', {
  name: 'MuiBadgeContentSpan'
})<{ color: ThemeColor; badgeSize: number }>(({ color, badgeSize }) => ({
  width: badgeSize,
  height: badgeSize,
  borderRadius: '50%',
  cursor: 'pointer',
  backgroundColor: `var(--mui-palette-${color}-main)`,
  boxShadow: '0 0 0 2px var(--mui-palette-background-paper)'
}))

type AvatarWithBadgeProps = {
  ref?: RefObject<HTMLDivElement>
  alt?: string
  src?: string
  color?: ThemeColor
  badgeColor?: ThemeColor
  isChatActive?: boolean
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  className?: string
  badgeSize?: number
}

const AvatarWithBadge = (props: AvatarWithBadgeProps) => {
  // Props
  const { ref, alt, src, color, badgeColor, isChatActive, onClick, className, badgeSize } = props

  return (
    <Badge
      ref={ref}
      overlap='circular'
      badgeContent={<BadgeContentSpan color={badgeColor as ThemeColor} onClick={onClick} badgeSize={badgeSize || 8} />}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      {src ? (
        <Avatar ref={ref} alt={alt} src={src} onClick={onClick} className={classnames('cursor-pointer', className)} />
      ) : (
        <CustomAvatar
          ref={ref}
          color={color}
          skin={isChatActive ? 'light-static' : 'light'}
          onClick={onClick}
          className={classnames('cursor-pointer', className)}
        >
          {alt && getInitials(alt)}
        </CustomAvatar>
      )}
    </Badge>
  )
}

export default AvatarWithBadge
