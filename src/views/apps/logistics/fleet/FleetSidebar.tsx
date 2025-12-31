// React Imports
import { useEffect } from 'react'
import type { ReactNode, SyntheticEvent } from 'react'

// Mui Imports
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import LinearProgress from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiTimeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import type { AccordionProps } from '@mui/material/Accordion'
import type { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import type { AccordionDetailsProps } from '@mui/material/AccordionDetails'
import type { TimelineProps } from '@mui/lab/Timeline'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Types Imports
import type { viewStateType } from './index'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import DirectionalIcon from '@components/DirectionalIcon'

type Props = {
  backdropOpen: boolean
  setBackdropOpen: (value: boolean) => void
  sidebarOpen: boolean
  setSidebarOpen: (value: boolean) => void
  isBelowLgScreen: boolean
  isBelowMdScreen: boolean
  isBelowSmScreen: boolean
  expanded: number | false
  setExpanded: (value: number | false) => void
  setViewState: (value: viewStateType) => void
  geojson: {
    type: string
    features: {
      type: string
      geometry: {
        type: string
        longitude: number
        latitude: number
      }
    }[]
  }
}

// Styled component for Accordion component
const Accordion = styled(MuiAccordion)<AccordionProps>({
  boxShadow: 'none !important',
  border: 'none',
  '&:before': {
    content: 'none'
  }
})

// Styled component for AccordionSummary component
const AccordionSummary = styled(MuiAccordionSummary)<AccordionSummaryProps>(({ theme }) => ({
  paddingBlock: theme.spacing(0, 4),
  paddingInline: theme.spacing(0),
  '& .MuiAccordionSummary-expandIconWrapper i': {
    color: 'var(--mui-palette-action-active) !important'
  },
  '&.Mui-expanded': {
    '& .MuiAccordionSummary-expandIconWrapper': {
      transform: theme.direction === 'ltr' ? 'rotate(90deg)' : 'rotate(-90deg)',
      '& i, & svg': {
        color: 'var(--mui-palette-text-primary) !important'
      }
    }
  }
}))

// Styled component for AccordionDetails component
const AccordionDetails = styled(MuiAccordionDetails)<AccordionDetailsProps>({
  padding: 0
})

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  },
  '& .MuiTimelineDot-root': {
    border: 0,
    padding: 0
  }
})

type VehicleTrackingDataType = {
  name: string
  location: string
  progress: number
  driverName: string
  passengerName: string
}

const vehicleTrackingData: VehicleTrackingDataType[] = [
  {
    name: 'VOL-342808',
    location: 'Chelsea, NY, USA',
    progress: 88,
    driverName: 'Veronica Herman',
    passengerName: 'Helen Jacobs'
  },
  {
    name: 'VOL-954784',
    location: 'Lincoln Harbor, NY, USA',
    progress: 90,
    driverName: 'Myrtle Ullrich',
    passengerName: 'William Miller'
  },
  {
    name: 'VOL-342808',
    location: 'Midtown East, NY, USA',
    progress: 60,
    driverName: 'Barry Schowalter',
    passengerName: 'Charles Anderson'
  },
  {
    name: 'VOL-343908',
    location: 'Hoboken, NY, USA',
    progress: 28,
    driverName: 'Frank Jones',
    passengerName: 'Edward Smith'
  }
]

const ScrollWrapper = ({ children, isBelowLgScreen }: { children: ReactNode; isBelowLgScreen: boolean }) => {
  if (isBelowLgScreen) {
    return <div className='bs-full overflow-y-auto overflow-x-hidden pbe-5 pli-5'>{children}</div>
  } else {
    return (
      <PerfectScrollbar options={{ wheelPropagation: false, suppressScrollX: true }} className='pbe-5 pli-5'>
        {children}
      </PerfectScrollbar>
    )
  }
}

