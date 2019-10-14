import React from 'react';
import styled from '@emotion/styled/macro';
import Router from '../Router';

const GlobalWrapper = styled.div({});

const App = () => (
  <GlobalWrapper>
    <Router />
  </GlobalWrapper>
);

export default App;