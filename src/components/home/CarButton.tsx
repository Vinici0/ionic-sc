import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";
import "./Statyles.css";

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
            className="col-car"
              size="4"
              sizeSm="4"
              sizeMd="3"
              sizeLg="2"
              key={index}
            >
              <IonButton className="button-car">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ionic-512.png"
                  alt="example"
                />
              </IonButton>
              <p className="text-muted">{item.name}</p>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </>
  );
};

export default CarButton;
