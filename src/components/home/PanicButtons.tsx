import { IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import {
  alertCircleOutline,
  checkmarkCircleOutline,
  closeOutline,
  flameOutline,
  helpCircleOutline,
  megaphoneOutline,
} from "ionicons/icons";

import "./Statyles.css";

function PannicButtons() {
  return (
    <>
      <div style={{ border: "1px solid black" }} className="ion-margin">
        <IonGrid className="pannic-buttons">
          <IonRow class="ion-justify-content-center ion-text-center">
            <IonCol>
              <IonRow class="ion-align-items-center ion-justify-content-center">
                <IonIcon
                  icon={checkmarkCircleOutline}
                  color="success"
                  className="ion-margin-end"
                />
                Norma
              </IonRow>
              <IonRow class="ion-align-items-center ion-justify-content-center">
                <IonIcon
                  icon={flameOutline}
                  color="danger"
                  className="ion-margin-end"
                />
                Fuego
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow class="ion-align-items-center ion-justify-content-center">
                <IonIcon
                  icon={megaphoneOutline}
                  color="primary"
                  className="ion-margin-end"
                />
                Alarma
              </IonRow>
              <IonRow class="ion-align-items-center ion-justify-content-center">
                <IonIcon
                  icon={alertCircleOutline}
                  color="primary"
                  className="ion-margin-end"
                />
                Defecto
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow class="ion-align-items-center ion-justify-content-center">
                <IonIcon
                  icon={closeOutline}
                  color="warning"
                  className="ion-margin-end"
                />
                Inactivo
              </IonRow>
              <IonRow class="ion-align-items-center ion-justify-content-center">
                <IonIcon
                  icon={helpCircleOutline}
                  color="warning"
                  className="ion-margin-end"
                />
                Desc.
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow></IonRow>
        </IonGrid>
      </div>
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
            <IonCol>
              <IonIcon icon={checkmarkCircleOutline} color="success" />{" "}
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>2</IonCol>
            <IonCol>Importante</IonCol>
            <IonCol>
              <IonIcon icon={checkmarkCircleOutline} color="success" />{" "}
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </>
  );
}

export default PannicButtons;
