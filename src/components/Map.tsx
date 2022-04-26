import {useEffect, FC} from 'react';
import { GoogleMap } from '@capacitor/google-maps';
import './Map.css';

const Map: FC = () => {
  useEffect(() => {
    setTimeout(() => createMap(), 100);
  }, [])

  async function createMap() {
    const mapRef1 = document.getElementById("map1")!
    try {
      const newMap1 = await GoogleMap.create({
        element: mapRef1, 
        id: "myMap", 
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!, 
        config: {
          center: {
            lat: 43.0741904,
            lng: -89.3809802,
          },
          zoom: 18,
        }                
      });
      console.log(newMap1);
    } catch(e: any) {
      console.error(e.message);
    }
  }

  return (
    <div style={{height: '400px'}}>
      <capacitor-google-map style={{
        display: 'block',
        width: '100%',
        height: '100%'
      }} id="map1"></capacitor-google-map>
    </div>
  );
};

export default Map;
