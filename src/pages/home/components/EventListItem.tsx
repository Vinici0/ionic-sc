import React, { useRef } from "react";
import {
  IonItemSliding,
  IonItem,
  IonLabel,
  IonItemOptions,
  IonItemOption,
} from "@ionic/react";

import { EventDetailProps } from "../../../interfaces/interfaces";

interface EventDetailObjectProps {
  eventDetailProps: EventDetailProps;
  number: number;
}

export const EventListItem: React.FC<EventDetailObjectProps> = (
  eventDetailObjectProps
) => {
  const { eventDetailProps } = eventDetailObjectProps;
  return (
    <IonItemSliding>
      <IonItem routerLink={`/tabs/schedule/${eventDetailProps.id}`}>
        <IonLabel>
          <h3>{eventDetailProps.zone}</h3>
          <p>
            {eventDetailProps.zone}&mdash;&nbsp;
            {eventDetailProps.description}&mdash;&nbsp;
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
