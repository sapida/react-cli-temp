import React, { Component } from 'react'
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom'
import Loadable from "react-loadable";
import App from './layout/app'

const loadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }else {
        return null;
    }
};

const Login = Loadable({loader: () => import('./pages/login/index'),loading: loadingComponent});

function NoMatch({ location }) {
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
}

export default class router extends Component {
  render() {
    return (
        <HashRouter>
            <App>
                <Switch>
                    <Route exact path="/" render={() => (<Redirect to="/login"/>)}/>
                    <Route path="/login" component={Login}/>
                    <Route component={NoMatch} />
                </Switch>
            </App>
        </HashRouter>
    )
  }
}
