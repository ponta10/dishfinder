import React, { useState } from 'react'
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from '@react-google-maps/api'
import { StoreLocation } from '@/utils/type'
import styled from 'styled-components'
import { Button } from '@/components/atoms/Button'

const containerStyle = {
  width: '300px',
  height: '300px',
}

const MapContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  text-align: right;
`

interface MapProps {
  items: StoreLocation[]
}

export const Map: React.FC<MapProps> = ({ items }) => {
  const [map, setMap] = useState<boolean>(true)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
    libraries: ['geometry', 'drawing'],
  })
  if (!isLoaded) return
  return (
    <MapContainer>
      <Button
        bgcolor="#FFA234"
        text={map ? '地図を非表示にする' : '地図を表示する'}
        onClick={() => setMap(!map)}
      ></Button>
      {map && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: items[0]?.location.lat, lng: items[0]?.location.lng }}
          zoom={15}
        >
          {items.map((item, index) => (
            <MarkerF key={index} position={item.location}>
              <InfoWindowF
                key={index}
                position={{
                  lat: item.location.lat + 0.00005,
                  lng: item.location.lng,
                }}
              >
                <div>
                  <h2>{item.store_name}</h2>
                </div>
              </InfoWindowF>
            </MarkerF>
          ))}
        </GoogleMap>
      )}
    </MapContainer>
  )
}
