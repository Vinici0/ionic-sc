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
  IonText,
} from "@ionic/react";
import "./Menu.css";
import { useLocation } from "react-router-dom";
import {
  cogOutline,
  cogSharp,
  exitOutline,
  exitSharp,
  fileTrayFullOutline,
  fileTrayFullSharp,
  handLeftOutline,
  handLeftSharp,
  homeOutline,
  homeSharp,
  peopleCircleOutline,
  peopleCircleSharp,
  peopleOutline,
  peopleSharp,
  personOutline,
  personSharp,
} from "ionicons/icons";
import { AppRouterProps } from "../../interfaces/interfaces";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  permissions: Array<string>;
}

const appPages: AppPage[] = [
  {
    title: "Inicio",
    url: "/page/home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
    permissions: ["sistemas", "administracion", "copropietario", "constructor"],
  },
  {
    title: "Registros",
    url: "/page/registros",
    iosIcon: fileTrayFullOutline,
    mdIcon: fileTrayFullSharp,
    permissions: ["sistemas", "administracion", "copropietario", "constructor"],
  },
  {
    title: "Mis Visitantes",
    url: "/page/visitantes",
    iosIcon: peopleOutline,
    mdIcon: peopleSharp,
    permissions: ["sistemas", "copropietario", "constructor", "administracion"],
  },
  {
    title: "Autorizados",
    url: "/page/autorizadores",
    iosIcon: peopleCircleOutline,
    mdIcon: peopleCircleSharp,
    permissions: ["sistemas", "administracion"],
  },
  {
    title: "Visitantes por Autorizar",
    url: "/page/visitantes/state/por_validar",
    iosIcon: handLeftOutline,
    mdIcon: handLeftSharp,
    permissions: ["sistemas", "administracion"],
  },
  {
    title: "Perfil",
    url: "/page/perfil",
    iosIcon: personOutline,
    mdIcon: personSharp,
    permissions: ["sistemas", "administracion", "copropietario", "constructor"],
  },
  {
    title: "Configuración",
    url: "/page/configuracion",
    iosIcon: cogOutline,
    mdIcon: cogSharp,
    permissions: ["sistemas", "administracion"],
  },
];

const Menu: React.FC<AppRouterProps> = ({ user }) => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent className="ion-padding-top ion-padding-bottom relative">
        <IonList id="inbox-list">
          <div>
            <div className="ion-text-center ion-margin-bottom">
              <span className="text-muted">
                {/* {selectedServer?.name?.toUpperCase()} */}
              </span>
            </div>
            <div className="flex ion-justify-content-center ion-margin-bottom">
              <IonAvatar> 
                <img
                  alt="profile-picture"
                  src={
                    user?.image_1920 != ""
                      ? user?.image_1920
                      : "assets/images/avatar.svg"
                  }
                />
              </IonAvatar>
            </div>
            <IonListHeader>{user?.name}</IonListHeader>
            <IonNote>
              {user?.correo && user?.correo}
              {user?.correo && <br />}
              {user?.telefono && user?.telefono}
            </IonNote>
          </div>
          <IonMenuToggle autoHide={false}>
            {appPages.map((appPage, index) => {
              if (
                appPage.permissions.find((perm) => perm === user?.permission)
              ) {
                return (
                  <IonItem
                    key={index}
                    className={
                      location.pathname === appPage.url ? "selected" : ""
                    }
                    routerLink={appPage.url}
                    routerDirection="none"
                    lines="none"
                    detail={false}
                  >
                    <IonIcon
                      aria-hidden="true"
                      slot="start"
                      ios={appPage.iosIcon}
                      md={appPage.mdIcon}
                    />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                );
              }
            })}
          </IonMenuToggle>
        </IonList>
        <div className="w-full ion-text-center absolute bottom-3 flex ion-justify-content-center">
          <IonButton
            id="present-alert"
            fill="outline"
            className="close-session"
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
                //   handler: () => closeSession(),
              },
            ]}
          ></IonAlert>
        </div>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
