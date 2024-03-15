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
  IonMenu,
  IonMenuButton,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonText,
} from "@ionic/react";

import {
  call,
  globe,
  heart,
  home,
  pin,
  star,
  basket,
  barbell,
  trash,
  person,
} from "ionicons/icons";

import "./Home.css";
import { LIST_ITEM, SEGMENT_BUTTONS } from "../../constant/constants";
import MenuContent from "../../components/MenuContent";
import { useHistory } from "react-router";

const Home: React.FC = () => {
  const [segment, setSegment] = useState<"all" | "favorites">("all");

  const getItemData = (e: React.MouseEvent<HTMLIonListElement, MouseEvent>) => {
    console.log(e.currentTarget);
  };

  const pageRef = useRef<HTMLElement>(null);
  const history = useHistory();
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
            <IonSegment scrollable={true} value="heart">
              {SEGMENT_BUTTONS.map((b) => (
                <IonSegmentButton
                  key={b.value}
                  value={b.value}
                  onClick={() => {
                    history.push(b.path);
                  }}
                >
                  <IonText>{b.label}</IonText>
                </IonSegmentButton>
              ))}
            </IonSegment>

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
                {LIST_ITEM.map((item, index) => (
                  <IonItem key={index}>
                    <IonThumbnail slot="start">
                      <img src={item.urlImage} alt="thumbnail" />
                    </IonThumbnail>
                    <IonLabel>{item.label}</IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
