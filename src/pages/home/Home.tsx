import { useState } from "react";
import { useHistory } from "react-router";

import {
  IonButton,
  IonButtons,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { notifications } from "ionicons/icons";

import {
  EventDetail,
  LateralMenuList,
  StateObject,
  CarButton,
  Notification,
  Zones,
  MenuContent,
  PannicButtons,
} from "../../components";

import "./Home.css";

function HomePage() {
  const [selectedButton, setSelectedButton] = useState<string>("home");

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
          {selectedButton === "panicbuttons" && <PannicButtons />}
        </IonContent>
      </IonPage>
    </div>
  );
}

export default HomePage;
