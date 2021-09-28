import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, About, Contact } from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={About} path="/about" />
        <Route exact component={Contact} path="/contact" />
        {/* <Route component={LoginPage} path="/signin" /> */}
        {/* <PrivateRoute exact component={HomePage} path="/" /> */}
        {/* <PrivateRoute exact component={DetailPage} path="/detail/:id" /> */}
        {/* <Route component={NotFoundPage} path="*" /> */}
      </Switch>
    </BrowserRouter>
  );
};
