import React from 'react';
import styled from '@emotion/styled/macro';
import { navTransition } from '../../helpers/general'
import { COLORS } from '../../helpers/colors';

const height = '32px';

const MenuLabel = styled.div(({ icon, hoveredIcon }) => ({
  position: 'relative',
  height,
  width: '88px',
  
  '&, *': { cursor: 'pointer' },
  '&:hover .hovered': { width: '100%' },

  'label': {
    height: '32px',
    margin: '0',
    paddingTop: '6px',
    paddingLeft: '50px',
    overflow: 'hidden',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '0',
      transform: 'translateY(-50%)',
      zIndex: '0',
      height: '38px',
      width: '38px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    }
  },

  'label:not(.hidden)': {
    position: 'absolute',
    top: '0',
    left: '0',
  },

  '& > label': {
    zIndex: '0',
    color: COLORS.red,

    '&::before': {
      backgroundImage: `url("./images/${icon}")`
    },
  },

  '.hovered': {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    width: '0',
    ...navTransition(),

    '.hidden': {
      position: 'relative',
      zIndex: '-1',
      opacity: '0',
      width: 'initial',
    },

    'label + label': {
      color: COLORS.purple,

      '&::before': {
        backgroundImage: `url("./images/${hoveredIcon}")`
      },
    }
  }
}));

const TwoIconLabel = ({ text, icon, hoveredIcon, clickEvent }) => {

  return (
    <MenuLabel
      icon={icon}
      hoveredIcon={hoveredIcon}
      onClick={clickEvent} >
      <label>{text}</label>
      <div className="hovered">
        <label className='hidden'>{text}</label>
        <label>{text}</label>
      </div>
    </MenuLabel>
  );
};

export default TwoIconLabel;