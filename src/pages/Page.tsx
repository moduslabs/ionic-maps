import { IonContent, IonPage } from '@ionic/react';
import MapContainer from '../components/MapContainer';
import './Page.css';

const Page: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <MapContainer />
      </IonContent>
    </IonPage>
  );
};

export default Page;
