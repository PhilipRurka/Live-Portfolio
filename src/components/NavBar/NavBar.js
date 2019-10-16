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

const selectedAnimation = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
`

const test = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
`

class NavItem extends React.Component {

  activeState = null;

  Content = styled.div(() => {
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
        backgroundColor: COLORS.green
      },

      '&::before': {
        top: 0
      },

      '&::after': {
        bottom: 0
      }
    };
  });

  labelStyle = (triggeredLocation) => {
    const { props: { currentLocation } } = this;

    let beforeStyle;
    if(currentLocation === triggeredLocation) {
      this.activeState = true;
      beforeStyle = {
        animation: `${selectedAnimation} 1s ease-in-out`
      };

    } else {
      if(this.activeState) {
        beforeStyle = {
          animation: `${selectedAnimation} 1s ease-in-out`,
          animationDirection: 'reverse',
          width: '0'
        };

      } else {
        beforeStyle = {
          width: '0',
        }
      }
      this.activeState = false;
    }

    return {
      position: 'relative',
      margin: '0',
      color: COLORS.red,
      letterSpacing: '1px',

      '&:hover::after': {
        width: '100%'
      },

      '&::before, &::after': {
        content: 'attr(title)',
        position: 'absolute',
        top: '0',
        left: '0',
        overflow: 'hidden',
        transition: 'width 0.5s ease',
      },

      '&::before': {
        color: COLORS.green,
        zIndex: '1',
        ...beforeStyle
      },

      '&::after': {
        color: COLORS.purple,
        width: '0'
      },
    };
  };

  render() {
    const {
      Content,
      labelStyle,
      props: {
        triggeredLocation,
        copy,
        goToPage
      }
    } = this;

    return(
      <Content>
        <label
          title={copy}
          onClick={() => ( goToPage(triggeredLocation) )}
          css={labelStyle(triggeredLocation)}
        >{copy}</label>
      </Content>
    );
  };
};

export default Navbar;