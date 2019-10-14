import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from '../LandingPage';
import ProjectsPage from '../ProjectsPage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'          component={LandingPage}  />
      <Route       path='/projects'  component={ProjectsPage} />
      <Redirect    to='/'            component={LandingPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;