import { createContext } from "react";

export interface User {
  id?: number;
  name?: string;
  url?: string;
  email: string | undefined;
}

export interface AuthContextValue {
  user?: User | undefined;
  inited: boolean;
  setToken: (token: string) => void;
  clearToken: () => void;
  // setUser?: (user: User | undefined) => void;
}

const noop = () => {};

export const AuthContext = createContext<AuthContextValue>({
  inited: false,
  setToken: noop,
  clearToken: noop,
  // setUser: noop,
});
