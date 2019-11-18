import React from 'react';
import styled from '@emotion/styled/macro';
import ModalBubbles from '../ModalBubbles';
import NavLabels from '../NavLabels';
import {
  LANDING_PAGE,
  PROJECTS_PAGE,
  REACT_DIARY_PAGE,
  HELPFUL_RESOURCES_PAGE,
  QUESTIONS_AND_ANSWERS_PAGES
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
    marginLeft: '15px'
  }
});

const MobileContainer = styled.div({

  'ul': {
    marginTop: '15px'
  },

  'li': {
    height: '32px',
    paddingLeft: '13px',

    'label' : {
      marginTop: '7px'
    }
  },
});

const MobileBubble = ({ mobileBubble, closeBubble }) => {
  
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
              <ul>
                <li>
                  <NavLabels
                    type='internal'
                    text='Home'
                    clickEvent={LANDING_PAGE} />
                </li>
                <li>
                  <NavLabels
                    type='internal'
                    text='Projects'
                    clickEvent={PROJECTS_PAGE} />
                </li>
                <li>
                  <NavLabels
                    type='internal'
                    text='React Diary'
                    clickEvent={REACT_DIARY_PAGE} />
                </li>
                <li>
                  <NavLabels
                    type='internal'
                    text='Helpful Resources'
                    clickEvent={HELPFUL_RESOURCES_PAGE} />
                </li>
                <li>
                  <NavLabels
                    type='internal'
                    text='Q&A'
                    clickEvent={QUESTIONS_AND_ANSWERS_PAGES} />
                </li>
              </ul>
            </MobileContainer>
        </MobileWrapper>
      </ModalBubbles>
    </>
  );
};

export default MobileBubble;