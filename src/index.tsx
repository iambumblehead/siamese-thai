import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./i18n";

import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from "react-router-dom";

import Thai from "./Thai";

// react-spa-prerender
const rootElement = document.getElementById("root");

ReactDOM.render((
  <StrictMode>
    <BrowserRouter>
      <Thai />
    </BrowserRouter>
  </StrictMode>
), document.getElementById("root"));
