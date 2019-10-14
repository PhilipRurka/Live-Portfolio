import React from 'react';
import Header from '../Header';
import styled from '@emotion/styled/macro';

class LandingPage extends React.Component {

  Wrapper = styled.div({});

  componentDidMount() {
    const {
      props: {
        updateCurrentLocation,
        history,
        updateHistory
      }
    } = this;

    updateCurrentLocation('/');
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

export default LandingPage;