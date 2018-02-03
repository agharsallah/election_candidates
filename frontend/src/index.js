import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader'

import { Route, Router, Redirect, Switch,BrowserRouter } from 'react-router-dom';
import App from './App' ;
import history from './history';

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
import { AUTH_USER,USER_ROLE } from './actions/types';
const store = createStoreWithMiddleware(reducers);
/* const token = localStorage.getItem('token');
const role = localStorage.getItem('role');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
  store.dispatch({ type: USER_ROLE,payload: role });
}
 */
import counterpart  from 'counterpart';
import Translate    from 'react-translate-component';
counterpart.registerTranslations('en',require('../locales/en'));
counterpart.registerTranslations('fr',require('../locales/fr'));
counterpart.registerTranslations('ar',require('../locales/ar'));

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
      <Router history={history}>
      <App/>
      </Router>
      </AppContainer>
    </Provider>,
    document.getElementById('container')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => { render(App) })
}


