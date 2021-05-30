import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from "react-router-dom";

import Thai from "./Thai";

// react-spa-prerender
const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/user/:id">User</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/user">
          <div>user</div>
        </Route>
        <Route path="/" exact>
          <Thai />
        </Route>
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
