import React from 'react';
import LandingPage from '../LandingPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ReactDiaryPage from '../ReactDiaryPage';
import HelpfulResourcesPage from '../HelpfulResourcesPage';
import QuestionsAnswersPage from '../QuestionsAnswersPage';
import ResumePage from '../ResumePage';
import styled from '@emotion/styled/macro';
import {
  LANDING_PAGE,
  PROJECTS_PAGE,
  REACT_DIARY_PAGE,
  HELPFUL_RESOURCES_PAGE,
  QUESTIONS_AND_ANSWERS_PAGE,
  RESUME_PAGE
} from '../../helpers/constants';

class Pages extends React.Component {

  Wrapper = styled.div({});

  componentDidMount() {
    const {
      props: {
        updateCurrentLocation,
        history,
        updateHistory,
        page
      }
    } = this;

    updateCurrentLocation(process.env.PUBLIC_URL + page);
    updateHistory(history);
  };

  render() {
    const { Wrapper, props: { page } } = this;

    let chosenPage;

    if(page === process.env.PUBLIC_URL + LANDING_PAGE) {
      chosenPage = <LandingPage />
    } else if(page === process.env.PUBLIC_URL + PROJECTS_PAGE) {
      chosenPage = <ProjectsPage />
    } else if(page === process.env.PUBLIC_URL + REACT_DIARY_PAGE) {
      chosenPage = <ReactDiaryPage />
    } else if(page === process.env.PUBLIC_URL + HELPFUL_RESOURCES_PAGE) {
      chosenPage = <HelpfulResourcesPage />
    } else if(page === process.env.PUBLIC_URL + QUESTIONS_AND_ANSWERS_PAGE) {
      chosenPage = <QuestionsAnswersPage />
    } else if(page === process.env.PUBLIC_URL + RESUME_PAGE) {
      chosenPage = <ResumePage />
    };

    return (
      <Wrapper>
        {chosenPage}
      </Wrapper>
    );
  }
};

export default Pages;