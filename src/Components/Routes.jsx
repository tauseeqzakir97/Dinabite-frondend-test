import React from "react";
import { Route, Switch } from "react-router-dom";
import Account from "./Account/Account";
import Analytics from "./Analytics/Analytics";
import Dashboard from "./Dashboard/Dashboard";
import Help from "./Help/Help";
import Posts from "./Posts/Posts";
import Promotions from "./Promotions/Promotions";
import Reviews from "./Reviews/Reviews";
import Tools from "./Tools/Tools";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/tools" component={Tools} />
      <Route path="/posts" component={Posts} />
      <Route path="/promotions" component={Promotions} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/account" component={Account} />
      <Route path="/help" component={Help} />
    </Switch>
  );
};

export default Routes;
