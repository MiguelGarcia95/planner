import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import '@atlaskit/css-reset';
import './index.css';
// import App from './components/App';
import App from './components';
import Board from './components/Board';
import Signin from './components/Signin';
import Signup from './components/Signup';
import store from './store';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/:boardId/:boardName' component={Board} />
        <Route exact path='/signup' component={Signin} />
        <Route exact path='/signin' component={Signup} />
      </Switch>
    </BrowserRouter>
  )
};

const RootWithAuth = withRouter(connect()(Root));

const RootWithRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootWithAuth />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<RootWithRouter />, document.getElementById('root'));
