import {
  IonApp,
  setupIonicReact,
} from "@ionic/react";


import { IonReactRouter } from "@ionic/react-router";

import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./theme/main-custom.css";
import SignaleoRoute from "./components/router/AppRouter";

import { Provider } from "react-redux";
import { store } from "./store/store";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Provider store={store}>
      <IonReactRouter>
        <SignaleoRoute />
      </IonReactRouter>
    </Provider>
  </IonApp>
);

export default App;
