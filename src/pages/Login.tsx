import React, { useState } from "react";
import { RouteComponentProps, useHistory } from "react-router";
import { arrowForwardCircleOutline, personCircle } from "ionicons/icons";
import {
  IonContent,
  IonPage,
  IonRow,
  IonCol,
  IonButton,
  IonItem,
  IonInput,
  IonLabel,
  IonGrid,
  IonAlert,
  IonIcon,
} from "@ionic/react";

import axios from "axios";

import "./Login.css";

interface OwnProps extends RouteComponentProps {}
interface LoginProps extends OwnProps {}

function validateEmail(email: string) {
  const re =
    /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}

const LoginPage: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState("");
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

  const history = useHistory();
  const [email, setEmail] = useState<string>("eve.holt@reqres.in");
  const [password, setPassword] = useState<string>("cityslicka");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleLogin = () => {
    if (!email) {
      setMessage("Please enter a valid email");
      setIserror(true);
      return;
    }
    if (validateEmail(email) === false) {
      setMessage("Your email is invalid");
      setIserror(true);
      return;
    }

    if (!password || password.length < 6) {
      setMessage("Please enter your password");
      setIserror(true);
      return;
    }

    const loginData = {
      email: email,
      password: password,
    };

    const api = axios.create({
      baseURL: `https://reqres.in/api`,
    });
    api
      .post("/login", loginData)
      .then((res) => {
        history.push("/dashboard/" + email);
      })
      .catch((error) => {
        setMessage("Auth failure! Please create an account");
        setIserror(true);
      });
  };

  return (
    <IonPage id="login-page">
      <IonContent fullscreen className="">
        <IonGrid style={{ height: "100%" }}>
          <IonRow class="ion-align-items-center" style={{ height: "100%" }}>
            <IonCol class="ion-text-center">
              <IonGrid class="home-container ">
                {/* Logo */}
                <IonRow>
                  <IonCol>
                    <IonIcon
                    className="my-1 login"
                      icon={personCircle}
                      style={{ fontSize: "125px" }}

                    ></IonIcon>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonAlert
                      isOpen={iserror}
                      onDidDismiss={() => setIserror(false)}
                      cssClass="my-custom-class"
                      header={"Error!"}
                      message={message}
                      buttons={["Dismiss"]}
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating"> Email</IonLabel>
                      <IonInput
                        type="email"
                        value={email}
                        onIonChange={(e) => setEmail(e.detail.value!)}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Password</IonLabel>
                      <IonInput
                        type="password"
                        value={password}
                        onIonChange={(e) => setPassword(e.detail.value!)}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <p style={{ fontSize: "small" }}>
                      Al hacer clic en INICIAR SESIÓN, aceptas nuestra{" "}
                      <a href="#">Política</a>.
                    </p>
                    <IonButton
                      type="submit"
                      className="flex flex-col my-1 login"

                    >
                      Iniciar Sesión
                      <IonIcon slot="end" icon={arrowForwardCircleOutline} />
                    </IonButton>
                    <p
                      style={{ fontSize: "medium" }}
                      className="ion-text-center"
                    >
                      ¿No tienes una cuenta? <a href="#">¡Regístrate!</a>
                    </p>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
