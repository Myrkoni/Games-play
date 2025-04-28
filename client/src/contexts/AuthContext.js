import { createContext } from "react";

export const AuthContext = createContext({
  userId: "",
  email: "",
  accessToken: "",
  isAutheticated: false,
  changeAuthState: (authState = {}) => null,
});
