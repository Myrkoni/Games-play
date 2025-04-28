import { createContext } from "react";

export const AuthContext = createContext({
  email: "",
  accessToken: "",
  isAutheticated: false,
  changeAuthState: (authState = {}) => null,
});
