import React from 'react';
import styled from '@emotion/styled/macro';
import CornerGradContainer from '../CornerGradContainer';
import { breakPoints } from '../../helpers/breakPoints';
import { COLORS } from '../../helpers/colors';
import { navTransition } from '../../helpers/general';
import { QUESTIONS_AND_ANSWERS_PAGES } from '../../helpers/constants';

let ItemNumber = 1;

// Simple Questions & Answers
// For more in depth Questions & Answers, please navigate to ________.
const contentArray = [
  {
    span: 'Who are you?',
    paragraph: 'A self taught Front-End Developer who absolutely loves developing. Especially with a hard working and passionate team!'
  },
  {
    span: 'Proficiencies?',
    paragraph: 'Yes, several actually! I am proficient in HTML, Pug, CSS, Sass, Javascript, Angular 1 and React.'
  },
  {
    span: 'Why do you do what you do?',
    paragraph: 'My ultimate goal is to help increase the quality of life of others. Whether its by sharing knowledge/experiences or simply by the encounters and relationships we build.'
  },
  {
    span: 'What’s a normal day?',
    paragraph: 'Aside from building applications, websites, dashboards, emails and email signatures. I absolutely enjoy working on personal projects, gaining additional knowledge, going on adventures, Parkour, video capturing, video editing and creating art.'
  }
];

const Container = styled.div({
  position: 'relative',
  paddingBottom: '100% !important',
});

const Content = styled.div({
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  overflowY: 'scroll',
  margin: '2rem 0',

  [breakPoints.breakPointLG]: {
    paddingLeft: '50px',
    margin: '0'
  },

  'div + .descriptionItem': {
    marginTop: '1.5em'
  },

  '.gradWrapper': {
    '& > label': {
      fontSize: '2.3rem',
      lineHeight: '1em',
      fontWeight: '600'
    },

    '& > p': {
      margin: '0 0 30px',

      'a': {
        position: 'relative',
        display: 'inline-block',
        textDecoration: 'none',
        outline: 'none',
    
        '&, &:active': {
          color: COLORS.red,
        },
    
        '&:hover::after': {
          width: '100%'
        },
    
        '&, &::after': {
          whiteSpace: 'nowrap',
          cursor: 'pointer'
        },
    
        '&::after': {
          content: 'attr(title)',
          position: 'absolute',
          top: '0',
          left: '0',
          color: COLORS.purple,
          ...navTransition()
        },
      }
    }
  },

  '.descriptionItem': {

    'span': {
      fontSize: '1.75rem',
      lineHeight: '1em',
      marginBottom: '5px',
      display: 'inline-block',
      '&.purple': { color: COLORS.purple },
      '&.green': { color: COLORS.green },
      '&.red': { color: COLORS.red },
    },
  
    'p': {
      lineHeight: '1.5em',
      margin: '0',
      fontSize: '1rem',
      textAlign: 'justify'
    }
  }
});

const goToPage = (location, history) => {
  history.push(process.env.PUBLIC_URL + location);
};

const GeneralDescription = ({ history }) => {
  return (
    < >
      <Container>
        <Content>
          <CornerGradContainer
            corner={{ topLeft: 'green', bottomRight: 'purple' }} 
            >
            <label>Simple Questions <br /> & Answers</label>
            <p>For a more in depth Questions & Answers, please navigate to&nbsp;
              <a
                title='Q&A'
                onClick={() => ( goToPage(QUESTIONS_AND_ANSWERS_PAGES, history) )} >
                Q&A
              </a>
            .</p>
            {contentArray.map((item) => {
              const { span, paragraph } = item;
              let color;
  
              if(ItemNumber === 1) {
                color = 'red';
              } else if(ItemNumber === 2) {
                color = 'purple';
              } else if(ItemNumber === 3) {
                color = 'green';
                ItemNumber = 0;
              };
    
              ItemNumber += 1;

              return (
                <div key={item.span} className='descriptionItem'>
                  <span className={color}>{span}</span>
                  <p>{paragraph}</p>
                </div>
              );
            })}
          </CornerGradContainer>
        </Content>
      </Container>
    </ >
  )
};

export default GeneralDescription;