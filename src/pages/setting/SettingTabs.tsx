import { IonApp, IonRouterOutlet, IonTabs } from "@ionic/react";

import { Redirect, Route } from "react-router";
import Profile from "../profile/Profile";

const SettingTabs: React.FC = () => (
  <>
    <Route path="/page/settingTabs/profile" component={Profile} />
    <Redirect exact from="/page/settingTabs" to="/page/settingTabs/profile" />
  </>
);

export default SettingTabs;
