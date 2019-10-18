import React from 'react';
import styled from '@emotion/styled/macro';
import NavBar from '../NavBar';
import { breakPoints } from '../../helpers/breakPoints';

const Wrapper = styled.div({
  paddingTop: '2.125rem',

  '& > h1': {
    fontSize: '2.5rem',
    position: 'relative',
    paddingLeft: '1.71em',
    margin: '0',

    '&::after': {
      content: '""',
      height: '1.42em',
      width: '1.22em',
      position: 'absolute',
      top: '50%',
      left: '0',
      transform: 'translateY(-50%)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundImage: 'url("./images/philip-rurka-logo.png")',
    },

    [breakPoints.breakPointMD]: {
      fontSize: '3.5rem'
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