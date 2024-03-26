import {
  IonCheckbox,
  IonItem,
  IonLabel,
  IonList,
  IonRadio,
  IonRadioGroup,
} from "@ionic/react";
import { useState } from "react";

import { useForm } from "react-hook-form";
const notificationsRadio = [
  {
    label: "Alarma",
    value: "1",
  },
  {
    label: "Restauración",
    value: "2",
  },
  {
    label: "Armado",
    value: "3",
  },
  {
    label: "Desarmado",
    value: "4",
  },
  {
    label: "Pérdida de alimentación principal",
    value: "5",
  },
  {
    label: "Norma de alimentación principal",
    value: "6",
  },
  {
    label: "Problemas con la batería",
    value: "7",
  },
  {
    label: "Norma de la batería",
    value: "8",
  },
  {
    label: "Fuego",
    value: "9",
  },
  {
    label: "Funcionamiento defectuoso",
    value: "10",
  },
  {
    label: "Violación del regimen de prueba",
    value: "11",
  },
  {
    label: "Desactivar zona",
    value: "12",
  },
  {
    label: "Activar zona",
    value: "13",
  },
  {
    label: "Alarma médica",
    value: "14",
  },
];

interface RadioSelect {
  radio: string;
}

function Notification() {
  const handleRadioChange = (e: RadioSelect) => {
    console.log(e);
  };
  return (
    <>
      <div>
        <IonList>
          {notificationsRadio.map((notification, index) => (
            <IonItem key={index}>
              <IonLabel
                style={{
                  flex: 1,
                  fontSize: "1rem",
                }}
              >
                {notification.label}
              </IonLabel>
              <IonCheckbox
                slot="end"
                value={notification.value}
                aria-label={notification.label}
              ></IonCheckbox>
            </IonItem>
          ))}
        </IonList>
      </div>
    </>
  );
}

export default Notification;
