import * as React from 'react';
import { GoogleMap } from '@capacitor/google-maps';
import './Map.css';

const Map: React.FC = () => {
  const mapRef = React.useRef(null);

  async function createMap() {
    const mapRef1 = document.getElementById("map1")!
    try {
      const newMap1 = await GoogleMap.create(mapRef1, "myMap", process.env.REACT_APP_GOOGLE_MAPS_API_KEY!, {
        center: {
          lat: 43.0741904,
          lng: -89.3809802,
        },
        zoom: 18,
        androidLiteMode: false,                
      }, true);
      console.log(newMap1);
    } catch(e: any) {
      console.error(e.message);
    }
  }

  React.useEffect(() => {
    if (mapRef.current) {
      setTimeout(() => {
        createMap()
      }, 100)
    }
  }, [mapRef]);

  return <capacitor-google-map style={{
    display: 'block',
    width: '100%',
    height: '100%'
  }} id="map1" ref={mapRef}></capacitor-google-map>;
};

export default Map;
