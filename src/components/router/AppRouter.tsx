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
import { IonReactRouter } from "@ionic/react-router";

import { home, settings } from "ionicons/icons";

import { navagatoinSelector } from "../../store/navigation/slice";
import { useAppSelector } from "../../store";

import "../../theme/main-custom.css";
import { PannicButtons } from "..";

import {
  EditNamePage,
  EditPasswordPage,
  HomePage,
  LoginPage,
  NotificationPage,
  ProfilePage,
  SettingPage,
} from "../../pages";

setupIonicReact();

const SignaleoRoute: React.FC = () => {
  const showTabs = useAppSelector(navagatoinSelector).showTabs;

  let tabBarStyle = showTabs;

  return (
    <IonReactRouter>  
      <IonTabs>
        <IonRouterOutlet id="main">
          <Route path="/" render={() => <HomePage />} exact={true} />
          <Route path="/page/home" component={HomePage} exact={true}/>
          <Route path="/page/profile" component={ProfilePage}  exact={true}/>
          <Route path="/page/login" component={LoginPage} exact={true} />
          <Route path="/page/notification" component={NotificationPage} exact={true}/>
          <Route path="/page/panicbuttons" component={PannicButtons} />
          <Route path="/page/setting" component={SettingPage} exact={true}/>
          <Route path="/page/setting/editName" component={EditNamePage} exact={true}/>
          <Route path="/page/setting/password" component={EditPasswordPage} exact={true}/>
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
