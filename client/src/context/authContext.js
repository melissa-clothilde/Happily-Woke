import React, { createContext } from "react";

const AuthContext = createContext({
  token: "",
  isAuthenticated: Boolean,
  user: ""
})

export default AuthContext;