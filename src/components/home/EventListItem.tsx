
import {
  IonItemSliding,
  IonItem,
  IonLabel,
  IonItemOptions,
  IonItemOption,
} from "@ionic/react";

import { EventDetailProps } from "../../interfaces/interfaces";

interface EventDetailObjectProps {
  eventDetailProps: EventDetailProps;
  number: number;
}

function EventListItem( 
  eventDetailObjectProps: EventDetailObjectProps
) {
  const { eventDetailProps } = eventDetailObjectProps;
  return (
    <IonItemSliding color="light">
      <IonItem routerLink={`/tabs/schedule/${eventDetailProps.id}`}>
        <IonLabel>
          <h3>{eventDetailProps.event}</h3>
          <p>
            {eventDetailProps.date} &mdash;&nbsp;
            {eventDetailProps.description}
          </p>
        </IonLabel>
      </IonItem>

      <IonItemOptions>
        <IonItemOption color="favorite">Favorite</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};
export default EventListItem;
