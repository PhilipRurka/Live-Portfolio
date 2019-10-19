import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../../helpers/colors';

const width = '3px';

const GradWrapper = styled.div(({ corner, color }) => {

  let selectedColor;
  let addedStyles;
  let shared;

  if(color === 'red') {
    selectedColor = COLORS.red
  } else if(color === 'purple') {
    selectedColor = COLORS.purple
  } else if(color === 'green') {
    selectedColor = COLORS.green
  };

  if(corner === 'topLeft') {
    shared = {
      top: '0',
      left: '0'
    };
    
    addedStyles = {
      '&::before': {
        ...shared,
        bottom: '0',
        width,
        background: `linear-gradient(${selectedColor}, transparent)`
      },
    
      '&::after': {
        ...shared,
        right: '0',
        height: width,
        background: `linear-gradient(to right, ${selectedColor}, transparent)`
      }
    };
    
  } else if(corner === 'topRight') {
    shared = {
      top: '0',
      right: '0'
    };

    addedStyles = {
      '&::before': {
        ...shared,
        bottom: '0',
        width,
        background: `linear-gradient(${selectedColor}, transparent)`
      },
    
      '&::after': {
        ...shared,
        left: '0',
        height: width,
        background: `linear-gradient(to right, transparent, ${selectedColor})`
      }
    };

  } else if(corner === 'bottomLeft') {
    shared = {
      bottom: '0',
      left: '0'
    };

    addedStyles = {
      '&::before': {
        ...shared,
        top: '0',
        width,
        background: `linear-gradient(transparent, ${selectedColor})`
      },

      '&::after': {
        ...shared,
        right: '0',
        height: width,
        background: `linear-gradient(to right, ${selectedColor}, transparent)`
      }
    };

  } else if(corner === 'bottomRight') {
    shared = {
      bottom: '0',
        right: '0'
    };

    addedStyles = {    
      '&::before': {
        ...shared,
        top: '0',
        width,
        background: `linear-gradient(transparent, ${selectedColor})`
      },
    
      '&::after': {
        ...shared,
        left: '0',
        height: width,
        background: `linear-gradient(to right, transparent, ${selectedColor})`
      }
    };
  };

  return {
    position: 'relative',
    height: 'auto',
    width: '100%',
    padding: '1rem',
    ...addedStyles,

    '&::before, &::after': {
      content: '""',
      position: 'absolute'
    }
  };
});

const CornerGradContainer = ({ children, corner, color }) => {

  return (
    <GradWrapper
      corner={corner}
      color={color}
    >
      {children}
    </GradWrapper>
  );
};

export default CornerGradContainer;