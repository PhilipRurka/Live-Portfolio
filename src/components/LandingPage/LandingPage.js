import React from 'react';
import styled from '@emotion/styled/macro';
import ImagesShowcase from '../ImagesShowcase';

  const LandingPageWrapper = styled.div({
    '.col-6': {
      display: 'inline-block',
      padding: '0'
    }
  });

  const Description = styled.div({});

  const LandingPage = () => {

  return (
    <LandingPageWrapper className='container'>
      <ImagesShowcase />
      <Description className='col-6'>

      </Description>
    </LandingPageWrapper>
  );
};

export default LandingPage;