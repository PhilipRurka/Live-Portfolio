import React from 'react';
import styled from '@emotion/styled/macro';

class LandingPage extends React.Component {

  Wrapper = styled.div({});

  render() {
    const { Wrapper } = this;

    return (
      <Wrapper className='container'>
        <h1>Landing Page!</h1>
      </Wrapper>
    );
  };
};

export default LandingPage;