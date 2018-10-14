import React, { Component } from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, Link } from 'react-router-dom'
import { connectRouter, ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';

import Reducers from './reducer';
import * as pages from './pages';
import './App.css';

const history = createBrowserHistory();
const store = createStore(connectRouter(history)(Reducers), {}, compose(
  applyMiddleware(
    routerMiddleware(history),
  ),
));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}> 
          <div className="App">
            <header>
              <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/info'>Info</Link></li>
              </ul>
            </header>
            <main>
              <Route path='/home' component={pages.Home} />
              <Route path='/info/:id?' component={pages.Info} />
            </main>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
