import { useEffect } from "react";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonButton,
  IonIcon,
} from "@ionic/react";

import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "../../store";
import { setShowTabs } from "../../store/navigation/slice";
import { checkmarkOutline } from "ionicons/icons";

const datosDefaultPassword = {
  currentPassword: "",
  newPassword: "",
  repeatPassword: "",
};

function EditPasswordPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setShowTabs(false));

    return () => {
      dispatch(setShowTabs(true));
    };
  }, [dispatch]);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    clearErrors,
    reset,
    setValue,
    getValues,
  } = useForm<any>({
    defaultValues: datosDefaultPassword,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <IonPage id="config-page">
        <IonHeader class="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton className="black-back-button"></IonBackButton>
            </IonButtons>
            <IonTitle>Editar Contraseña</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={handleSubmit(onSubmit)}>
                <IonIcon icon={checkmarkOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
              <IonInput
                {...register("currentPassword", {
                  required: "Este campo es requerido.",
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres",
                  },
                })}
                aria-label="currentPassword"
                type="password"
                label="Contraseña actual"
                labelPlacement="floating"
                placeholder="Contraseña actual"
              />
            </IonItem>
            <div className="ion-padding-start text-color">
              <ErrorMessage
                errors={errors}
                name="currentPassword"
                as={<div />}
              />
            </div>
            <IonItem>
              <IonInput
                {...register("newPassword", {
                  required: "Este campo es requerido.",
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres",
                  },
                })}
                aria-label="newPassword"
                type="password"
                label="Nueva contraseña"
                labelPlacement="floating"
                placeholder="Nueva contraseña"
              />
            </IonItem>
            <div className="ion-padding-start text-color">
              <ErrorMessage errors={errors} name="newPassword" as={<div />} />
            </div>

            <IonItem>
              <IonInput
                {...register("repeatPassword", {
                  required: "Este campo es requerido.",
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres",
                  },
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const { newPassword } = getValues();
                      return (
                        newPassword === value || "Las contraseñas no coinciden"
                      );
                    },
                  },
                })}
                aria-label="repeatPassword"
                type="password"
                label="Repetir contraseña"
                labelPlacement="floating"
                placeholder="Repetir contraseña"
              />
            </IonItem>
            <div className="ion-padding-start text-color">
              <ErrorMessage
                errors={errors}
                name="repeatPassword"
                as={<div />}
              />
            </div>
          </form>
        </IonContent>
      </IonPage>
    </>
  );
}

export default EditPasswordPage;
