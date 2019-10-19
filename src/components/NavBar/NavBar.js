import React from 'react';
import styled from '@emotion/styled/macro';
import NavItem from '../NavItem';
import Contact from '../Contact';
import { breakPoints } from '../../helpers/breakPoints';

class Navbar extends React.Component {

  Wrapper = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    
    '.largeView': {
      display: 'none',
      margin: '15px 0',
      textAlign: 'center'
    },

    '.smallView': {
      margin: '15px 0',
      textAlign: 'center'
    },

    [breakPoints.breakPointSM]: {
      flexDirection: 'initial',

      '.smallView': {
        display: 'none',
        margin: 'initial',
        textAlign: 'initial'
      },

      '.largeView': {
        display: 'block'
      }
    }
  });

  NavItems = styled.div({
    display: 'flex',
    justifyContent: 'space-between',

    [breakPoints.breakPointSM]: {
      display: 'initial',
      justifyContent: 'initial'
    }
  });

  Contact = styled.div({});

  goToPage = (location) => {
    const { props: { history } } = this;
    history.push(process.env.PUBLIC_URL + location);
  };

  render() {
    const {
      Wrapper,
      NavItems,
      goToPage,
      props: {
        currentLocation
      }
    } = this;

    return (
      <Wrapper>
        <Contact className='smallView' />
        <NavItems>
          <NavItem
            triggeredLocation='/'
            copy='Home'
            goToPage={goToPage}
            currentLocation={currentLocation}
          />
          <NavItem
            triggeredLocation='/projects'
            copy='Projects'
            goToPage={goToPage}
            currentLocation={currentLocation}
          />
        </NavItems>
        <Contact className='largeView' />
      </Wrapper>
    );
  };
};

export default Navbar;