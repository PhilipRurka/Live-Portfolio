import React from 'react';
import styled from '@emotion/styled/macro';
import CornerGradContainer from '../CornerGradContainer';
import { COLORS } from '../../helpers/colors';

const QuestionsAnswersWrapper = styled.div({
  'label': {
    fontSize: '2.3rem',
    lineHeight: '1em',
    fontWeight: '600',
    margin: '1rem 0'
  },

  'p': {
    lineHeight: '1.5em',
    margin: '0',
    fontSize: '1rem',

    '&.bullet': {
      position: 'relative',
      paddingLeft: '15px',
    
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '6px',
        left: '0',
        height: '7px',
        width: '7px',
        borderRadius: '50%',
        backgroundColor: COLORS.green
      }
    }
  }
});

const QuestionsAnswersPage = () => {

  return (
    <div className="container">
      <CornerGradContainer
        corner={{ topLeft: 'purple', bottomRight: 'green' }} >
        <QuestionsAnswersWrapper>
          <span>
            <label>Who are you?</label>
            <p>I am a self taught Front-End Developer who absolutely loves developing. It’s got everything I love:</p>
            <p className='bullet'>Endless resources to learn from.</p>
            <p className='bullet'>Unique problems with dynamic solutions.</p>
            <p className='bullet'>A loving and helpful community.</p>
            <br />
            <p>There is nothing better than vibing with a solid team and cooperating on a healthy and inviting culture.</p>
            <br />
            <p>Here is a brief history since my first “Hello World”.</p>
            <p>On December 1st 2016, my journey began with these two words “Hello World”. After 10 months of taking various online courses such as Code Academy & Team Tree House, I acquired my first position within the Tech Industry. I began working as an intern for SimpTek. After 1 month of being an intern, I was employed. I joined a team of well skilled developers and had much to learn. During my 2 years of working at this innovative startup, I went from:</p>
            <p className="bullet">Spending many extra hours at cafes to learn what an API was and what to do with them and how to develop in Angular 1</p>
            <p>to</p>
            <p className="bullet">Being Team Lead of the Tech Department.</p>
            <br />
            <p>By the time I grew to Team Lead, my responsibilities were the following:</p>
            <p className='bullet'>Front-End Development</p>
            <p className='bullet'>On a basic level, managed the tech team</p>
            <p className='bullet'>Delegate tasks to the Front-End team</p>
            <p className='bullet'>Represented the tech team in meetings</p>
            <p className='bullet'>Conducted demo’s of the current product & upcoming features</p>
            <p className='bullet'>Conduct & lead meetings</p>
            <p className='bullet'>Create new or adjust previous processes</p>
            <p className='bullet'>Hold a monthly feedback & retrospective sessions with every individual within the Tech Team</p>
            <p className='bullet'>Ensure no one within the tech team is blocked and if they were, work on a solution</p>
            <p className='bullet'>Research on new technologies to better the efficiency and effectiveness of the Tech Team</p>
            <br />
            <p>One day, I had decided to move to Montreal and Freelance while learning React on the side. I really wanted to move away from Angular 1 which is what SimpTek was built on at the time. Since then, I freelanced for RenoRun. I built the UI for one of their Marketplaces. After that, I decided to focus all of my energy on learning React.</p>

            <br />
            <label>Proficiencies?</label>
            <p>My Proficiencies are the following:</p>
            <p className="bullet">Html</p>
            <p className="bullet">Pug</p>
            <p className="bullet">Css</p>
            <p className="bullet">Sass</p>
            <p className="bullet">Javascript</p>
            <p className="bullet">Angular 1</p>
            <p className="bullet">React (In Progress)</p>
            <br />
            <p>I have obtained skills such as:</p>
            <p className="bullet">Building emails</p>
            <p className="bullet">Building email signatures</p>
            <p className="bullet">Leading a team</p>
            <p className="bullet">Conducting and leading meetings</p>
            <p className="bullet">Writing and optimizing processes</p>

            <br />
            <label>Why do you do what you do?</label>
            <p>My ultimate goal is to help increase the quality of life of others. Whether its by sharing knowledge/experiences or simply by the encounters and relationships we build.</p>

            <br />
            <label>What’s a normal day?</label>
            <p>Aside from building applications, websites, dashboards, emails and email signatures. I absolutely enjoy working on personal projects, gaining additional knowledge, going on adventures, Parkour, video capturing, video editing and creating art.</p>
          </span>

        </QuestionsAnswersWrapper>
      </CornerGradContainer>
    </div>
  )
};

export default QuestionsAnswersPage;