import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../../helpers/colors';

// const Overlay = styled.div({
//   position: 'fixed',
//   top: '0',
//   left: '0',
//   right: '0',
//   bottom: '0',
//   zIndex: '1',
//   backgroundColor: `rgba(240, 241, 242, 0.9)`
// });

const ModalWrapper = styled.div({
  // position: 'fixed',
  // top: '0',
  // left: '0',
  // zIndex: '2'
});

const ModalContainer = styled.div({});
const ModalContent = styled.div({});

const Modals = ({ children }) => {

  return (
    <>
      {/* <Overlay /> */}
      <ModalWrapper>
        <ModalContainer>
          <ModalContent>
            {children}
          </ModalContent>
        </ModalContainer>
      </ModalWrapper>
    </>
  );
};

export default Modals;