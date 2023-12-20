import { Care } from './care';

export type LoginUser = {
  //Antes solo User
  email: string;
  password: string;
};

export type User = LoginUser & {
  //Antes User= User
  id: string;
  name: string;
  surname: string;
  admin: boolean;
  age: number;
  cares: Care[];
};
