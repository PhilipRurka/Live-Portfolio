import React from 'react';
import styled from '@emotion/styled/macro';
import Header from '../Header';
import Router from '../Router';

const GlobalWrapper = styled.div({});

const App = () => (
  <GlobalWrapper>
    <Header />
    <Router />
  </GlobalWrapper>
);

export default App;