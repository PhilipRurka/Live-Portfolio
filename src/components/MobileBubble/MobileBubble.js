import React from 'react';
import styled from '@emotion/styled/macro';
import ModalBubbles from '../ModalBubbles';
import TwoIconLabel from '../TwoIconLabel';
import {
  LANDING_PAGE,
  PROJECTS_PAGE,
  REACT_DIARY_PAGE,
  HELPFUL_RESOURCES_PAGE,
  QUESTIONS_AND_ANSWERS_PAGES
} from '../../helpers/constants';


const MobileWrapper = styled.div({
  height: '200px',
  width: '200px',
});

const MobileContainer = styled.div({

});

const goToPage = (location, history) => {
  history.push(process.env.PUBLIC_URL + location);
};

const MobileBubble = ({ mobileBubble, closeBubble, history }) => {
  
  return (
    <ModalBubbles open={mobileBubble}>
      <MobileWrapper>
        <TwoIconLabel
          text='Close'
          icon='close-icon-red.svg'
          hoveredIcon='close-icon-purple.svg'
          clickEvent={closeBubble} />
          <MobileContainer>
            <ul>
              <li>
                <TwoIconLabel
                text='Home'
                icon=''
                hoveredIcon=''
                clickEvent={() => (goToPage(LANDING_PAGE, history))} />
              </li>
              <li>
                <TwoIconLabel
                text='Projects'
                icon=''
                hoveredIcon=''
                clickEvent={() => (goToPage(PROJECTS_PAGE, history))} />
              </li>
              <li>
                <TwoIconLabel
                text='React Diary'
                icon=''
                hoveredIcon=''
                clickEvent={() => (goToPage(REACT_DIARY_PAGE, history))} />
              </li>
              <li>
                <TwoIconLabel
                text='Helpful Resources'
                icon=''
                hoveredIcon=''
                clickEvent={() => (goToPage(HELPFUL_RESOURCES_PAGE, history))} />
              </li>
              <li>
                <TwoIconLabel
                text='Q&A'
                icon=''
                hoveredIcon=''
                clickEvent={() => (goToPage(QUESTIONS_AND_ANSWERS_PAGES, history))} />
              </li>
            </ul>
          </MobileContainer>
      </MobileWrapper>
    </ModalBubbles>
  );
};

export default MobileBubble;