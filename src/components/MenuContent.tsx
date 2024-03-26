import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import "../../src/theme/main-custom.css";
import "./ExploreContainer.css";
import "../../src/theme/variables.css";

import {
  exitOutline,
  exitSharp,
  homeOutline,
  notificationsOutline,
  shareOutline,
} from "ionicons/icons";
import { useHistory } from "react-router";

export const MenuContent: React.FC = () => {
  const history = useHistory();

  const signOut = () => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
    history.push("/page/login");
  };

  return (
    <IonMenu contentId="main-content">
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent className="ion-padding-top ion-padding-bottom relative">
        <IonList id="inbox-list">
          <div>
            <div className="flex ion-justify-content-start ion-margin-bottom">
              <IonAvatar>
                <img
                  alt="profile-picture"
                  src="https://img.freepik.com/free-photo/man-smiling-with-hands-hips_1187-3017.jpg"
                  // src={user?.image_1920 != "" ? user?.image_1920 : "assets/images/avatar.svg"}
                />
              </IonAvatar>
            </div>
            <IonListHeader>
              {/* {user?.name} */}
              Vinicio Borja
            </IonListHeader>
            <IonNote>
              vinicio.borja10@gmail.com
              {"\n"}
              {/* {user?.telefono} */}
              0939225130
            </IonNote>
          </div>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/home" routerDirection="none" lines="none">
              <IonIcon slot="start" icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem
              routerLink="/notifications"
              routerDirection="none"
              lines="none"
            >
              <IonIcon slot="start" icon={notificationsOutline} />
              <IonLabel>Notificaciones</IonLabel>
            </IonItem>
            <IonItem routerLink="/share" routerDirection="none" lines="none">
              <IonIcon slot="start" icon={shareOutline} />
              <IonLabel>Compartir</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
        <div className="w-full ion-text-center bottom-3 flex ion-justify-content-center ionc">
          <IonButton
            id="present-alert"
            fill="outline"
            className="close-session"
            onClick={() => signOut()}
          >
            Cerrar sesión
            <IonIcon
              aria-hidden="true"
              slot="end"
              ios={exitOutline}
              md={exitSharp}
            />
          </IonButton>
          <IonAlert
            header="¿Está seguro que desea cerrar sesión?"
            trigger="present-alert"
            buttons={[
              {
                text: "Cancelar",
                role: "cancel",
              },
              {
                text: "OK",
                role: "confirm",
              },
            ]}
          ></IonAlert>
        </div>
      </IonContent>
    </IonMenu>
  );
};
