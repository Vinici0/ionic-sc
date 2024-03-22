import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import {
  alertCircle,
  documentText,
  helpCircle,
  lockClosed,
  logOut,
  notifications,
  person,
} from "ionicons/icons";
import { useHistory } from "react-router";

function SettingPage() {
  const history = useHistory();

  return (
    <>
      <IonPage id="config-page">
        <IonHeader>
          <IonToolbar className="bg-blue">
            <IonTitle>Editar Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen className="ion-padding">
          <div>Cuenta</div>
          <div>
            <IonList className="custom-background">
              <IonItem
                className="custom-background"
                lines="none"
                button={true}
                onClick={() => history.push("/page/settingTabs/profile", { direction: "forward" })}
              >
                <IonIcon slot="start" icon={person} />
                <IonLabel>Editar Perfil</IonLabel>
              </IonItem>
              <IonItem className="custom-background" lines="none" button={true}>
                <IonIcon slot="start" icon={notifications} />
                <IonLabel>Notificaciones</IonLabel>
              </IonItem>
              <IonItem className="custom-background" lines="none" button={true}>
                <IonIcon slot="start" icon={lockClosed} />
                <IonLabel>Privacidad</IonLabel>
              </IonItem>
            </IonList>
          </div>

          <div className="ion-padding-top">Soporte & Ayuda</div>
          <div>
            <IonList className="custom-background">
              <IonItem className="custom-background" lines="none" button={true}>
                <IonIcon slot="start" icon={helpCircle} />
                <IonLabel>Soporte</IonLabel>
              </IonItem>
              <IonItem className="custom-background" lines="none" button={true}>
                <IonIcon slot="start" icon={documentText} />
                <IonLabel>Términos y Políticas</IonLabel>
              </IonItem>
            </IonList>
          </div>

          <div className="ion-padding-top">Acciones</div>
          <div>
            <IonList className="custom-background">
              <IonItem className="custom-background" lines="none" button={true}>
                <IonIcon slot="start" icon={alertCircle} />
                <IonLabel>Reportar Problema</IonLabel>
              </IonItem>
              <IonItem className="custom-background" lines="none" button={true}>
                <IonIcon slot="start" icon={logOut} />
                <IonLabel>Cerrar Sesión</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
}

export default SettingPage;
