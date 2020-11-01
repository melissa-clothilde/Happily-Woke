import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AuthContext from "./context/authContext";

const App = () => {
  const [authenticated, setAuthenticated] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.setItem("token", ""));

  // const setTokens = () => {
  //   localStorage.setItem("token", action.payload.token);
  // }
  return (
//     <AuthContext.Provider value={{ authenticated, user, token }
// }>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/saved" component={Saved} />
      </Router>
    // </AuthContext.Provider>
  );
};

export default App;
