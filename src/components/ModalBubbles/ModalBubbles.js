import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../../helpers/colors';

const BubbleWrapper = styled.div(({ open }) => ({
  display: (open) ? 'block' : 'none',
  position: 'absolute',
  top: '-15px',
  left: '-15px',
  // padding: '15px',
  border: `2px solid ${COLORS.green}`,
  borderRadius: '5px',
  backgroundColor: 'white',
  zIndex: '5'
}));

const MobileBubbles = ({ children, open }) => {
  
  return (
   <BubbleWrapper open={open}>
      {children}
   </BubbleWrapper>
  );
};

export default MobileBubbles;