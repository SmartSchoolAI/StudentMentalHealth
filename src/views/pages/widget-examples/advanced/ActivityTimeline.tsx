'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'
import type { TimelineProps } from '@mui/lab/Timeline'
import { styled } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

const ActivityTimeline = () => {
  return (
    <Card>
      <CardMedia className='bs-[168px]' image='/images/cards/activity-timeline.png'></CardMedia>
      <CardHeader title='Activity Timeline' />
      <CardContent>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4 pbe-1.5'>
                <Typography color='text.primary' className='font-medium'>
                  12 Invoices have been paid
                </Typography>
                <Typography variant='caption' color='text.disabled'>
                  12 min ago
                </Typography>
              </div>
              <Typography className='mbe-2'>Invoices have been paid to the company.</Typography>
              <div className='flex'>
                <div className='flex gap-2.5 items-center pli-2.5 rounded bg-actionHover plb-[0.3125rem]'>
                  <img alt='invoice.pdf' src='/images/icons/pdf-document.png' className='bs-5' />
                  <Typography className='font-medium'>invoice.pdf</Typography>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='success' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4 pbe-1.5'>
                <Typography color='text.primary' className='font-medium'>
                  Client Meeting
                </Typography>
                <Typography variant='caption' color='text.disabled'>
                  45 min ago
                </Typography>
              </div>
              <Typography className='mbe-2'>Project meeting with john @10:15am</Typography>
              <div className='flex items-center gap-2.5'>
                <CustomAvatar src='/images/avatars/1.png' size={32} />
                <div>
                  <Typography variant='body2' className='font-medium'>
                    Lester McCarthy (Client)
                  </Typography>
                  <Typography variant='body2'>CEO of ThemeSelection</Typography>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='info' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4 pbe-1.5'>
                <Typography color='text.primary' className='font-medium'>
                  Create a new project for client
                </Typography>
                <Typography variant='caption' color='text.disabled'>
                  2 Day Ago
                </Typography>
              </div>
              <Typography className='mbe-2'>6 team members in a project</Typography>
              <AvatarGroup total={6}>
                <Avatar alt='Remy Sharp' src='/images/avatars/1.png' />
                <Avatar alt='Travis Howard' src='/images/avatars/8.png' />
                <Avatar alt='Cindy Baker' src='/images/avatars/6.png' />
              </AvatarGroup>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default ActivityTimeline
