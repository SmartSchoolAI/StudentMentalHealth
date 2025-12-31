'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import MuiTimeline from '@mui/lab/Timeline'
import type { TimelineProps } from '@mui/lab/Timeline'

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    },
    '& .MuiTimelineContent-root:last-child': {
      paddingBottom: 0
    },
    '&:nth-last-child(2) .MuiTimelineConnector-root': {
      backgroundColor: 'transparent',
      borderInlineStart: '1px dashed var(--mui-palette-divider)'
    },
    '& .MuiTimelineConnector-root': {
      backgroundColor: 'var(--mui-palette-primary-main)'
    }
  }
})

const ShippingActivity = ({ order }: { order: string }) => {
  return (
    <Card>
      <CardHeader title='Shipping Activity' />
      <CardContent>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography color='text.primary' className='font-medium'>
                  Order was placed (Order ID: #{order})
                </Typography>
                <Typography variant='caption'>Tuesday 11:29 AM</Typography>
              </div>
              <Typography className='mbe-2'>Your order has been placed successfully</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography color='text.primary' className='font-medium'>
                  Pick-up
                </Typography>
                <Typography variant='caption'>Wednesday 11:29 AM</Typography>
              </div>
              <Typography className='mbe-2'>Pick-up scheduled with courier</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography color='text.primary' className='font-medium'>
                  Dispatched
                </Typography>
                <Typography variant='caption'>Thursday 8:15 AM</Typography>
              </div>
              <Typography className='mbe-2'>Item has been picked up by courier.</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography color='text.primary' className='font-medium'>
                  Package arrived
                </Typography>
                <Typography variant='caption'>Saturday 15:20 AM</Typography>
              </div>
              <Typography className='mbe-2'>Package arrived at an Amazon facility, NY</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography color='text.primary' className='font-medium'>
                  Dispatched for delivery
                </Typography>
                <Typography variant='caption'>Today 14:12 PM</Typography>
              </div>
              <Typography className='mbe-2'>Package has left an Amazon facility , NY</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
            </TimelineSeparator>
            <TimelineContent>
              <Typography color='text.primary' className='font-medium'>
                Delivery
              </Typography>
              <Typography className='mbe-2'>Package will be delivered by tomorrow</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default ShippingActivity
