import { IonRouterOutlet} from "@ionic/react";
import { Redirect, Route } from "react-router";

import LoginPage from "../../pages/Login";
import HomeTabs from "../../pages/HomeTabs";
import "../../theme/main-custom.css";


const SignaleoRoute: React.FC = () => {
  return (
    <IonRouterOutlet id="main">
      <Route path="/page" component={HomeTabs} />
      <Route path="/page/login" component={LoginPage} exact />
      <Route path="/" render={() => <Redirect to="/page/home" />} exact />
    </IonRouterOutlet>
  );  
};

export default SignaleoRoute;
