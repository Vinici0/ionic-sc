import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonPage,
} from "@ionic/react";
import MenuContent from "../../components/MenuContent";

const EventPage = () => {
  return (
    <>
      <MenuContent />
      <IonPage id="main-content">
        <h2>Confirme para confirmar</h2>
      </IonPage>
    </>
  );
};

export default EventPage;
