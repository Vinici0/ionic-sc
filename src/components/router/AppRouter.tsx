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

import { navagatoinSelector } from "../../store/navigation/slice";
import { useAppSelector } from "../../store";
import HomePage from "../../pages/home/Home";
import LoginPage from "../../pages/login/Login";
import ProfilePage from "../../pages/profile/Profile";
import SettingPage from "../../pages/setting/Setting";
import Tab3 from "../../pages/Tab3";
import "../../theme/main-custom.css";
import EditNamePage from "../../pages/profile/EditName";
import EditPasswordPage from "../../pages/profile/EditPassword";
import NotificationPage from "../../pages/notification/Notification";

setupIonicReact();

const SignaleoRoute: React.FC = () => {
  const showTabs = useAppSelector(navagatoinSelector).showTabs;

  let tabBarStyle = showTabs;

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet id="main">
          <Route path="/page/event" component={Tab3} exact />
          <Route path="/page/home" component={HomePage} />
          <Route path="/page/login" component={LoginPage} exact={true} />
          <Route path="/page/setting" component={SettingPage} exact />
          <Route path="/page/setting/profile" component={ProfilePage} />
          <Route path="/page/setting/editName" component={EditNamePage} />
          <Route path="/page/setting/password" component={EditPasswordPage} />
          <Route path="/page/notification" component={NotificationPage} />
          <Route path="/" render={() => <HomePage />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar
          slot="bottom"
          id="page-tabar"
          style={{ display: tabBarStyle ? "flex" : "none" }}
        >
          <IonTabButton tab="home" href="/page/home">
            <IonIcon icon={home} />
            <IonLabel>Menú</IonLabel>
          </IonTabButton>

          <IonTabButton tab="radio" href="/page/event">
            <IonIcon icon={analytics} />
            <IonLabel>Reportes</IonLabel>
          </IonTabButton>

          <IonTabButton tab="search" href="/page/setting">
            <IonIcon icon={settings} />
            <IonLabel>Configuración</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default SignaleoRoute;
