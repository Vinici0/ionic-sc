import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { Redirect, Route } from "react-router";
import Menu from "../menu/Menu";
import Tab1 from "../../pages/Tab1";
import { User } from "../../interfaces/interfaces";
import Tab2 from "../../pages/Tab2";
import Tab3 from "../../pages/Tab3";
import Tab4 from "../../pages/Tab4";
import Login from "../../pages/Login";
import Home from "../../pages/home/Home";
import EventPage from "../../pages/home/EventPage";

const SignaleoRoute: React.FC = () => {
  return (
    <IonRouterOutlet id="main">
      <Route path="/login" component={Login} exact />
      <Route path="/home/event" component={EventPage} exact />
      <Route path="/page3" component={Tab3} exact />
      <Route path="/page4" component={Tab4} exact />
      <Route path="/home" component={Home} exact />
      <Route path="/" render={() => <Redirect to="/page1" />} exact />
    </IonRouterOutlet>
  );
};

export default SignaleoRoute;
