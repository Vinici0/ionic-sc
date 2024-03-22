import { IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { Redirect, Route } from "react-router";

import LoginPage from "../../pages/login/Login";
import HomeTabs from "../../pages/home/HomeTabs";
import Profile from "../../pages/profile/Profile";

import "../../theme/main-custom.css";
import SettingTabs from "../../pages/setting/SettingTabs";

setupIonicReact();

const SignaleoRoute: React.FC = () => {
  return (
    <IonRouterOutlet id="main">
      <Route path="/page/settingTabs" render={() => <SettingTabs />} />

      <Route path="/page" component={HomeTabs} />
      <Route path="/page/login" component={LoginPage} exact={true} />
      <Route
        path="/"
        render={() => <Redirect to="/page/home" />}
        exact={true}
      />
    </IonRouterOutlet>
  );
};

export default SignaleoRoute;
