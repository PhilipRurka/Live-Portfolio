import React from 'react';
import styled from '@emotion/styled/macro';
import NavItem from '../NavItem';
import Contact from '../Contact';

class Navbar extends React.Component {

  Wrapper = styled.div({
    display: 'flex',
    justifyContent: 'space-between'
  });

  NavItems = styled.div({

  });

  Contact = styled.div({});

  goToPage = (location) => {
    const { props: { history } } = this;
    history.push(location);
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
        <Contact />
      </Wrapper>
    );
  };
};

export default Navbar;