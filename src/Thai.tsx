import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ThaiNavPrimary from './ThaiNavPrimary';
import ThaiContentMenu from './ThaiContentMenu';

import {
  enumRouteHome,
  enumRouteContact,
  enumRouteLunch,
  enumRouteMenu,
  enumRouteOrder
} from './enums';

const Thai: React.FC = () => {
  return (
    <div>
      <ThaiNavPrimary />
      <Switch>
        <Route path={enumRouteHome} exact>
          <div>home</div>
        </Route>
        <Route path={enumRouteContact}>
          <div>contact</div>
        </Route>
        <Route path={enumRouteLunch}>
          <div>lunch</div>
        </Route>
        <Route path={enumRouteMenu}>
          <ThaiContentMenu />
        </Route>
        <Route path={enumRouteOrder}>
          <div>order</div>
        </Route>
      </Switch>
    </div>
  );
};

export default Thai;
