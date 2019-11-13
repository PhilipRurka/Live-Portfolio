import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../../helpers/colors';

const width = '3px';

const GradWrapper = styled.div(({ corner, color }) => {

  let selectedColor;
  let shared;
  let corners = [];

  Object.keys(corner).map((position, i) => {
    const hasMultiple = Object.keys(corner).length > 1;

    const color = corner[position];

    if(color === 'red') {
      selectedColor = COLORS.red
    } else if(color === 'purple') {
      selectedColor = COLORS.purple
    } else if(color === 'green') {
      selectedColor = COLORS.green
    };
  
    if(position === 'topLeft') {
      shared = {
        top: '0',
        left: '0'
      };
      
      corners[i] = {
        '&::before': {
          ...shared,
          bottom: (hasMultiple === 'half') ? '0': '50%',
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
    };
    
    if(position === 'topRight') {
      shared = {
        top: '0',
        right: '0'
      };
  
      corners[i] = {
        '&::before': {
          ...shared,
          bottom: (hasMultiple === 'half') ? '0': '50%',
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
    };
    
    if(position === 'bottomLeft') {
      shared = {
        bottom: '0',
        left: '0'
      };
  
      corners[i] = {
        '&::before': {
          ...shared,
          top: (hasMultiple === 'half') ? '0': '50%',
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
    };
    
    if(position === 'bottomRight') {
      shared = {
        bottom: '0',
        right: '0'
      };
  
      corners[i] = {    
        '&::before': {
          ...shared,
          top: (hasMultiple === 'half') ? '0': '50%',
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
  });

  const secondCorner = (corners[1] === undefined) ? null : {
    '& > .secondCorner': {
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100%',
      width: '100%',
      pointerEvents: 'none',
      ...corners[1],
      
      '&::before, &::after': {
        content: '""',
        position: 'absolute'
      }
    }
  };

  return {
    position: 'relative',
    height: 'auto',
    width: '100%',
    padding: '1.5rem',
    ...corners[0],
    ...secondCorner,

    '&::before, &::after': {
      content: '""',
      position: 'absolute'
    }
  }
});

const CornerGradContainer = ({ children, corner }) => {

  return (
    <GradWrapper className='gradWrapper'
      corner={corner}
    >
      {children}
      <div className='secondCorner' />
    </GradWrapper>
  );
};

export default CornerGradContainer;