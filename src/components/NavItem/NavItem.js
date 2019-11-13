import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../../helpers/colors';
import { navTransition } from '../../helpers/general';

const Content = styled.div(({ triggeredLocation, currentLocation }) => {
  let psudoStyle;
  let addedStyle;

  if(currentLocation === triggeredLocation) {
    addedStyle = null;
    psudoStyle = { width: '100%' };

  } else {
    psudoStyle = { width: '0' };
    addedStyle = { cursor: 'pointer' };
  };

  return {
    position: 'relative',
    display: 'inline-block',
    padding: '1.25em 2em',

    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      left: '0',
      height: '0.3rem',
      backgroundColor: COLORS.green,
      width: '0',
      ...navTransition(),
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
      top: '3px',
      margin: '0',
      color: COLORS.red,
      letterSpacing: '1px',
      ...addedStyle,

      '&:hover::after': {
        width: '100%'
      },

      '&, &::before, &::after': {
        whiteSpace: 'nowrap'
      },

      '&::before, &::after': {
        content: 'attr(title)',
        position: 'absolute',
        top: '0',
        left: '0',
        ...navTransition()
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

const NavItem = ({
  triggeredLocation,
  copy,
  goToPage,
  currentLocation
}) => {

  return (
    <Content
      triggeredLocation={triggeredLocation}
      currentLocation={currentLocation}
    >
      <label
        title={copy}
        onClick={() => ( goToPage(triggeredLocation) )}
      >{copy}</label>
    </Content>
  );
};

export default NavItem;