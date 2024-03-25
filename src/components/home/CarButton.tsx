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
        <IonRow>
          {listNameButton.map((item, index) => (
            <IonCol
              size="4"
              sizeSm="4"
              sizeMd="3"
              sizeLg="2"
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 0 12px 0",
              }}
            >
              <IonButton
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: "80px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ionic-512.png"
                  alt="example"
                  style={{ width: "70%", height: "70%" }}
                />
                
              </IonButton>

              <p
                style={{
                  textAlign: "center",
                  fontSize: "10px",
                  margin: "1px 0 0 0",
                }}
              >
                {item.name}
              </p>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </>
  );
};

export default CarButton;
