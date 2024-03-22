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
  {
    name: "Contacto",
  },
];

const CarButton = () => {
  return (
    <>
      <IonGrid>
        <IonRow
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <IonCol size="6" sizeSm="4" sizeMd="3" sizeLg="2">
            <IonButton
              color="light"
              expand="block"
              className="btn-car"
              style={{ marginTop: "10px" }}
            >
              <p className="text-center">Car</p>
            </IonButton>
          </IonCol>

          {listNameButton.map((item, index) => (
            <IonCol size="6" sizeSm="4" sizeMd="3" sizeLg="2" key={index}>
              <IonButton
                color="light"
                expand="block"
                className="btn-car"
                style={{ marginTop: "10px" }}
              >
                <p className="text-center">{item.name}</p>
              </IonButton>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </>
  );
};

export default CarButton;
