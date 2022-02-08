import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  );
};
