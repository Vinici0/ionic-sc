import { useState } from "react";

import {
  IonButtons,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Home.css";

import { EventDetail, LateralMenuList, StateObject } from "../../components/home";
import {MenuContent} from "../../components/MenuContent";
import { Zones } from "../../components/home/Zones";
import CarButton from "../../components/home/CarButton";


const Home: React.FC = () => {
  
  const [selectedButton, setSelectedButton] = useState<string>("home");
  
  const getItemData = (e: React.MouseEvent<HTMLIonListElement, MouseEvent>) => {
    console.log(e.currentTarget);
  };

  return (
    <div className="fon-garet">
      <MenuContent />
      <IonPage id="main-content">

        <IonHeader>
          <IonToolbar className="bg-blue">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
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
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Home;
