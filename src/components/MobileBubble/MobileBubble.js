import React from 'react';
import styled from '@emotion/styled/macro';
import ModalBubbles from '../ModalBubbles';
import NavLabels from '../NavLabels';
import {
  LANDING_PAGE,
  PROJECTS_PAGE,
  REACT_DIARY_PAGE,
  HELPFUL_RESOURCES_PAGE,
  QUESTIONS_AND_ANSWERS_PAGE,
  RESUME_PAGE
} from '../../helpers/constants';

const Overlay = styled.div(({ show }) => ({
  display: (show) ? 'initial' : 'none',
  position: 'fixed',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  zIndex: '4'
}));

const MobileWrapper = styled.div({
  width: '200px',
  padding: '13px 0',

  '.closeLabel': {
    margin: '0 0 7px 15px'
  }
});

const MobileContainer = styled.div({

  '.list': {
    marginTop: '15px'
  },

  'label': {
    height: '32px',
    width: '100%',
    padding: '7px 0 0 13px',

    '&::after, &::before': {
      top: '7px',
      left: '13px'
    }
  },
});

const MobileBubble = ({ mobileBubble, closeBubble, currentLocation }) => {
  
  return (
    <>
      <Overlay
        onClick={closeBubble}
        show={mobileBubble} />
      <ModalBubbles open={mobileBubble}>
        <MobileWrapper>
          <NavLabels
            className='closeLabel'
            type='internal'
            text='Close'
            icon='close-icon-red.svg'
            hoveredIcon='close-icon-purple.svg'
            clickEvent={closeBubble} />
            <MobileContainer>
              <div className='list'>
                <NavLabels
                  type='internal'
                  text='Home'
                  clickEvent={LANDING_PAGE}
                  closeBubble={closeBubble}
                  currentLocation={currentLocation} />
                <NavLabels
                  type='internal'
                  text='Projects'
                  clickEvent={PROJECTS_PAGE}
                  closeBubble={closeBubble}
                  currentLocation={currentLocation} />
                <NavLabels
                  type='internal'
                  text='React Diary'
                  clickEvent={REACT_DIARY_PAGE}
                  closeBubble={closeBubble}
                  currentLocation={currentLocation} />
                <NavLabels
                  type='internal'
                  text='Helpful Resources'
                  clickEvent={HELPFUL_RESOURCES_PAGE}
                  closeBubble={closeBubble}
                  currentLocation={currentLocation} />
                <NavLabels
                  type='internal'
                  text='Q&A'
                  clickEvent={QUESTIONS_AND_ANSWERS_PAGE}
                  closeBubble={closeBubble}
                  currentLocation={currentLocation} />
                <NavLabels
                  type='internal'
                  text='Resume/CV'
                  clickEvent={RESUME_PAGE}
                  closeBubble={closeBubble}
                  currentLocation={currentLocation} />
              </div>
            </MobileContainer>
        </MobileWrapper>
      </ModalBubbles>
    </>
  );
};

export default MobileBubble;