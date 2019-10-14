import React from 'react';
import styled from '@emotion/styled/macro';

class NavBar extends React.Component {

  Wrapper = styled.div({});

  Label = styled.label(({ triggeredLocation }) => {
    const { props: { currentLocation } } = this;

    const selected = (currentLocation === triggeredLocation )
      ? { color: 'red' } : { color: 'black' };

    return {
      ...selected
    }
  })
  
  NavItem = ({ copy, triggeredLocation }) => {
    const {
      goToPage,
      Label
    } = this;

    return (
      <Label
        triggeredLocation={triggeredLocation}
        onClick={() => ( goToPage(triggeredLocation) )}
      >{copy}</Label>
    );
  };

  goToPage = (location) => {
    const { props, props: { history } } = this;
    history.push(location);
  };

  render() {
    const { Wrapper, NavItem } = this;

    return (
      <Wrapper>
        <NavItem
          triggeredLocation='/'
          copy='Home' />
        <NavItem
          triggeredLocation='/projects'
          copy='Projects' />
      </Wrapper>
    );
  };
};


export default NavBar;


/**
 * On Page did mount, update the currentLocation store property.
 * That will in return update the NavItems.
 */