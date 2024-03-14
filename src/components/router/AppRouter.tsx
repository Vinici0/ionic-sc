import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { Redirect, Route } from "react-router";
import Menu from "../menu/Menu";
import Tab1 from "../../pages/Tab1";
import { User } from "../../interfaces/interfaces";
import Tab2 from "../../pages/Tab2";
import Tab3 from "../../pages/Tab3";
import Tab4 from "../../pages/Tab4";

const AppRouter: React.FC = () => {
  const user: User = {
    userId: 1,
    partnerId: 2,
    name: "John Doe",
    vat: "123456789",
    telefono: "02323423423",
    correo: "test@gmail.com",
    rol: "admin",
    rolPersona: undefined,
    image_1920:
      "https://img.freepik.com/fotos-premium/hombre-joven-inconformista-brazos-cruzados_1368-14152.jpg",
    isLogin: false,
    permission: "full_access",
    session_token: undefined,
    first_login: true,
  };

  return (
        <IonRouterOutlet id="main">
          <Route path="/page1" component={Tab1} exact />
          <Route path="/page2" component={Tab2} exact />
          <Route path="/page3" component={Tab3} exact />
          <Route path="/page4" component={Tab4} exact />
          <Route path="/" render={() => <Redirect to="/page1" />} exact />
        </IonRouterOutlet>
  );
};

export default AppRouter;
