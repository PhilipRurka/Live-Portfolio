import React from 'react';
import LandingPage from '../LandingPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import styled from '@emotion/styled/macro';

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

    updateCurrentLocation(page);
    updateHistory(history);
  };

  render() {
    const { Wrapper, props: { page } } = this;

    let chosenPage;

    if(page === '/') {
      chosenPage = <LandingPage />
    } else if(page === '/projects') {
      chosenPage = <ProjectsPage />
    };

    return (
      <Wrapper>
        {chosenPage}
      </Wrapper>
    );
  }
};

export default Pages;