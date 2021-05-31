import React from 'react';
import { Route, Switch } from "react-router-dom";

import ThaiNavPrimary from './ThaiNavPrimary';

const Thai = () => {
  return (
    <div>
      <ThaiNavPrimary />
      <Switch>
        <Route path="/user">
          <div>user</div>
        </Route>
        <Route path="/" exact>
          <div>what</div>
        </Route>
      </Switch>
    </div>
  );
};

export default Thai;
