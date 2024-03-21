import { useState } from "react";

import {
  IonButtons,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import {MenuContent} from "../components/MenuContent";
import { LIST_ITEM } from "../constant/constants";
import { EventDetail, LateralMenuList, StateObject } from "../components/home";
import { Zones } from "../components/home/Zones";
import "./Home.css";
import CarButton from "../components/home/CarButton";

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

          {/* {selectedButton === "home" &&
            LIST_ITEM.map((item, index) => (
              <IonItem key={index}>
                <IonThumbnail slot="start">
                  <img src={item.urlImage} alt="thumbnail" />
                </IonThumbnail>
                <IonLabel>{item.label}</IonLabel>
              </IonItem>
            ))} */}
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
