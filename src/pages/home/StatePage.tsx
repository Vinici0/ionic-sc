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
import { LIST_ITEM, SEGMENT_BUTTONS } from "../../constant/constants";

const StatePage = () => {
  return (
    <>
      <IonCardContent>

        <IonTitle>State Page</IonTitle>
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

export default StatePage;
