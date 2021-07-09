import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';
import configureStore from "./store";

import './styles.scss';

// import LogRocket from 'logrocket';
// LogRocket.init('6wby4b/fm2428');
// // This is an example script - don't forget to change it!
// LogRocket.identify('123456', {
//   name: 'Girad Steven',
//   email: 'sgirad86@gmail.com',
// })

require("./favicon.ico");
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>

         <Router>{routes}</Router>

  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
