import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './Home.css';
import HomeContainer from '../components/HomeContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <HomeContainer name="Home"/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
