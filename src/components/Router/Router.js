import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Pages from '../Pages';

const routeOptions = {
  landingPage: `${process.env.PUBLIC_URL}/`,
  projectsPage: '/projects'
};

const Router = () => {
  const { landingPage, projectsPage } = routeOptions

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={landingPage} component={(props) => (
          <Pages {...props} page={landingPage} />
        )} />
        <Route path={projectsPage} component={(props) => (
          <Pages {...props} page={projectsPage} />
        )} />
        <Redirect to={landingPage} component={(props) => (
          <Pages {...props} page={landingPage} />
        )} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;