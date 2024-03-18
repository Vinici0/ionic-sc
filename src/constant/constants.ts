import { heart, pin, star, call, globe, basket, barbell } from "ionicons/icons";



export const SEGMENT_BUTTONS = [
  { value: "1", label: "Comandos", icon: null , path: "home" },
  { value: "2", label: "Eventos", icon: heart , path: "event" },
  { value: "3", label: "Estado del objeto", icon: pin , path: "state" },
  { value: "4", label: "Zonas", icon: star , path: "zone" },
  { value: "5", label: "Notificaciones", icon: call , path: "notification" },
  { value: "6", label: "Botones de pánico", icon: globe , path: "panic" },
  { value: "7", label: "Control de salidas", icon: basket , path: "output" },
  { value: "8", label: "Control de entradas", icon: barbell , path: "input" },
];

export const LIST_ITEM = [
  {
    label: "Alarma",
    urlImage: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    label: "Alarma (Estoy en casa)",
    urlImage: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    label: "Desarmar",
    urlImage: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    label: "Solicitar el estado de panel",
    urlImage: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    label: "Activar Salida",
    urlImage: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    label: "Desactivar Salida",
    urlImage: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    label: "Solicitar estado de salidas",
    urlImage: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
];
