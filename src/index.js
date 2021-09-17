/* eslint-disable prettier/prettier */
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

/* eslint-disable prettier/prettier */

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import PCLandingPage from "views/PCLandingPage/PCLandingPage";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import PCLoginPage from "views/PCLoginPage/LoginPage.js";
import PCRegisterPage from "views/PCRegisterPage/RegisterPage.js";
import PCRegisterChild from "views/PCRegisterChild/RegisterChild.js";
import PCLandingPageLogin from "views/PCLandingPage/PCLandingPageLogin.js";
import PCProfilePage from "views/PCProfilePage/PCProfilePage";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/components" component={Components} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-pageOG" component={ProfilePage} />
      <Route path="/profile-page" component={PCProfilePage} />
      <Route path="/login-page" component={PCLoginPage} />
      <Route path="/register-page" component={PCRegisterPage} />
      <Route path="/register-child-page" component={PCRegisterChild} />
      <Route path="/landing-page-LI" component={PCLandingPageLogin} />
      <Route path="/" component={PCLandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
