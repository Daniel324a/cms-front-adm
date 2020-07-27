import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { LoginScreen } from "../views/loginScreen/LoginScreen";

export const AuthRouter = () => {
  return (
    <div className="bg-gradient-primary" style={{ height: "100vh" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <Switch>
              <Route exact path="/auth/login" component={LoginScreen} />
              <Redirect exact path="/auth/login" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};
