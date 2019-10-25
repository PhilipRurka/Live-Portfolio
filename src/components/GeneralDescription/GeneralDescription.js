import React from 'react';
import styled from '@emotion/styled/macro';
import GradContainer from '../CornerGradContainer';
import { breakPoints } from '../../helpers/breakPoints';
import { COLORS } from '../../helpers/colors';

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
    paragraph: 'Yes, several actually! I am proficient in Html, Pug, Css, Sass, Javascript, Angular 1 and now working towards becoming a React Guru!'
  },
  {
    span: 'Why do you do what you do?',
    paragraph: 'My ultimate goal is to better others quality of life. Whether its by _____ or simply by the encounters and relationships built.'
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

  'div + .descriptionItem': {
    marginTop: '1.5em'
  },

  'span': {
    fontSize: '1.75rem',
    '&.purple': { color: COLORS.purple },
    '&.green': { color: COLORS.green },
    '&.red': { color: COLORS.red },
  },

  'p': {
    lineHeight: '1.5em',
    margin: '0',
    fontSize: '1rem',
    textAlign: 'justify',
    textJustify: 'inter-word'
  },

  [breakPoints.breakPointLG]: {
    paddingLeft: '50px',
    margin: '0'
  }
});

const GeneralDescription = () => {
  return (
    < >
      <Container>
        <Content>
          <GradContainer
            corner={{ topLeft: 'green', bottomRight: 'purple' }} 
            >
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
          </GradContainer>
        </Content>
      </Container>
    </ >
  )
};

export default GeneralDescription;