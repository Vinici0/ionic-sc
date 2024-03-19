import { IonRouterOutlet} from "@ionic/react";
import { Redirect, Route } from "react-router";

import Tab3 from "../../pages/Tab3";
import Tab4 from "../../pages/Tab4";
import Login from "../../pages/Login";
import Home from "../../pages/Home";

import { EventDetail } from "../home";


const SignaleoRoute: React.FC = () => {
  return (
    <IonRouterOutlet id="main">
      <Route path="/login" component={Login} exact />
      <Route path="/home/event" component={EventDetail} exact />
      
      <Route path="/page3" component={Tab3} exact />
      <Route path="/page4" component={Tab4} exact />
      <Route path="/home" component={Home} exact />
      <Route path="/" render={() => <Redirect to="/page1" />} exact />
    </IonRouterOutlet>
  );
};

export default SignaleoRoute;
