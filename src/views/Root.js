import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/index";
import { routes } from "../routes/index";
import MainTemplate from "../templates/MainTemplate";
import Home from "./Home";
import Success from "./Success";
import PrivatePolicy from "./PrivatePolicy";
import Error from "./Error";

const Root = () => (
  <Provider store={store}>
    <HashRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.sendConfirmation} component={Success} />
          <Route path={routes.privatePolicy} component={PrivatePolicy} />
          <Route path="*" component={Error} />
        </Switch>
      </MainTemplate>
    </HashRouter>
  </Provider>
);

export default Root;
