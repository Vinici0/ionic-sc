import { useEffect } from "react";

import {
  IonAvatar,
  IonBackButton,
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
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { cameraOutline, chevronForwardOutline } from "ionicons/icons";

import { useAppDispatch } from "../../store";
import { setShowTabs } from "../../store/navigation/slice";
import { useHistory } from "react-router";

import "./Profile.css";

const Profile = () => {
  
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <IonAvatar className="avatar-with-gradient">
              <img
                className="img-avatar"
                alt="Silhouette of a person's head"
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              />
            </IonAvatar>

            <IonIcon
              icon={cameraOutline}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "30px",
                color: "white",
              }}
            />
          </div>

          <div className="ion-padding-top">
            <IonList>
              <IonItemSlidingProfile
                typeUdate="Nombre"
                userValue={user.nombre}
                history={history}
                onClick={(path) => history.push(`/page/edit/${path}`)}
              />
              <IonItemSlidingProfile
                typeUdate="Correo"
                userValue={user.correo}
                history={history}
                onClick={(path) => history.push(`/page/edit/${path}`)}
              />
              {/* Contrasena */}
              <IonItemSlidingProfile
                typeUdate="Contraseña"
                userValue="*********"
                history={history}
                onClick={(path) => history.push(`/page/edit/${path}`)}
              />

              <IonItemSlidingProfile
                typeUdate="Bibliografía"
                userValue={user.bibliografia}
                history={history}
                onClick={(path) => history.push(`/page/edit/${path}`)}
              />
            </IonList>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Profile;

interface IonItemSlidingProfileProps {
  typeUdate: string;
  userValue: string;
  history: any;
  onClick: (path: string) => void;
}
const IonItemSlidingProfile = ({
  typeUdate = "Perfil",
  userValue,
  history,
}: // onClick,
IonItemSlidingProfileProps) => {
  return (
    <IonItemSliding>
      <IonItem
      //  button onClick={() => onClick(user.nombre)}
      >
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel>
                <strong>{typeUdate}</strong>
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>{userValue}</IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonIcon
          icon={chevronForwardOutline}
          slot="end"
          style={{ color: "gray" }}
        />{" "}
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption onClick={() => console.log("Edit clicked")}>
          Editar
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};
