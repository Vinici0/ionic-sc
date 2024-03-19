import { IonText, IonGrid, IonRow, IonCol, IonIcon } from "@ionic/react";
import { checkmarkCircleOutline } from "ionicons/icons";

export const Zones = () => {
  return (
    <>
      {/* <IonText color="primary">
        <h1>Zones</h1>
      </IonText> */}

      <IonGrid>
        <div className="conteiner">
          <IonRow class="ion-justify-content-between ion-text-center">
            <IonCol class="">
              <p>Zona</p>
              <p>Estado</p>
            </IonCol>
            <IonCol>
              <p>Zona</p>
              <p>Estado</p>
            </IonCol>
            <IonCol>
              <p>Zona</p>
              <p>Estado</p>
            </IonCol>
          </IonRow>
        </div>
      </IonGrid>

      <div
        className="bg-color
        ion-padding ion-margin-top ion-margin-bottom ion-ion-margin-vertical 
      "
      >
        <IonGrid class="ion-justify-content-between ion-text-center">
          <IonRow>
            <IonCol>#</IonCol>
            <IonCol>Nombre</IonCol>
            <IonCol>Estado</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>1</IonCol>
            <IonCol>Probando como va</IonCol>
            {/* Icono de visto verde */}
            <IonCol>
              <IonIcon icon={checkmarkCircleOutline} color="success" />{" "}
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol >2</IonCol>
            <IonCol>Importante</IonCol>
            <IonCol>
              <IonIcon icon={checkmarkCircleOutline} color="success" />{" "}
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </>
  );
};
