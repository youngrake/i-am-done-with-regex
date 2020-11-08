import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'App';

import * as Global from 'global';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <ThemeProvider theme={Global.Theme}>
    <Global.Style />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
