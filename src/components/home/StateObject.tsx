import { IonText, IonGrid, IonRow, IonCol, IonIcon } from "@ionic/react";
import { checkmarkCircleOutline } from "ionicons/icons";

export const StateObject = () => {
  return (
    <>
      <IonText color="primary">
        <h1>StateObject</h1>
      </IonText>

      <IonGrid>
        <IonRow class="ion-justify-content-between">
          <IonCol>
            <p>Tipo</p>
            <p>Alimentacion Principal</p>
            <p>Alimentacion Reserva</p>
            <p>Regimen de prueba</p>
            <p>Nivel de signal</p>
            <p>Version del tipo de dispositivo</p>
          </IonCol>
          <IonCol class="ion-text-right">
            <p>
              <IonIcon icon={checkmarkCircleOutline} color="success" />
            </p>
            <p>
              <IonIcon icon={checkmarkCircleOutline} color="success" />
            </p>
            <p>
              <IonIcon icon={checkmarkCircleOutline} color="success" />
            </p>
            <p>
              <IonIcon icon={checkmarkCircleOutline} color="success" />
            </p>
            <p>
              <IonIcon icon={checkmarkCircleOutline} color="success" />
            </p>
            <p>
              <IonIcon icon={checkmarkCircleOutline} color="success" />
            </p>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};
