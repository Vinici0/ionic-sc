import { useEffect } from "react";

import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import {
  cameraOutline,
  cameraSharp,
  chevronForwardOutline,
} from "ionicons/icons";

import { useAppDispatch } from "../../store";
import { setShowTabs } from "../../store/navigation/slice";
import { useHistory } from "react-router";

import "./Profile.css";

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setShowTabs(false));

    return () => {
      dispatch(setShowTabs(true));
    };
  }, [dispatch]);

  const history = useHistory();

  const user = {
    nombre: "Juan",
    correo: "juan@example.com",
    bibliografia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  return (
    <>
      <IonPage id="config-page">
        <IonHeader class="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton className="black-back-button"></IonBackButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen className="ion-padding-top">
          <IonAvatar className="item-avatar relative">
            <img
              className="img-avatar"
              alt="Silhouette of a person's head"
              src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            />

            <button className="absolute bottom-right-fixed">
              <IonIcon icon={cameraSharp} />
            </button>
          </IonAvatar>

          <div className="container-avatar">
            <h3 className="color-title">Actualizar foto de perfil</h3>
          </div>

          <div className="ion-padding-top">
            <IonList>
              <IonItem lines="full" />
              <IonItemSlidingProfile
                typeUdate="Nombre"
                userValue={user.nombre}
                history={history}
                onClick={() => history.push(`/page/setting/editName`)}
              />

              <IonItemSlidingProfile
                typeUdate="Contraseña"
                userValue="*********"
                history={history}
                onClick={() => history.push(`/page/setting/password`)}
              />
              
              <IonItemSlidingProfile
                typeUdate="Bibliografía"
                userValue={user.bibliografia}
                history={history}
                onClick={() => history.push(`/page/edit/`)}
              />

              <IonItemSlidingProfile
                typeUdate="Cuenta"
                color="color-label"
                userValue="Ir a mi cuenta"
                history={history}
                onClick={() => history.push(`/page/myAccount`)}
              />
            </IonList>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default ProfilePage;

interface IonItemSlidingProfileProps {
  typeUdate: string;
  userValue: string;
  history: any;
  color?: string;
  onClick: () => void;
}

const IonItemSlidingProfile = ({
  typeUdate = "Perfil",
  userValue,
  color,
  history,
  onClick,
}: // onClick,
IonItemSlidingProfileProps) => {
  return (
    <IonItemSliding>
      {/*  path="/page/settingTabs/editName" */}
      <IonItem button onClick={() => onClick()} className="full-width">
        <IonGrid class="ion-padding-horizontal">
          <IonRow>
            <IonCol>
              <IonLabel>
                <strong>{typeUdate}</strong>
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel
                style={{
                  color: color ? "#12448f" : "black",
                  fontSize: "0.9rem",
                }}
              >
                {userValue}
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonIcon
          icon={chevronForwardOutline}
          slot="end"
          style={{ color: "gray" }}
        />
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption onClick={() => console.log("Edit clicked")}>
          Editar
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};
