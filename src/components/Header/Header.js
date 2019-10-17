import React from 'react';
import styled from '@emotion/styled/macro';
import NavBar from '../NavBar';

const Wrapper = styled.div({
  paddingTop: '2.125rem',

  '& > h1': {
    fontSize: '3.5rem',
    position: 'relative',
    paddingLeft: '6rem',
    margin: '0',

    '&::after': {
      content: '""',
      height: '5rem',
      width: '4.3rem',
      position: 'absolute',
      top: '50%',
      left: '0',
      transform: 'translateY(-50%)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundImage: 'url(./images/philip-rurka-logo.png)',
    }
  },

  'hr': {
    height: '3px',
    width: 'calc(100% + ((100vw - 100%) / 2))',
    backgroundColor: 'black',
    margin: '14px 0 0'
  }
});

const Header = () => {

  return (
    <Wrapper className='container'>
      <h1>Philip Rurka</h1>
      <hr />
      <NavBar />
      
    </Wrapper>
  );
};

export default Header;