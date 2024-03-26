import { IonItemDivider, IonLabel, IonTitle } from "@ionic/react";

import "./Statyles.css";
import { EventDetailProps } from "../../interfaces/interfaces";
import { EventListItem } from "./EventListItem";

const EventDetailList: EventDetailProps[] = [
  {
    id: 1,
    date: "13/03/24 14:21:08",
    zone: "Zona 1",
    event: "Problema de bateria",
    description: "Se ha detectado un problema con la bateria",
  },
  {
    id: 2,
    date: "13/03/24 14:21:08",
    zone: "Zona 1",
    event: "Problema de bateria",
    description: "Se ha detectado un problema con la bateria",
  },
  {
    id: 3,
    date: "13/03/24 14:21:08",
    zone: "Zona 1",
    event: "Problema de bateria",
    description: "Se ha detectado un problema con la bateria",
  },
  {
    id: 4,
    date: "13/03/24 14:21:08",
    zone: "Zona 1",
    event: "Problema de bateria",
    description: "Se ha detectado un problema con la bateria",
  },
  {
    id: 5,
    date: "13/03/24 14:21:08",
    zone: "Zona 1",
    event: "Problema de bateria",
    description: "Se ha detectado un problema con la bateria",
  },
  {
    id: 6,
    date: "13/03/24 14:21:08",
    zone: "Zona 1",
    event: "Problema de bateria",
    description: "Se ha detectado un problema con la bateria",
  },
  {
    id: 7,
    date: "13/03/24 14:21:08",
    zone: "Zona 1",
    event: "Problema de bateria",
    description: "Se ha detectado un problema con la bateria",
  },
  {
    id: 8,
    date: "13/03/24 14:21:08",
    zone: "Zona 1",
    event: "Problema de bateria",
    description: "Se ha detectado un problema con la bateria",
  },
];

export const EventDetail: React.FC = () => {
  return (
    <>
      <IonItemDivider sticky>
        <IonLabel>15/14</IonLabel>
      </IonItemDivider>
      {EventDetailList.map(
        (eventDetailProps: EventDetailProps, index: number) => (
          <EventListItem
            key={index}
            eventDetailProps={eventDetailProps}
            number={index}
          />
        )
      )}
    </>
  );
};
