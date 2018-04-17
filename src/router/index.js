import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../modules/home";
import Example01 from "../modules/example01/containers/tableService";
import Example02 from "../modules/example02/index";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/example01" component={Example01} />
      <Route exact path="/example02" component={Example02} />
    </Switch>
  </Router>
);

export default Routes;
