import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import { Login } from './Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
    </Switch>
  );
}