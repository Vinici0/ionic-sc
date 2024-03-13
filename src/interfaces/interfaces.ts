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
  