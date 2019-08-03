import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Switch, Route, withRouter} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import '@atlaskit/css-reset';
import './index.css';
import App from './components';
import Board from './components/Board';
import Signin from './components/Signin';
import Signup from './components/Signup';
import store from './store';

const Root = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={App} />
        {/* <Route path='/:boardId' component={Board} /> */}
        <Route path='/:boardId/:boardName' component={Board} />
        <Route exact path='/login' component={Signin} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </HashRouter>
  )
};

const RootWithAuth = withRouter(connect()(Root));

const RootWithRouter = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <RootWithAuth />
      </HashRouter>
    </Provider>
  );
}

ReactDOM.render(<RootWithRouter />, document.getElementById('root'));
