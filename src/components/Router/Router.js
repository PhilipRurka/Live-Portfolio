import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import {
  LANDING_PAGE,
  PROJECTS_PAGE,
  REACT_DIARY_PAGE,
  HELPFUL_RESOURCES_PAGE,
  QUESTIONS_AND_ANSWERS_PAGES
} from '../../helpers/constants';
import Pages from '../Pages';

const routeOptions = {
  landingPage: process.env.PUBLIC_URL + LANDING_PAGE,
  projectsPage: process.env.PUBLIC_URL + PROJECTS_PAGE,
  reactDiaryPage: process.env.PUBLIC_URL + REACT_DIARY_PAGE,
  helpfulResourcesPage: process.env.PUBLIC_URL + HELPFUL_RESOURCES_PAGE,
  questionsAnswersPage: process.env.PUBLIC_URL + QUESTIONS_AND_ANSWERS_PAGES
};

const Router = () => {
  const {
    landingPage,
    projectsPage,
    reactDiaryPage,
    helpfulResourcesPage,
    questionsAnswersPage
  } = routeOptions

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={landingPage} component={(props) => (
          <Pages {...props} page={landingPage} />
        )} />
        <Route path={projectsPage} component={(props) => (
          <Pages {...props} page={projectsPage} />
        )} />
        <Route path={questionsAnswersPage} component={(props) => (
          <Pages {...props} page={questionsAnswersPage} />
        )} />
        <Route path={reactDiaryPage} component={(props) => (
          <Pages {...props} page={reactDiaryPage} />
        )} />
        <Route path={helpfulResourcesPage} component={(props) => (
          <Pages {...props} page={helpfulResourcesPage} />
        )} />
        <Redirect to={landingPage} component={(props) => (
          <Pages {...props} page={landingPage} />
        )} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;