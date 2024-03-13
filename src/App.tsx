import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonTabBar, IonTabButton, IonIcon, IonLabel , IonMenu, IonHeader, IonToolbar, IonTitle, IonSplitPane, IonList, IonItem, IonAvatar, IonNote, IonButton, IonListHeader, IonAlert, IonText } from "@ionic/react";
import { playCircle, radio, library, search } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import AppRouter from "./components/router/AppRouter";
import Tab1 from "./pages/Tab1";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
  
    <IonContent>
      <AppRouter />
      </IonContent>
      <IonTabBar slot="bottom">

        <IonTabButton tab="home" href="/page1">
          <IonIcon icon={playCircle} />
          <IonLabel>Listen now</IonLabel>
        </IonTabButton>

        <IonTabButton tab="radio" href="/page2">
          <IonIcon icon={radio} />
          <IonLabel>Radio</IonLabel>
        </IonTabButton>

        <IonTabButton tab="library" href="/page3">
          <IonIcon icon={library} />
          <IonLabel>Library</IonLabel>
        </IonTabButton>

        <IonTabButton tab="search" href="/page4">
          <IonIcon icon={search} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
      </IonTabBar>
  </IonApp>
);

export default App;
