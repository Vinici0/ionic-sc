import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
} from "@ionic/react";
import "./Profile.css";
import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { setShowTabs } from "../../store/navigation/slice";
function EditNamePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setShowTabs(false));

    return () => {
      dispatch(setShowTabs(true));
    };
  }, [dispatch]);

  return (
    <>
      <IonPage id="config-page">
        <IonHeader class="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton className="black-back-button"></IonBackButton>
            </IonButtons>
            {/* Boton derecha */}
            <IonTitle>Editar Nombre</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonPage>
      <IonContent>
        <IonTitle>Para editar Name</IonTitle>
      </IonContent>
    </>
  );
}

export default EditNamePage;
