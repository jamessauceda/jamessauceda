import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';

import Home from './containers/Home';
import Login from './containers/Login';
import Notes from './containers/Notes';
import Signup from './containers/Signup';
import NewNote from './containers/NewNote';
import NotFound from './containers/NotFound';
import Music from './containers/Music';
import Photography from './containers/Photography';

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <UnauthenticatedRoute
      path="/music"
      exact
      component={Music}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/photography"
      exact
      component={Photography}
      props={childProps}
    />
    {/* <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
    <AuthenticatedRoute path="/notes/new" exact component={NewNote} props={childProps} />
    <AuthenticatedRoute path="/notes/:id" exact component={Notes} props={childProps} /> */}
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
