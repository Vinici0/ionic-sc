import { useRef, useState } from "react";
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  IonText,
  IonRouterOutlet,
} from "@ionic/react";

import { heart, pin, star, call, globe, basket, barbell } from "ionicons/icons";

import "./Home.css";
import { LIST_ITEM } from "../../constant/constants";
import MenuContent from "../../components/MenuContent";
import { Redirect, Route, useHistory } from "react-router";
import EventPage from "./EventPage";
import StatePage from "./StatePage";
import HomePage from "./HomePage";
import { Link } from "react-router-dom";

export const SEGMENT_BUTTONS = [
  { value: "1", label: "Comandos", icon: null, path: "/home/" },
  { value: "2", label: "Eventos", icon: heart, path: "/home/event" },
  { value: "3", label: "Estado del objeto", icon: pin, path: "/home/state" },
  { value: "4", label: "Zonas", icon: star, path: "/home/zone" },
  {
    value: "5",
    label: "Notificaciones",
    icon: call,
    path: "/home/notification",
  },
  { value: "6", label: "Botones de pánico", icon: globe, path: "/home/panic" },
  {
    value: "7",
    label: "Control de salidas",
    icon: basket,
    path: "/home/output",
  },
  {
    value: "8",
    label: "Control de entradas",
    icon: barbell,
    path: "/home/input",
  },
];

const Home: React.FC = () => {
  const [segment, setSegment] = useState<"all" | "favorites">("all");

  const getItemData = (e: React.MouseEvent<HTMLIonListElement, MouseEvent>) => {
    console.log(e.currentTarget);
  };

  const pageRef = useRef<HTMLElement>(null);
  const history = useHistory();
  return (
    <>
      <MenuContent />
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonCard>
          <IonSegment scrollable={true} value={segment} onIonChange={(e) => setSegment(e.detail.value as any)}>
              {SEGMENT_BUTTONS.map((b) => (
                <IonSegmentButton key={b.value} value={b.value}>
                  <Link to={`/home/${b.value}`}>{b.label}</Link>
                </IonSegmentButton>
              ))}
            </IonSegment>

            <IonCardHeader>
              <IonCardTitle>777774 / 2</IonCardTitle>
              <IonCardSubtitle>Sensor ATM</IonCardSubtitle>
            </IonCardHeader>

              <IonRouterOutlet id="main">
                <Route path="/" render={() => <Redirect to="/home/" />} exact />
                <Route path="/home" component={HomePage} exact />
                <Route path="/home/event" component={EventPage} exact />
                <Route path="/home/state" component={StatePage} exact />
                {/* <Route path="/home/zone" component={ZonePage} exact />
                  <Route path="/home/notification" component={NotificationPage} exact />
                  <Route path="/home/panic" component={PanicPage} exact />
                  <Route path="/home/output" component={OutputPage} exact />
                  <Route path="/home/input" component={InputPage} exact /> */}
              </IonRouterOutlet>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
