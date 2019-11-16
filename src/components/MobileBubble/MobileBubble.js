import React from 'react';
import styled from '@emotion/styled/macro';
import ModalBubbles from '../ModalBubbles';
import TwoIconLabel from '../TwoIconLabel';

const MobileWrapper = styled.div({
  height: '200px',
  width: '200px',
});

const CloseLabel = styled.div({

});

const MobileBubble = ({ mobileBubble }) => {
  
  return (
    <ModalBubbles open={mobileBubble}>
      <MobileWrapper>
        <TwoIconLabel
          text='Close'
          icon='close-icon-red.svg'
          hoveredIcon='close-icon-purple.svg' />
      </MobileWrapper>
    </ModalBubbles>
  );
};

export default MobileBubble;