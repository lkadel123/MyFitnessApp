import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Style for the map container
const containerStyle = {
  width: '100%',
  height: '100%',
};

// Center the map on Dhangadhi, Nepal
const center = {
  lat: 28.6953,
  lng: 80.5867,
};

const MyMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {/* Add a marker for Dhangadhi */}
        <Marker 
          position={center} 
          label={{
            text: 'Dhangadhi',
            color: 'black',
            fontSize: '14px',
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;


