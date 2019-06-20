import React, { Component } from 'react';
import { withRouter, Route, Switch,BrowserRouter as Router  } from 'react-router-dom';
import { browserHistory} from 'react-router';

// import { renderRoutes } from 'react-router-config';
import './App.scss';
import { getCurrentUser } from '../src/util/APIUtils';
import { ACCESS_TOKEN } from '../src/constants';

import {  notification } from 'antd';
import {Redirect} from "react-router";
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

  }

  handleLogout(redirectTo="/") {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push( '/' );
  }

  loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          isAuthenticated: true,
          isLoading: false
        });
      }).catch(error => {
      this.setState({
        isLoading: false
      });
    });
  }
  componentDidMount() {
    this.loadCurrentUser();
  }

  handleLogin() {
    notification.success({
      message: 'Polling App',
      description: "You're successfully logged in.",
    });
    this.loadCurrentUser();

  }

  render() {
    return (
      <Router history={browserHistory}>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
              <Route exact path="/login" name="Login Page" render={(props) => <Login onLogin={this.handleLogin} {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />

            </Switch>
          </React.Suspense>
      </Router>
    );
  }
}

export default App;
