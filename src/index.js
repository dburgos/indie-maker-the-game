import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './screens/Router';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>), document.getElementById('root'));

serviceWorker.unregister();
