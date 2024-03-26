import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { setShowTabs } from "../../store/navigation/slice";
import image from '../../assets/images/notification.svg';


function NotificationPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setShowTabs(false));

    return () => {
      dispatch(setShowTabs(true));
    };
  }, [dispatch]);
  return (
    <>
      <IonPage id="notification-page">

        <IonHeader class="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton className="black-back-button"></IonBackButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <img src={image} alt="Login" style={{ width: '50%', height: 'auto' }} />
                <IonText style={{ marginTop: '20px' }}>No hay notificaciones disponibles</IonText>
            </div>
        </IonContent>
      </IonPage>
    </>
  );
}

export default NotificationPage;
