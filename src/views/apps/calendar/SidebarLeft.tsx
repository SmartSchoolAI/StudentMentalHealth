// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'

// Third-party imports
import classnames from 'classnames'

// Types Imports
import type { SidebarLeftProps, CalendarFiltersType } from '@/types/apps/calendarTypes'
import type { ThemeColor } from '@core/types'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

// Slice Imports
import { filterAllCalendarLabels, filterCalendarLabel, selectedEvent } from '@/redux-store/slices/calendar'

const SidebarLeft = (props: SidebarLeftProps) => {
  // Props
  const {
    mdAbove,
    leftSidebarOpen,
    calendarStore,
    calendarsColor,
    calendarApi,
    dispatch,
    handleLeftSidebarToggle,
    handleAddEventSidebarToggle
  } = props

  // Vars
  const colorsArr = calendarsColor ? Object.entries(calendarsColor) : []

  const renderFilters = colorsArr.length
    ? colorsArr.map(([key, value]: string[]) => {
        return (
          <FormControlLabel
            className='mbe-1'
            key={key}
            label={key}
            control={
              <Checkbox
                color={value as ThemeColor}
                checked={calendarStore.selectedCalendars.indexOf(key as CalendarFiltersType) > -1}
                onChange={() => dispatch(filterCalendarLabel(key as CalendarFiltersType))}
              />
            }
          />
        )
      })
    : null

  const handleSidebarToggleSidebar = () => {
    dispatch(selectedEvent(null))
    handleAddEventSidebarToggle()
  }

  if (renderFilters) {
    return (
      <Drawer
        open={leftSidebarOpen}
        onClose={handleLeftSidebarToggle}
        variant={mdAbove ? 'permanent' : 'temporary'}
        ModalProps={{
          disablePortal: true,
          disableAutoFocus: true,
          disableScrollLock: true,
          keepMounted: true // Better open performance on mobile.
        }}
        className={classnames('block', { static: mdAbove, absolute: !mdAbove })}
        slotProps={{
          paper: {
            className: classnames('items-start is-[280px] shadow-none rounded rounded-se-none rounded-ee-none', {
              static: mdAbove,
              absolute: !mdAbove
            })
          }
        }}
        sx={{
          zIndex: 3,
          '& .MuiDrawer-paper': {
            zIndex: mdAbove ? 2 : 'drawer'
          },
          '& .MuiBackdrop-root': {
            borderRadius: 1,
            position: 'absolute'
          }
        }}
      >
        <div className='is-full p-5'>
          <Button
            fullWidth
            variant='contained'
            onClick={handleSidebarToggleSidebar}
            startIcon={<i className='ri-add-line' />}
          >
            Add Event
          </Button>
        </div>
        <Divider className='is-full' />
        <AppReactDatepicker
          inline
          onChange={date => calendarApi.gotoDate(date)}
          boxProps={{
            className: 'flex justify-center is-full',
            sx: { '& .react-datepicker': { boxShadow: 'none !important', border: 'none !important' } }
          }}
        />
        <Divider className='is-full' />

        <div className='flex flex-col p-5 is-full'>
          <Typography variant='h5' className='mbe-4'>
            Event Filters
          </Typography>
          <FormControlLabel
            className='mbe-1'
            label='View All'
            control={
              <Checkbox
                color='secondary'
                checked={calendarStore.selectedCalendars.length === colorsArr.length}
                onChange={e => dispatch(filterAllCalendarLabels(e.target.checked))}
              />
            }
          />
          {renderFilters}
        </div>
      </Drawer>
    )
  } else {
    return null
  }
}

export default SidebarLeft
