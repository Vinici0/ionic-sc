import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
// import './Tab2.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
           <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <strong>{"awdawda"}</strong>
          <p>
            Explore{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ionicframework.com/docs/components"
            >
              UI Components
            </a>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
