import { Route } from "react-router";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { home, analytics, settings } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";

import "../../theme/main-custom.css";
import { navagatoinSelector } from "../../store/navigation/slice";
import { useAppSelector } from "../../store";
import Home from "../../pages/home/Home";
import LoginPage from "../../pages/login/Login";
import Profile from "../../pages/profile/Profile";
import Setting from "../../pages/setting/Setting";
import Tab3 from "../../pages/Tab3";

setupIonicReact();

const SignaleoRoute: React.FC = () => {

  const showTabs = useAppSelector(navagatoinSelector).showTabs;

  let tabBarStyle = showTabs;

  return (
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet id="main">
            {/* <Route path="/page" component={Tab3} exact /> */}
            <Route path="/page/event" component={Tab3} exact />
            <Route path="/page/home" component={Home}  />
            <Route path="/page/login" component={LoginPage} exact={true} />
            <Route path="/page/setting" component={Setting} exact />
            <Route path="/page/settingTabs/profile" component={Profile} />
            
          </IonRouterOutlet>
          <IonTabBar slot="bottom" id="page-tabar" style={{ display: tabBarStyle ? "flex" : "none" }}>  
          
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
      </IonReactRouter>
 
  );
};

export default SignaleoRoute;
