import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePageContainer from "./containers/HomePageContainer";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={HomePageContainer} />
    </Switch>
  );
};

export default Routes;
