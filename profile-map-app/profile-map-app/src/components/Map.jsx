// src/components/Map.jsx
import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const Map = ({ address }) => {
  const location = { lat: address.lat, lng: address.lng };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={10}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
