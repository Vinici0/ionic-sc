import { useHistory } from "react-router";

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

import "./Setting.css";

function SettingPage() {
  const history = useHistory();
  const signOut = () => {
    history.push("/page/login");
  };

  const openLink = () => {
    window.open("https://www.gruposcanner.com/gsaxios/privacidad", "_blank");
  };

  return (
    <>
      <IonPage id="config-page">
        <IonHeader>
          <IonToolbar className="bg-blue">
            <IonTitle>Configuración</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen className="ion-padding">
          <div className="ion-padding-bottom">Cuenta</div>
          <div>
            <IonList className="custom-background border-custom">
              <IonItem
                className="custom-background"
                lines="none"
                button={true}
                onClick={() =>
                  history.push("/page/setting/profile", {
                    direction: "forward",
                  })
                }
              >
                <IonIcon slot="start" icon={person} />
                <IonLabel>Editar Perfil</IonLabel>
              </IonItem>
              <IonItem
                className="custom-background"
                lines="none"
                button={true}
                onClick={() =>
                  history.push("/page/notification", {
                    direction: "forward",
                  })
                }
              >
                <IonIcon slot="start" icon={notifications} />
                <IonLabel>Notificaciones</IonLabel>
              </IonItem>
              <IonItem className="custom-background" lines="none" button={true}>
                <IonIcon slot="start" icon={lockClosed} />
                <IonLabel>Privacidad</IonLabel>
              </IonItem>
            </IonList>
          </div>

          <div className="ion-padding-top ion-padding-bottom">
            Soporte & Ayuda
          </div>
          <div>
            <IonList className="custom-background border-custom">
              <IonItem className="custom-background" lines="none" button={true}>
                <IonIcon slot="start" icon={helpCircle} />
                <IonLabel>Soporte</IonLabel>
              </IonItem>
              <IonItem
                className="custom-background"
                lines="none"
                button={true}
                onClick={openLink}
              >
                <IonIcon slot="start" icon={documentText} />
                <IonLabel>Términos y Políticas</IonLabel>
              </IonItem>
            </IonList>
          </div>

          <div className="ion-padding-top ion-padding-bottom">Acciones</div>
          <div>
            <IonList className="custom-background border-custom">
              <IonItem className="custom-background" lines="none" button={true}>
                <IonIcon slot="start" icon={alertCircle} />
                <IonLabel>Reportar Problema</IonLabel>
              </IonItem>
              <IonItem
                className="custom-background"
                lines="none"
                button={true}
                onClick={() => signOut()}
              >
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
