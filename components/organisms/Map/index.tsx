import React from 'react'
import {
  GoogleMap,
  InfoWindowF,
  LoadScript,
  MarkerF,
} from '@react-google-maps/api'

type Location = {
  lat: number
  lng: number
}

export interface StoreLocation {
  name: string
  location: Location
}

const containerStyle = {
  width: '400px',
  height: '400px',
}

interface MapProps {
  storeLocations: StoreLocation[]
}

export const Map: React.FC<MapProps> = ({ storeLocations }) => {
  return (
    <LoadScript googleMapsApiKey={`${process.env.NEXT_PUBLIC_API_KEY}`}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={storeLocations[0].location}
        zoom={15}
      >
        {storeLocations.map((storeLocation, index) => (
          <MarkerF key={index} position={storeLocation.location} />
        ))}
        {storeLocations.map((storeLocation, index) => (
          <InfoWindowF key={index}     position={{
            lat: storeLocation.location.lat + 0.0015,
            lng: storeLocation.location.lng
          }}>
            <div>
              <h2>{storeLocation.name}</h2>
            </div>
          </InfoWindowF>
        ))}
      </GoogleMap>
    </LoadScript>
  )
}
