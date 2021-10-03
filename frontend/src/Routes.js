import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import List from "./pages/list/List";
import Register from "./pages/resgister/Register";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect from="/" to="/developers" />
        </Route>
        <Route path="/developers" component={List} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
