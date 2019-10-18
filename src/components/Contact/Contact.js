import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../../helpers/colors';
import { navTransition } from '../../helpers/general';

const Wrapper = styled.div({
    
  'ul': {
    listStyle: 'none',
    margin: '0',
    height: '100%'
  },
  
  'li': {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'middle',

    '&:first-of-type': { height: '100%' },

    '& + li': {
      marginLeft: '10px'
    }
  },

  '.github, .linkedIn': {
    position: 'relative',
    height: '2rem',
    width: '2rem',

    '.icon': {
      position: 'relative',
      height: '100%',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      cursor: 'pointer',

      '&:hover::after': { width: '100%' },

      '&::after': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        ...navTransition
      }
    }
  },

  '.github .icon': {
    backgroundImage: 'url("./images/github-red.svg")',
    '&::after': { backgroundImage: 'url("./images/github-purple.svg")' }
  },
  
  '.linkedIn .icon': {
    backgroundImage: 'url("./images/linkedin-red.svg")',
    '&::after': { backgroundImage: 'url("./images/linkedin-purple.svg")' }
  },

  'a': {
    letterSpacing: '0.5px',
    color: COLORS.red,
    textDecoration: 'none',
    ...navTransition,

    '&:hover + a': { width: '100%' },

    '& + a': {
      position: 'absolute',
      top: '0',
      left: '0',
      color: COLORS.purple,
      pointerEvents: 'none'
    }
  }
});

const email = <a href="mailto:hey@philiprurka.com">hey@<strong>philiprurka.com</strong></a>

const Contact = ({ className }) => {

  return (
    <Wrapper className={className}>
      <ul>
        <li />
        <li>
          {email}
          {email}
        </li>
        <li className='github'>
          <div className="icon" />
        </li>
        <li className='linkedIn'>
          <div className="icon" />
        </li>
      </ul>
    </Wrapper>
  );
};

export default Contact;