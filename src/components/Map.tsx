import * as React from 'react';
import { GoogleMap } from '@capacitor/google-maps';
import './Map.css';

const Map: React.FC = () => {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    if (mapRef.current) {
      GoogleMap.create(
        mapRef.current,
        'myMap',
        process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
        {
          androidLiteMode: true,
          center: {
            lat: 43.0741904,
            lng: -89.3809802,
          },
          zoom: 18,
        }
      );
    }
  }, [mapRef]);

  return <div className="map" ref={mapRef}></div>;
};

export default Map;
