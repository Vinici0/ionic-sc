import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { Redirect, Route } from "react-router";
import Tab3 from "../../pages/Tab3";
import Tab4 from "../../pages/Tab4";
import Home from "../../pages/home/Home";
import EventPage from "../../pages/home/EventPage";

const SignaleoRoute: React.FC = () => {
  return (
    <IonRouterOutlet id="main"> 
      <Route path="/" render={() => <Redirect to="/login" />} exact />
      <Route path="/home/*"  component={Home} exact />
      <Route path="/home/false" component={EventPage} exact />
      <Route path="/page3" component={Tab3} exact />
      <Route path="/page4" component={Tab4} exact />
    </IonRouterOutlet>
  );
};

export default SignaleoRoute;
