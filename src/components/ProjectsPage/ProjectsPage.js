import React from 'react';
import Header from '../Header';
import styled from '@emotion/styled/macro';

class ProjectsPage extends React.Component {

  Wrapper = styled.div({});

  componentDidMount() {
    const {
      props: {
        updateCurrentLocation,
        history,
        updateHistory
      }
    } = this;

    updateCurrentLocation('/projects');
    updateHistory(history);
  };

  render() {
    const { Wrapper } = this;

    return (
      <Wrapper>
        <Header />
      </Wrapper>
    );
  };
};

export default ProjectsPage;