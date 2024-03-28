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

import { checkmarkOutline} from "ionicons/icons";

import { useAppDispatch } from "../../store";
import { setShowTabs } from "../../store/navigation/slice";

const datosDefaultNameAndPassword = {
  name: "",
  lastname: "",
};

function EditNamePage() {
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
    defaultValues: datosDefaultNameAndPassword,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setShowTabs(false));

    return () => {
      dispatch(setShowTabs(true));
    };
  }, [dispatch]);

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
            <IonTitle>Editar Nombre</IonTitle>
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
                {...register("name", {
                  required: "Este campo es requerido.",
                  pattern: {
                    value:
                      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]\s?/,
                    message: "Solo letras están permitidas",
                  },
                })}
                aria-label="Nombres"
                type="text"
                label="Nombres"
                labelPlacement="floating"
                placeholder="Nombres"
              />
            </IonItem>
            <div className="ion-padding-start text-color">
              <ErrorMessage errors={errors} name="name" as={<div />} />
            </div>
            <IonItem>
              <IonInput
                {...register("lastname", {
                  required: "Este campo es requerido.",
                  pattern: {
                    value:
                      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]\s?/,
                    message: "Solo letras están permitidas",
                  },
                })}
                aria-label="Apellidos"
                type="text"
                label="Apellidos"
                labelPlacement="floating"
                placeholder="Apellidos"
              />
            </IonItem>
            <div className="ion-padding-start text-color">
              <ErrorMessage errors={errors} name="lastname" as={<div />} />
            </div>
          </form>
        </IonContent>
      </IonPage>
    </>
  );
}

export default EditNamePage;
