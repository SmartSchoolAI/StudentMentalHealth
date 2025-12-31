// React Imports
import { useRef, useEffect } from 'react'

// Third-party Imports
import { Map, Marker } from 'react-map-gl/mapbox'
import type { MapRef } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'

// Types Imports
import type { viewStateType } from './index'

// Style Imports
import './styles.css'

type Props = {
  viewState: viewStateType
  carIndex: number | false
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
  mapboxAccessToken: string
}

const FleetMap = (props: Props) => {
  // Vars
  const { carIndex, viewState, geojson, mapboxAccessToken } = props

  // Hooks
  const mapRef = useRef<MapRef>(null!)

  useEffect(() => {
    mapRef.current?.flyTo({ center: [viewState.longitude, viewState.latitude], zoom: 16 })
  }, [viewState])

  return (
    <div className='is-full bs-full'>
      <Map
        mapboxAccessToken={mapboxAccessToken}
        // eslint-disable-next-line lines-around-comment
        // @ts-ignore
        ref={mapRef}
        initialViewState={{ longitude: -73.999024, latitude: 40.75249842, zoom: 12.5 }}
        mapStyle='mapbox://styles/mapbox/light-v9'
        attributionControl={false}
      >
        {geojson.features.map((item, index) => {
          return (
            <Marker
              key={index}
              longitude={item.geometry.longitude}
              latitude={item.geometry.latitude}
              style={{ display: 'flex' }}
            >
              <img
                src='/images/apps/logistics/fleet-car.png'
                height={42}
                width={20}
                {...(index === carIndex && {
                  style: { filter: 'drop-shadow(0 0 7px var(--mui-palette-primary-main))' }
                })}
              />
            </Marker>
          )
        })}
      </Map>
    </div>
  )
}

export default FleetMap
