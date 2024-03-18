import { useRef, useState } from "react";
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";


import MenuContent from "../../components/MenuContent"
import { LIST_ITEM } from "../../constant/constants"
import { EventDetail, LateralMenuList, StateObject } from "./components";


const Home: React.FC = () => {

  const [selectedButton, setSelectedButton] = useState<string>("all");

  const getItemData = (e: React.MouseEvent<HTMLIonListElement, MouseEvent>) => {
    console.log(e.currentTarget);
  };

  return (
    <>
      <MenuContent />
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonCard>
            <LateralMenuList
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
            />

            <IonCardHeader>
              <IonCardTitle>777774 / 2</IonCardTitle>
              <IonCardSubtitle>Sensor ATM</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              <IonList
                onClick={(e) => {
                  getItemData(e);
                }}
              >
                {selectedButton === "event" && <EventDetail />}

                {selectedButton === "home" &&
                  LIST_ITEM.map((item, index) => (
                    <IonItem key={index}>
                      <IonThumbnail slot="start">
                        <img src={item.urlImage} alt="thumbnail" />
                      </IonThumbnail>
                      <IonLabel>{item.label}</IonLabel>
                    </IonItem>
                  ))}

                {selectedButton === "state" && <StateObject />}

              </IonList>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
