import { IonContent, IonHeader, IonItem, IonMenu, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, IonIcon, IonMenuToggle, IonButton, IonMenuButton, IonButtons, IonLabel, IonList } from '@ionic/react';

const feed: React.FC =()=>{

    const games = [
        {name:'Pokemon Go'},
        {name:'The Legend of Zelda'},
        {name:'Super Mario World'},
        {name:'Bomberman'},
        {name:'Pac-Man'},
        {name:'Mega Man X'}
    ]
  return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                    <IonTitle>
                        Feed
                    </IonTitle>
                </IonButtons>
            </IonToolbar>
        </IonHeader>

        <IonContent className='ion-padding'>
       <IonList>
            {games.map((item, index) =>(
                <IonItem key={index}>
                   <IonLabel>{item.name}</IonLabel> 
                </IonItem>
            ))}

</IonList>


        </IonContent>
    </IonPage>

  );
};

export default feed;