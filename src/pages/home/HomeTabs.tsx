import { Redirect, Route } from "react-router";

import { IonRouterOutlet, IonTabs, setupIonicReact } from "@ionic/react";
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { home, settings, analytics } from "ionicons/icons";

import Home from "./Home";
import Setting from "../setting/Setting";
import Tab3 from "../Tab3";

setupIonicReact();

const HomeTabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route path="/page/event" component={Tab3} exact />
      <Route path="/page/home" component={Home} exact />
      <Route path="/page/setting" component={Setting} exact />
      <Route path="/page3" component={Tab3} exact />
      <Redirect exact from="/" to="/home" />
    </IonRouterOutlet>

    <IonTabBar slot="bottom" id="page-tabar">
      <IonTabButton tab="home" href="/page/home">
        <IonIcon icon={home} />
        <IonLabel>Menu</IonLabel>
      </IonTabButton>

      <IonTabButton tab="radio" href="/page/event">
        <IonIcon icon={analytics} />
        <IonLabel>Reportes</IonLabel>
      </IonTabButton>

      <IonTabButton tab="search" href="/page/setting">
        <IonIcon icon={settings} />
        <IonLabel>Configuracion</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default HomeTabs;
