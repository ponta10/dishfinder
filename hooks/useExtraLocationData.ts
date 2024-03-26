import { ResponseType, StoreLocation } from '@/utils/type'
import { useEffect, useState } from 'react'

export const useExtractLocationData = (response: ResponseType) => {
  const [locations, setLocations] = useState<StoreLocation[]>([])

  useEffect(() => {
    const extractedData: StoreLocation[] = []

    Object.values(response).forEach((genre) => {
      genre.forEach((store) => {
        extractedData.push({
          store_name: store.store_name,
          location: store.location,
        })
      })
    })

    setLocations(extractedData)
  }, [response])

  return locations
}
