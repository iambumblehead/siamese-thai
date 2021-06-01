import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'foundation-sites/dist/css/foundation.min.css';
import Thai from './Thai';
import './i18n';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Thai />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
