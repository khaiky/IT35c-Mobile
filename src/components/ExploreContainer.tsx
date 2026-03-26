import './ExploreContainer.css';
import { IonButton, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonToast } from '@ionic/react';
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
     return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inline Toast</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-toast" expand="block">
          Open
        </IonButton>
        <p>This toast example uses triggers to automatically open a toast when the button is clicked.</p>
        <IonToast trigger="open-toast" message="This toast will disappear after 5 seconds" duration={5000}></IonToast>
      </IonContent>
    </IonPage>
  );
};

export default ExploreContainer;
