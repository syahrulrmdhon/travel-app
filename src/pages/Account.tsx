import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import AccountContainer from "../components/AccountContainer";
import './Account.css';

const Account: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <AccountContainer />
      </IonContent>
    </IonPage>
  );
};

export default Account;
