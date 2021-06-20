import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import './index.css';
// import 'foundation-sites/dist/css/foundation.min.css';
import Thai from './Thai';
import './i18n';

const theme = createMuiTheme({
  palette: {
    primary: {
      // main: 'rgba(250,84,10,1)'
      main: 'rgb(128,0,128)'
    }
  }
});

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Thai />
      </MuiThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
