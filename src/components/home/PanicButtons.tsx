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
                  style={{ marginRight: "10px" }}
                />
                Norma
              </IonRow>
              <IonRow class="ion-align-items-center ion-justify-content-center">
                <IonIcon
                  icon={flameOutline}
                  color="danger"
                  style={{ marginRight: "10px" }}
                />
                Fuego
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow class="ion-align-items-center ion-justify-content-center">
                <IonIcon
                  icon={megaphoneOutline}
                  color="primary"
                  style={{ marginRight: "10px" }}
                />
                Alarma
              </IonRow>
              <IonRow class="ion-align-items-center ion-justify-content-center">
                <IonIcon
                  icon={alertCircleOutline}
                  color="primary"
                  style={{ marginRight: "10px" }}
                />
                Defecto
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow class="ion-align-items-center ion-justify-content-center">
                <IonIcon
                  icon={closeOutline}
                  color="warning"
                  style={{ marginRight: "10px" }}
                />
                Inactivo
              </IonRow>
              <IonRow class="ion-align-items-center ion-justify-content-center">
                <IonIcon
                  icon={helpCircleOutline}
                  color="warning"
                  style={{ marginRight: "10px" }}
                />
                Desc.
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
            <IonRow>
                {/* 3 columa */}
            </IonRow>
        </IonGrid>
      </div>
    </>
  );
}

export default PannicButtons;
