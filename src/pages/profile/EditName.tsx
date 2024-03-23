import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonInput,
  IonText,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
} from "@ionic/react";
// import "./Profile.css";
import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { setShowTabs } from "../../store/navigation/slice";
import { checkmarkOutline } from "ionicons/icons";
function EditNamePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setShowTabs(false));

    return () => {
      dispatch(setShowTabs(true));
    };
  }, [dispatch]);

  const defaultValueInput = {
    name: "Juan",
    lastname: "Perez",
  };

  return (
    <>
      <IonPage id="config-page">
        <IonHeader class="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton className="black-back-button"></IonBackButton>
            </IonButtons>
            <IonTitle>Editar Nombre</IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon icon={checkmarkOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem>
            <IonLabel position="floating">Nombre</IonLabel>
            <IonItem>
              <IonInput labelPlacement="floating" value={defaultValueInput.name}>
                <div slot="label">
                  <IonLabel>Nombre</IonLabel>
                </div>
              </IonInput>

              </IonItem>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Apellido</IonLabel>
            <IonItem>
              <IonInput labelPlacement="floating" value={defaultValueInput.lastname}>
                <div slot="label">
                  <IonLabel>Apellido</IonLabel>
                </div>
              </IonInput>
            </IonItem>
          </IonItem>
        </IonContent>
      </IonPage>
    </>
  );
}

export default EditNamePage;
