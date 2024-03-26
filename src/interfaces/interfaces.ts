export interface AppRouterProps {
  user: User | UserEmp | undefined;
}

export interface User {
    userId: number;
    partnerId: number;
    name: string;
    vat: string;
    telefono: string | undefined;
    correo: string | undefined;
    rol: string;
    rolPersona: string | undefined;
    image_1920: string;
    isLogin: boolean;
    permission: string;
    session_token: string | undefined;
    first_login: boolean;
  }
  
  

export interface UserEmp {
    userId: number;
    partnerId: number;
    name: string;
    vat: string;
    telefono: string | undefined;
    correo: string | undefined;
    rol: string;
    image_1920: string;
    isLogin: boolean;
    permission: string;
    session_token: string | undefined;
    first_login: boolean;
  }

  export interface Schedule {
    date: string;
    groups: ScheduleGroup[];
  }
  
  export interface ScheduleGroup {
    time: string;
    sessions: Session[];
  }
  
  export interface Session {
    id: number;
    timeStart: string;
    timeEnd: string;
    name: string;
    location: string;
    description: string;
    speakerNames: string[];
    tracks: string[];
  }
  
  
export interface EventDetailProps {
  id: number;
  date: string;
  zone: string;
  event: string;
  description: string;
}

export interface CustomPhoto {
  filepath: string;
  webviewPath?: string;
}
