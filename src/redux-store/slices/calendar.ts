// Third-party Imports
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { EventInput } from '@fullcalendar/core'

// Type Imports
import type { CalendarFiltersType, CalendarType } from '@/types/apps/calendarTypes'

// Data Imports
import { events } from '@/fake-db/apps/calendar'

const initialState: CalendarType = {
  events: events,
  filteredEvents: events,
  selectedEvent: null,
  selectedCalendars: ['Personal', 'Business', 'Family', 'Holiday', 'ETC']
}

const filterEventsUsingCheckbox = (events: EventInput[], selectedCalendars: CalendarFiltersType[]) => {
  return events.filter(event => selectedCalendars.includes(event.extendedProps?.calendar as CalendarFiltersType))
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: initialState,
  reducers: {
    filterEvents: state => {
      state.filteredEvents = state.events
    },

    addEvent: (state, action) => {
      const newEvent = { ...action.payload, id: `${parseInt(state.events[state.events.length - 1]?.id ?? '') + 1}` }

      state.events.push(newEvent)
    },

    updateEvent: (state, action: PayloadAction<EventInput>) => {
      state.events = state.events.map(event => {
        if (action.payload._def && event.id === action.payload._def.publicId) {
          return {
            id: event.id,
            url: action.payload._def.url,
            title: action.payload._def.title,
            allDay: action.payload._def.allDay,
            end: action.payload._instance.range.end,
            start: action.payload._instance.range.start,
            extendedProps: action.payload._def.extendedProps
          }
        } else if (event.id === action.payload.id) {
          return action.payload
        } else {
          return event
        }
      })
    },

    deleteEvent: (state, action) => {
      state.events = state.events.filter(event => event.id !== action.payload)
    },

    selectedEvent: (state, action) => {
      state.selectedEvent = action.payload
    },

    filterCalendarLabel: (state, action) => {
      const index = state.selectedCalendars.indexOf(action.payload)

      if (index !== -1) {
        state.selectedCalendars.splice(index, 1)
      } else {
        state.selectedCalendars.push(action.payload)
      }

      state.events = filterEventsUsingCheckbox(state.filteredEvents, state.selectedCalendars)
    },

    filterAllCalendarLabels: (state, action) => {
      state.selectedCalendars = action.payload ? ['Personal', 'Business', 'Family', 'Holiday', 'ETC'] : []
      state.events = filterEventsUsingCheckbox(state.filteredEvents, state.selectedCalendars)
    }
  }
})

export const {
  filterEvents,
  addEvent,
  updateEvent,
  deleteEvent,
  selectedEvent,
  filterCalendarLabel,
  filterAllCalendarLabels
} = calendarSlice.actions

export default calendarSlice.reducer
