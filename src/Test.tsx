import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonPage,
  IonRouterOutlet,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import {
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonSplitPane,
  IonList,
  IonItem,
  IonAvatar,
  IonNote,
  IonButton,
  IonListHeader,
  IonAlert,
  IonText,
} from "@ionic/react";
import { playCircle, radio, library, search } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
// import "./theme/variables.css";
import AppRouter from "./components/router/AppRouter";
// import Tab1 from "./pages/Tab1";
import SignaleoRoute from "./components/router/AppRouter";

setupIonicReact();

const UsersListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>UsersListPage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button routerLink="/dashboard/saludo">
            <IonLabel>Saludo</IonLabel>
          </IonItem>
          <IonItem button routerLink="/dashboard/users/4">
            <IonLabel>Users</IonLabel>
          </IonItem>
          <IonItem button routerLink="/dashboard">
            <IonLabel>List Users</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <IonContent>
        <IonList>
          <IonItem button routerLink="/dashboard/users/1">
            <IonAvatar slot="start">
              <img
                src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png"
                alt=""
              />
            </IonAvatar>
            <IonLabel>
              <h2>Finn</h2>
              <p>human</p>
            </IonLabel>
          </IonItem>
          <IonItem button routerLink="/dashboard/users/2">
            <IonAvatar slot="start">
              <img
                src="https://ionicframework.com/docs/demos/api/list/avatar-han.png"
                alt=""
              />
            </IonAvatar>
            <IonLabel>
              <h2>Han</h2>
              <p>human</p>
            </IonLabel>
          </IonItem>
          <IonItem button routerLink="/dashboard/users/3">
            <IonAvatar slot="start">
              <img
                src="https://ionicframework.com/docs/demos/api/list/avatar-leia.png"
                alt=""
              />
            </IonAvatar>
            <IonLabel>
              <h2>Leia</h2>
              <p>human</p>
            </IonLabel>
          </IonItem>
          <IonItem button routerLink="/dashboard/users/4">
            <IonAvatar slot="start">
              <img
                src="https://ionicframework.com/docs/demos/api/list/avatar-luke.png"
                alt=""
              />
            </IonAvatar>
            <IonLabel>
              <h2>Luke</h2>
              <p>human</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

const UserDetailPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Datail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button routerLink="/dashboard/saludo">
            <IonLabel>Saludo</IonLabel>
          </IonItem>
          <IonItem button routerLink="/dashboard/users/1">
            <IonLabel>Users</IonLabel>
          </IonItem>
          {/* lsita */}
          <IonItem button routerLink="/dashboard">
            <IonLabel>List Users</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

const DashboardPageSaludo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Saludo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button routerLink="/dashboard/saludo">
            <IonLabel>Saludo</IonLabel>
          </IonItem>
          <IonItem button routerLink="/dashboard/users/1">
            <IonLabel>Users</IonLabel>
          </IonItem>
          <IonItem button routerLink="/dashboard">
            <IonLabel>List Users</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

const DashboardPage: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path="/dashboard" component={UsersListPage} />
        <Route path="/dashboard/users/:id" component={UserDetailPage} />
        <Route path="/dashboard/saludo" component={DashboardPageSaludo} />
      </IonRouterOutlet>
    </IonPage>
  );
};

const Test: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/dashboard" component={DashboardPage} />
        <Redirect exact from="/" to="/dashboard" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default Test;
