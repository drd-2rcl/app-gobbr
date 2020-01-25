import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Route from './Route';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" exact component={SignUp} />
        <Route path="/dashboard" exact component={Dashboard} isPrivate />
        <Route path="/profile" exact component={Profile} isPrivate />
        <Route path="/" component={() => <h1>404 Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
