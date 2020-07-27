import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { HomeScreen } from "../views/homeScreen/HomeScreen";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Footer } from "../components/footer/Footer";

import { AuthRouter } from "./AuthRouter";

export const DashboardRouter = () => {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container-fluid">
              <Switch>
                <Route path="/auth" component={AuthRouter} />
                <Route exact path="/" component={HomeScreen} />
                <Redirect exact to="/" />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
