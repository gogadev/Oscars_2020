import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../../App";

import Actor from "../actor/Actor";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/nominees/:id" component={Actor} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
