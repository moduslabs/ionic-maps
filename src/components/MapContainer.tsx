import { useIonToast } from '@ionic/react';
import Map from './Map';
import type { MapMarkerData } from './Map';
import { categoryLabels, icons } from '../services/incidents';
// import './ExploreContainer.css';

interface ContainerProps {}

const MapContainer: React.FC<ContainerProps> = () => {
  const [present, dismiss] = useIonToast();

  const onMarkerClick = async ({ title }: MapMarkerData) => {
    await dismiss();
    present({
      message: `${icons.get(title)} ${categoryLabels.get(title)}`,
      position: 'top',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
        },
      ],
    });
  };
  return (
    <div className="container">
      <Map onMarkerClick={onMarkerClick} />
    </div>
  );
};

export default MapContainer;
