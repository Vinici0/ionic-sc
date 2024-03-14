import React, { useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonRow,
  IonCol,
  IonButton,
  IonList,
  IonItem,
  IonInput,
  IonText,
} from '@ionic/react';
// import './Login.scss';

import { RouteComponentProps } from 'react-router';

interface OwnProps extends RouteComponentProps {}

// interface DispatchProps {
//   setIsLoggedIn: typeof setIsLoggedIn;
//   setUsername: typeof setUsername;
// }

interface LoginProps extends OwnProps {}

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!username) {
      setUsernameError(true);
    }
    if (!password) {
      setPasswordError(true);
    }


  };

  return (
    <IonPage id="login-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="login-logo">
          <img src="assets/img/appicon.svg" alt="Ionic logo" />
        </div>

        <form noValidate onSubmit={login}>
          <IonList>
            <IonItem>
              <IonInput
                label="Username"
                labelPlacement="stacked"
                color="primary"
                name="username"
                type="text"
                value={username}
                spellCheck={false}
                autocapitalize="off"
                onIonInput={(e) => setUsername(e.detail.value as string)}
                required
              >
                {formSubmitted && usernameError && (
                  <IonText color="danger" slot="error">
                    <p>Username is required</p>
                  </IonText>
                )}
              </IonInput>
            </IonItem>

            <IonItem>
              <IonInput
                label="Password"
                labelPlacement="stacked"
                color="primary"
                name="password"
                type="password"
                value={password}
                onIonInput={(e) => setPassword(e.detail.value as string)}
              >
                {formSubmitted && passwordError && (
                  <IonText color="danger" slot="error">
                    <p>Password is required</p>
                  </IonText>
                )}
              </IonInput>
            </IonItem>
          </IonList>

          <IonRow>
            <IonCol>
              <IonButton type="submit" expand="block">
                Login
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton routerLink="/signup" color="light" expand="block">
                Signup
              </IonButton>
            </IonCol>
          </IonRow>
        </form>
      </IonContent>
    </IonPage>
  );
};
             
export default Login;