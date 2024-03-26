import { useState } from "react";

import {
  IonButton,
  IonButtons,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Home.css";

import {
  EventDetail,
  LateralMenuList,
  StateObject,
} from "../../components/home";
import { MenuContent } from "../../components/MenuContent";
import { Zones } from "../../components/home/Zones";
import CarButton from "../../components/home/CarButton";
import { notifications, notificationsOutline } from "ionicons/icons";
import Notification from "../../components/home/Notification";
import { useHistory } from "react-router";

function HomePage() {
  const [selectedButton, setSelectedButton] = useState<string>("home");

  const getItemData = (e: React.MouseEvent<HTMLIonListElement, MouseEvent>) => {
    console.log(e.currentTarget);
  };

  const history = useHistory();

  return (
    <div className="fon-garet">
      <MenuContent />
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar className="bg-blue">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menú</IonTitle>
            <IonButtons slot="end">
              <IonButton
                onClick={() => {
                  history.push("/page/notification");
                }}
              >
                <IonIcon icon={notifications} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <LateralMenuList
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />

          <IonCardHeader>
            <IonCardTitle>777774 / 2</IonCardTitle>
            <IonCardSubtitle>Sensor ATM</IonCardSubtitle>
          </IonCardHeader>

          {selectedButton === "home" && <CarButton />}
          {selectedButton === "event" && <EventDetail />}
          {selectedButton === "state" && <StateObject />}
          {selectedButton === "zone" && <Zones />}
          {selectedButton === "notification" && <Notification />}
        </IonContent>
      </IonPage>
    </div>
  );
}

export default HomePage;
