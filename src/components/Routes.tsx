import React from "react";
import { Switch } from "react-router-dom";
import Home from "./Home";
import { Login } from './Login';
import { AnonRoute } from './AnonRoute';
import { AuthRoute } from './AuthRoute';
import { AppProps } from '../models';

interface Props {
  isAuth: boolean;
  setIsAuth?: (isAuth: boolean) => void;
}


export const Routes: React.FC<Props> = (appProps) => {
  return (
    <Switch>
      <AuthRoute path="/" exact component={Home} appProps={appProps} />
      <AnonRoute path="/login" exact component={Login} appProps={appProps} />
    </Switch>
  );
}