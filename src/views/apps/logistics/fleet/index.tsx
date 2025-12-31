'use client'

// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import Backdrop from '@mui/material/Backdrop'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classNames from 'classnames'

//Components Imports
import CustomIconButton from '@core/components/mui/IconButton'
import FleetSidebar from './FleetSidebar'
import FleetMap from './FleetMap'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Util Imports
import { commonLayoutClasses } from '@layouts/utils/layoutClasses'

export type viewStateType = {
  longitude: number
  latitude: number
  zoom: number
}

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        longitude: -73.999024,
        latitude: 40.75249842
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        longitude: -74.03,
        latitude: 40.75699842
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        longitude: -73.967524,
        latitude: 40.7599842
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        longitude: -74.0325,
        latitude: 40.742992
      }
    }
  ]
}

const Fleet = ({ mapboxAccessToken }: { mapboxAccessToken: string }) => {
  // States
  const [backdropOpen, setBackdropOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expanded, setExpanded] = useState<number | false>(0)

  const [viewState, setViewState] = useState<viewStateType>({
    longitude: -73.999024,
    latitude: 40.75249842,
    zoom: 12.5
  })

  // Hooks
  const { settings } = useSettings()
  const isBelowLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  useEffect(() => {
    if (!isBelowMdScreen && backdropOpen && sidebarOpen) {
      setBackdropOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBelowMdScreen])

  useEffect(() => {
    if (!isBelowSmScreen && sidebarOpen) {
      setBackdropOpen(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBelowSmScreen])

  return (
    <div
      className={classNames(
        commonLayoutClasses.contentHeightFixed,
        'flex is-full overflow-hidden rounded-xl relative',
        {
          border: settings.skin === 'bordered',
          'shadow-md': settings.skin !== 'bordered'
        }
      )}
    >
      {isBelowMdScreen ? (
        <CustomIconButton
          variant='contained'
          color='primary'
          className='absolute top-4 left-4 z-10 bg-backgroundPaper text-textPrimary hover:bg-backgroundPaper focus:bg-backgroundPaper active:bg-backgroundPaper'
          onClick={() => {
            setSidebarOpen(true)
            setBackdropOpen(true)
          }}
        >
          <i className='ri-menu-line text-2xl' />
        </CustomIconButton>
      ) : null}
      <FleetSidebar
        backdropOpen={backdropOpen}
        setBackdropOpen={setBackdropOpen}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isBelowMdScreen={isBelowMdScreen}
        isBelowLgScreen={isBelowLgScreen}
        isBelowSmScreen={isBelowSmScreen}
        expanded={expanded}
        setExpanded={setExpanded}
        setViewState={setViewState}
        geojson={geojson}
      />
      <FleetMap carIndex={expanded} viewState={viewState} geojson={geojson} mapboxAccessToken={mapboxAccessToken} />
      <Backdrop open={backdropOpen} onClick={() => setBackdropOpen(false)} className='absolute z-10' />
    </div>
  )
}

export default Fleet
