import React from 'react';
import styled from '@emotion/styled/macro';
import ImagesShowcase from '../ImagesShowcase';
import GeneralDescription from '../GeneralDescription';

  const LandingPageSection = styled.div({
    display: 'inline-block',
    verticalAlign: 'top',
    padding: '0',
  });

  const LandingPage = () => {

  return (
    <div className='container'>
      <LandingPageSection className='col-lg-6'>
        <ImagesShowcase />
      </LandingPageSection>
      <LandingPageSection className='col-lg-6'>
        <GeneralDescription />
      </LandingPageSection>
    </div>
  );
};

export default LandingPage;