import { useCallback, useMemo, useState } from 'react'
import { MapEvent } from 'react-mapbox-gl/lib/map-events';


const MapLogic = () => {
  const israelCoordination = useMemo(() => ({
    latitude: 35.217018,
    longitude: 31.771959,
  }), [])

  const [coordinates, setCoordinates] = useState(israelCoordination)

  const handleClickMap: MapEvent = useCallback((map, event: any) => {
    const {
      lng: latitude,
      lat: longitude
    } = event.lngLat

    setCoordinates({ longitude, latitude })
  }, [setCoordinates])

  return {
    coordinates,
    setCoordinates,
    handleClickMap,
  }
}

export default MapLogic