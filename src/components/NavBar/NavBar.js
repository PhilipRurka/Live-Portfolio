/** @jsx jsx */
import React from 'react';
import { jsx, keyframes } from "@emotion/core";
import styled from '@emotion/styled/macro';
import { COLORS } from '../../helpers/colors';

class Navbar extends React.Component {

  goToPage = (location) => {
    const { props: { history } } = this;
    history.push(location);
  };

  render() {
    const {
      goToPage,
      props: {
        currentLocation
      }
    } = this;

    return (
      < >
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
      </ >
    );
  };
};

class NavItem extends React.Component {

  Content = styled.div(({ triggeredLocation }) => {
    const { props: { currentLocation } } = this;
    let psudoStyle;
    let addedStyle;

    const sharedStyles = {
      overflow: 'hidden',
      width: '0',
      transition: 'width 0.3s ease'
    };

    if(currentLocation === triggeredLocation) {
      this.activeState = true;
      addedStyle = null;
      psudoStyle = { width: '100%' };

    } else {
      psudoStyle = { width: '0' };
      addedStyle = { cursor: 'pointer' };
      this.activeState = false;
    };

    return {
      position: 'relative',
      display: 'inline-block',
      padding: '1.25em 2em',
  
      '&::before, &::after': {
        content: '""',
        position: 'absolute',
        left: '0',
        width: '100%',
        height: '0.3rem',
        backgroundColor: COLORS.green,
        width: '0',
        ...sharedStyles,
        ...psudoStyle
      },
  
      '&::before': {
        top: 0
      },
  
      '&::after': {
        bottom: 0
      },


      'label': {
        position: 'relative',
        margin: '0',
        color: COLORS.red,
        letterSpacing: '1px',
        ...addedStyle,
  
        '&:hover::after': {
          width: '100%'
        },
  
        '&::before, &::after': {
          content: 'attr(title)',
          position: 'absolute',
          top: '0',
          left: '0',
          ...sharedStyles
        },
  
        '&::before': {
          color: COLORS.green,
          zIndex: '1',
          ...psudoStyle
        },
  
        '&::after': {
          color: COLORS.purple,
        },
      }
    };
  });

  render() {
    const {
      Content,
      props: {
        triggeredLocation,
        copy,
        goToPage
      }
    } = this;

    return (
      <Content
        triggeredLocation={triggeredLocation}
      >
        <label
          title={copy}
          onClick={() => ( goToPage(triggeredLocation) )}
        >{copy}</label>
      </Content>
    );
  };
};

export default Navbar;