/* eslint-disable react/style-prop-object */
import 'mapbox-gl/dist/mapbox-gl.css';
import { TextField } from '@mui/material';
import MapLogic from './MapLogic';
import ReactMapboxGl, { } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';

const TOKEN = 'pk.eyJ1IjoibW1laXIxMSIsImEiOiJjbDNwanE2N2cwMzJwM2JxcHRnampwd2p0In0.h_K0W1HvOK7S71Svmn7mCw'

const MapboxGL = ReactMapboxGl({ accessToken: TOKEN });

const Map = () => {
  const {
    coordinates,
    setCoordinates,
    handleClickMap,
  } = MapLogic()

  const {
    longitude,
    latitude
  } = coordinates

  const onChangeLatLog = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const name = e.target.name
    let value = Number(e.target.value)

    if (isNaN(value))
      return

    if (value > 90) {
      value = 90
    }
    else if (value < -90) {
      value = -90
    }

    name === 'latitude' ?
      setCoordinates({ ...coordinates, latitude: Number(value) })
      : setCoordinates({ ...coordinates, longitude: Number(value ?? 0) })
  }

  return (
    <div>
      <div>
        <TextField
          label='קו רוחב'
          value={coordinates.latitude}
          onChange={onChangeLatLog}
          margin='normal'
          type='number'
          name='latitude'
        />
        <TextField
          label='קו אורך'
          value={coordinates.longitude}
          onChange={onChangeLatLog}
          margin='normal'
          type='number'
          name='longitude'
        />
      </div>
      <MapboxGL
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{ height: '100vh', width: '100vw' }}
        center={[latitude, longitude]}
        zoom={[9]}
        onClick={handleClickMap}
      >
      </MapboxGL>
    </div>
  )
}

export default Map