const VehicleTracking = ({
  vehicleTrackingData,
  index,
  expanded,
  handleChange
}: {
  vehicleTrackingData: VehicleTrackingDataType
  index: number
  expanded: number | false
  handleChange: (panel: number) => (event: SyntheticEvent, isExpanded: boolean) => void
}) => {
  return (
    <Accordion expanded={expanded === index} onChange={handleChange(index)}>
      <AccordionSummary
        expandIcon={
          <DirectionalIcon
            ltrIconClass='ri-arrow-right-s-line'
            rtlIconClass='ri-arrow-left-s-line'
            className='text-textPrimary'
          />
        }
      >
        <div className='flex gap-4 items-center'>
          <CustomAvatar skin='light' color='secondary'>
            <i className='ri-car-line' />
          </CustomAvatar>
          <div className='flex flex-col gap-1'>
            <Typography className='font-normal'>{vehicleTrackingData.name}</Typography>
            <Typography className='!text-textSecondary font-normal'>{vehicleTrackingData.location}</Typography>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className='flex flex-col gap-1 plb-4'>
          <div className='flex items-center justify-between'>
            <Typography className='!text-textPrimary'>Delivery Process</Typography>
            <Typography>{vehicleTrackingData.progress}%</Typography>
          </div>
          <LinearProgress variant='determinate' value={vehicleTrackingData.progress} />
        </div>
        <Timeline className='pbs-4'>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant='outlined' className='mlb-0'>
                <i className='ri-checkbox-circle-line text-xl text-success' />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className='flex flex-col gap-0.5 pbs-0 pis-4 pbe-5'>
              <Typography variant='caption' className='uppercase !text-success' color='success.main'>
                Tracking Number Created
              </Typography>
              <Typography className='font-medium !text-textPrimary'>{vehicleTrackingData.driverName}</Typography>
              <Typography variant='body2'>Sep 01, 7:53 AM</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant='outlined' className='mlb-0'>
                <i className='ri-checkbox-circle-line text-xl text-success' />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className='flex flex-col gap-0.5 pbs-0 pis-4 pbe-5'>
              <Typography variant='caption' className='uppercase !text-success'>
                Out For Delivery
              </Typography>
              <Typography className='font-medium !text-textPrimary'>{vehicleTrackingData.driverName}</Typography>
              <Typography variant='body2'>Sep 03, 8:02 AM</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant='outlined' className='mlb-0'>
                <i className='ri-map-pin-line text-xl text-primary' />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent className='flex flex-col gap-0.5 pbs-0 pis-4 pbe-5'>
              <Typography variant='caption' className='uppercase !text-primary'>
                Arrived
              </Typography>
              <Typography className='font-medium !text-textPrimary'>{vehicleTrackingData.passengerName}</Typography>
              <Typography variant='body2'>Sep 03, 8:02 AM</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </AccordionDetails>
    </Accordion>
  )
}

const FleetSidebar = (props: Props) => {
  // Props
  const {
    backdropOpen,
    setBackdropOpen,
    sidebarOpen,
    setSidebarOpen,
    isBelowLgScreen,
    isBelowMdScreen,
    isBelowSmScreen,
    expanded,
    setExpanded,
    setViewState,
    geojson
  } = props

  const handleChange = (panel: number) => (event: SyntheticEvent, isExpanded: boolean) => {
    if (isExpanded) {
      setViewState({
        longitude: geojson.features[panel].geometry.longitude,
        latitude: geojson.features[panel].geometry.latitude,
        zoom: 16
      })
    }

    setExpanded(isExpanded ? panel : false)
  }

  useEffect(() => {
    if (!backdropOpen && sidebarOpen) {
      setSidebarOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backdropOpen])

  return (
    <Drawer
      className='bs-full'
      open={sidebarOpen}
      onClose={() => setSidebarOpen(false)}
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
          borderRight: 'none',
          boxShadow: 'none',
          overflow: 'hidden',
          width: isBelowSmScreen ? '100%' : '360px',
          position: !isBelowMdScreen ? 'static' : 'absolute'
        }
      }}
    >
      <div className='flex justify-between p-5'>
        <Typography variant='h5'>Fleet</Typography>

        {isBelowMdScreen ? (
          <IconButton
            onClick={() => {
              setSidebarOpen(false)
              setBackdropOpen(false)
            }}
          >
            <i className='ri-close-line' />
          </IconButton>
        ) : null}
      </div>
      <ScrollWrapper isBelowLgScreen={isBelowLgScreen}>
        {vehicleTrackingData.map((item, index) => (
          <VehicleTracking
            vehicleTrackingData={item}
            index={index}
            expanded={expanded}
            handleChange={handleChange}
            key={index}
          />
        ))}
      </ScrollWrapper>
    </Drawer>
  )
}

export default FleetSidebar
