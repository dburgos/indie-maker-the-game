import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './screens/Router';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <Router />
  </BrowserRouter>), document.getElementById('root'));

serviceWorker.unregister();
