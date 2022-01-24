import React, { useContext } from "react";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import { AuthContext } from "./context/authContext";
import { Login } from "./pages/Login";
import { MainPage } from "./pages/Main";
import { Registration } from "./pages/Registration";
import { Stream } from "./pages/Stream";

export const AppRoutes = () => {
  const { user } = useContext(AuthContext);
  return user ? (
    <Router>
      <Switch>
        <Route path="/streams" exact>
          <Stream />
        </Route>
        <Route path="/streams/:id">
          <Stream />
        </Route>
        {/* <Route path="/">
          <MainPage />
        </Route> */}
        <Redirect to="/streams" />
      </Switch>
    </Router>
  ) : (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/auth/registration">
          <Registration />
        </Route>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
