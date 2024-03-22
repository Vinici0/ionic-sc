import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonCardContent,
} from "@ionic/react";
import MenuContent from "../../components/MenuContent";
import { LIST_ITEM } from "../../constant/constants";
import { heart, pin, star, call, globe, basket, barbell } from "ionicons/icons";

const HomePage = () => {
  const getItemData = (e: React.MouseEvent<HTMLIonListElement, MouseEvent>) => {
    console.log(e.currentTarget);
  };
  return (
    <>
      <IonCardContent>
        <IonTitle>Home Page</IonTitle>
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
        {/* <IonCard>
            <IonSegment scrollable={true} value="heart">
              {SEGMENT_BUTTONS.map((b) => (
                <IonSegmentButton
                  key={b.value}
                  value={b.value}
                  onClick={() => {
                    // history.push(b.path);
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
              <IonText>Event Page</IonText>
            </IonCardContent>
          </IonCard> */}
      </IonCardContent>
    </>
  );
};

export default HomePage;
