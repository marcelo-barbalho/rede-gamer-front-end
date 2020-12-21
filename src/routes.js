import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./config/history";
import Teste from './views/portal/teste'
import Views from './views/'

const Routers = () => {
  
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Views} />
      </Switch>
    </Router>
  );
};

export default Routers;
