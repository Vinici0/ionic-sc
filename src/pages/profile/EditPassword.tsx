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
  function EditPasswordPage() {
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(setShowTabs(false));
  
      return () => {
        dispatch(setShowTabs(true));
      };
    }, [dispatch]);
  
    const defaultValueInput = {
        currentPassword: "",
        newPassword: "",
        repeatPassword: "",
        };
  
    return (
      <>
        <IonPage id="config-page">
          <IonHeader class="ion-no-border">
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton className="black-back-button"></IonBackButton>
              </IonButtons>
              <IonTitle>Editar Contraseña</IonTitle>
              <IonButtons slot="end">
                <IonButton>
                  <IonIcon icon={checkmarkOutline} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
        <IonContent>
            <IonItem lines="full" style={{ margin: '10px 0' }}>
                <IonLabel 
                aria-label="current-password"
                position="floating">Contraseña actual</IonLabel>
                <IonInput 
                aria-label="current-password"
                type="password" value={defaultValueInput.currentPassword}></IonInput>
            </IonItem>

            <IonItem lines="full" style={{ margin: '10px 0' }}>
                <IonLabel aria-label="new-password" position="floating">Nueva contraseña</IonLabel>
                <IonInput aria-label="new-password" type="password" value={defaultValueInput.newPassword}></IonInput>
            </IonItem>

            <IonItem lines="full" style={{ margin: '10px 0' }}>
                <IonLabel 
                aria-label="repeat-password"
                    position="floating">Repetir contraseña</IonLabel>
                <IonInput 
                aria-label="repeat-password"
                type="password" value={defaultValueInput.repeatPassword}></IonInput>
            </IonItem>

        </IonContent>
        </IonPage>
      </>
    );
  }
  
  export default EditPasswordPage;
  