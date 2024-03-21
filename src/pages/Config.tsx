import { IonAvatar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./Config.css";
import "../theme/main-custom.css";

import "./Config.css";
export default function ConfigPage() {
  return (
    <>
      {/* <MenuContent /> */}
      <IonPage id="config-page">
      <IonHeader >
        <IonToolbar className="bg-blue">
          <IonTitle>Editar Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent fullscreen className="ion-padding">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <IonAvatar>
              <img
                className="img-avatar"
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
}