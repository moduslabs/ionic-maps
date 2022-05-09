import { useEffect, FC } from 'react';
import { GoogleMap } from '@capacitor/google-maps';
import { addIncidentsToMap } from '../services/incidents';
import './Map.css';

export interface MapMarkerData {
  title: string;
  latitude: number;
  longitude: number;
  mapId: string;
  markerId: string;
  snippet: string;
}

export interface MapProps {
  onMarkerClick?: (data: MapMarkerData) => void;
}

const Map: FC<MapProps> = ({ onMarkerClick }) => {
  useEffect(() => {
    setTimeout(() => createMap(), 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function createMap() {
    const mapRef1 = document.getElementById('map1')!;
    try {
      const newMap1 = await GoogleMap.create({
        element: mapRef1,
        id: 'myMap',
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
        config: {
          center: {
            lat: 52.372,
            lng: 4.885,
          },
          zoom: 15,
        },
      });
      addIncidentsToMap(newMap1);

      if (onMarkerClick) {
        newMap1.setOnMarkerClickListener(onMarkerClick);
      }
      // @ts-ignore
      window.newMap1 = newMap1;
    } catch (e: any) {
      console.error(e.message);
    }
  }

  return (
    <div style={{ height: '100vh' }}>
      <capacitor-google-map
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
        id="map1"
      ></capacitor-google-map>
    </div>
  );
};

export default Map;
