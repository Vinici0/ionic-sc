import { IonRouterOutlet, IonTabs, setupIonicReact } from "@ionic/react";

import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";

import {
  playCircle,
  radio,
  library,
  search,
  home,
  settings,
  analytics,
} from "ionicons/icons";

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

import "../theme/main-custom.css";

import { Redirect, Route } from "react-router";
import Tab3 from "./Tab3";
import Home from "./Home";
import ConfigPage from "./Config";
import "../theme/main-custom.css";

setupIonicReact();

const HomeTabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route path="/page/event" component={Tab3} exact />
      <Route path="/page3" component={Tab3} exact />
      <Route path="/page4" component={Tab3} exact />
      <Route path="/page/home" component={Home} exact />
      <Route path="/page/config" component={ConfigPage} exact />
      <Redirect exact from="/" to="/home" />
    </IonRouterOutlet>
    {/* 
        --background: rgb(18, 68, 143);
        --color: white;
        */}
    <IonTabBar slot="bottom" id="page-tabar">
      <IonTabButton tab="home" href="/page/home">
        <IonIcon icon={home} />
        <IonLabel>Menu</IonLabel>
      </IonTabButton>

      <IonTabButton tab="radio" href="/page/event">
        <IonIcon icon={analytics} />
        <IonLabel>Reportes</IonLabel>
      </IonTabButton>

      {/* <IonTabButton tab="library" href="/login">
        <IonIcon icon={library} />
        <IonLabel>Library</IonLabel>
      </IonTabButton> */}

      <IonTabButton tab="search" href="/page/config">
        <IonIcon icon={settings} />
        <IonLabel>Configuracion</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default HomeTabs;
