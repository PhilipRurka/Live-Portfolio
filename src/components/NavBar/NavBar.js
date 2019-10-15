/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled/macro';
import { jsx, css, keyframes } from '@emotion/core'
import { COLORS } from '../../helpers/colors';

const selectedAnimation = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
`

class NavBar extends React.Component {

  Wrapper = styled.div({});

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
  })

  Label = styled.label(() => {

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
        zIndex: '1'
      },

      '&::after': {
        color: COLORS.purple,
        width: '0'
      },
    };
  });
  
  NavItem = ({ copy, triggeredLocation }) => {
    const {
      goToPage,
      Label,
      Content,
      props: {
        currentLocation
      }
    } = this;

    return (
      <Content
        css={() => {

          if((currentLocation === triggeredLocation)) {

            return css`
              &::before, &::after { animation: ${selectedAnimation} 0.5s ease-in-out; }
            `
          } else {
            return css`
              &::before, &::after { width: 0; }
            `
          }
        }}
      >
        <Label
          title={copy}
          triggeredLocation={triggeredLocation}
          onClick={() => ( goToPage(triggeredLocation) )}
          css={() => {

            if((currentLocation === triggeredLocation)) {

              return css`
                &::before { animation: ${selectedAnimation} 0.5s ease-in-out; }
              `
            } else {
              return css`
                &::before { width: 0; }
              `
            }
          }}
        >{copy}</Label>
      </Content>
    );
  };

  goToPage = (location) => {
    const { props: { history } } = this;
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