import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";

const listNameButton = [
  {
    name: "Eventos",
  },
  {
    name: "Noticias",
  },
  {
    name: "Promociones",
  },
  {
    name: "Cupones",
  },
  {
    name: "Productos",
  },
  {
    name: "Servicios",
  },
  {
    name: "Citas",
  },
  {
    name: "Contacto",
  },
];

const CarButton = () => {
  return (
    <>
      <IonGrid>
        {/* dos columas de una litta de botoes */}
        <IonRow style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
        }}>
          <IonCol size="2">
            <IonButton
              color="light"
              expand="block"
              className="btn-car"
              style={{ marginTop: "10px" }}
            >
              <p className="text-center">Car</p>
            </IonButton>
          </IonCol>
          <IonCol size="2">
            <IonButton
              color="light"
              expand="block"
              className="btn-car"
              style={{ marginTop: "10px" }}
            >
              <p className="text-center">Car</p>
            </IonButton>
          </IonCol>
          <IonCol size="2">
            <IonButton
              color="light"
              expand="block"
              className="btn-car"
              style={{ marginTop: "10px" }}
            >
              <p className="text-center">Car</p>
            </IonButton>
          </IonCol>
          <IonCol size="2">
            <IonButton
              color="light"
              expand="block"
              className="btn-car"
              style={{ marginTop: "10px" }}
            >
              <p className="text-center">Car</p>
            </IonButton>
          </IonCol>
          <IonCol size="2">
            <IonButton
              color="light"
              expand="block"
              className="btn-car"
              style={{ marginTop: "10px" }}
            >
              <p className="text-center">Car</p>
            </IonButton>
          </IonCol>
          <IonCol size="2">
            <IonButton
              color="light"
              expand="block"
              className="btn-car"
              style={{ marginTop: "10px" }}
            >
              <p className="text-center">Car</p>
            </IonButton>
          </IonCol>
          <IonCol size="2">
            <IonButton
              color="light"
              expand="block"
              className="btn-car"
              style={{ marginTop: "10px" }}
            >
              <p className="text-center">Car</p>
            </IonButton>
          </IonCol>
          <IonCol size="2">
            <IonButton
              color="light"
              expand="block"
              className="btn-car"
              style={{ marginTop: "10px" }}
            >
              <p className="text-center">Car</p>
            </IonButton>
          </IonCol>
          <IonCol size="2">
            <IonButton
              color="light"
              expand="block"
              className="btn-car"
              style={{ marginTop: "10px" }}
            >
              <p className="text-center">Car</p>
            </IonButton>
          </IonCol>

          <IonCol size="2">
            <IonButton
              color="light"
              expand="block"
              className="btn-car"
              style={{ marginTop: "10px" }}
            >
              <p className="text-center">Car</p>
            </IonButton>
          </IonCol>
          <IonCol size="2">
            <IonButton
              color="light"
              expand="block"
              className="btn-car"
              style={{ marginTop: "10px" }}
            >
              <p className="text-center">Car</p>
            </IonButton>
          </IonCol>
          
        </IonRow>
      </IonGrid>
    </>
  );
};

export default CarButton;
