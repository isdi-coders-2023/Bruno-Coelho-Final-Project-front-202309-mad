import { Care } from './care';

export type LoginUser = {
  email: string;
  password: string;
};

export type User = LoginUser & {
  id: string;
  name: string;
  surname: string;
  admin: boolean;
  age: number;
  cares: Care[];
};
