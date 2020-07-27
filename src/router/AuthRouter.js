import React from "react";
import { Route /*Redirect*/ } from "react-router-dom";
import { LoginScreen } from "../views/loginScreen/LoginScreen";
import { forgotPasswordScreen } from "../views/forgotPasswordScreen/forgotPasswordScreen";

export const AuthRouter = () => {
  return (
    <div className="bg-gradient-primary" style={{ height: "100vh" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <Route exact path="/auth/login" component={LoginScreen} />
            <Route
              path="/auth/forgotPassword"
              component={forgotPasswordScreen}
            />
            {/* <Redirect exact to="/auth/login" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
