import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import {syncHistoryWithStore} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//import createBrowserHistory from "history/createBrowserHistory";

import App from './App';
import FriendView from './components/FriendView';

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//let history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/friend/:id" component={FriendView}/>
      </Switch>
    </Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
