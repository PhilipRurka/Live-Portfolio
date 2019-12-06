import React from 'react';
import styled from '@emotion/styled/macro';
import { breakPoints } from '../../helpers/breakPoints';

const ResumePageWrapper = styled.div({
  marginTop: '50px',
  '*': { letterSpacing: '0.5px' },
  'a': {
    textDecoration: 'underline',
    '&:hover': {
      color: '#007bff'
    }
  },

  'img': {
    width: '100%',

    [breakPoints.breakPointSM]: {
      display: 'block',
      width: '450px'
    }
  },
  
  'p': {
    color: 'gray',
    fontWeight: '500',

    'a': {
      color: 'gray',
    }
  },

  '.header': {
    textAlign: 'center',

    '.header-content': {
      margin: '20px 0 40px',
    },

    'label': {
      fontSize: '50px',
      lineHeight: '1em',
      margin: '0'
    },

    'p': {
      display: 'block',
      margin: '4px 0',

      '& + p': {
        position: 'relative',

        '&::before': {
          position: 'absolute',
          top: '0',
          left: '10px',
          borderLeft: '1px solid gray',
          height: '20px'
        }
      },

      [breakPoints.breakPointLG]: {
        display: 'inline-block',
        paddingLeft: '20px',

        '&::before': { content: '""' }
      },
    },
  },

  '.wrapper': {
    position: 'relative',
    paddingLeft: '40px',

    '&::before': {
      content: '""',
      height: '20px',
      width: '20px',
      position: 'absolute',
      top: '0',
      left: '0',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    },

    '& > label': {
      lineHeight: '1em',
      fontSize: '31px',
      textTransform: 'uppercase',
      fontWeight: '600'
    },

    'li, .content': {
      '& > span': {
        fontSize: '25px',
        fontWeight: '500',
        display: 'block',
        lineHeight: '1.2em',

        '&:first-of-type': {
          position: 'relative',

          '&::before': {
            content: '""',
            height: '10px',
            width: '10px',
            position: 'absolute',
            top: '5px',
            left: '-35px',
            border: '2px solid black',
            borderRadius: '50%',
            backgroundColor: 'white'
          }
        },
  
        '& + span': {
          color: 'gray',
          margin: '5px 0 15px'
        }
      }
    },

    'li': {

      '& + li': {
        marginTop: '40px'
      }
    },
  },

  '.profile-wrapper': {
    
    '&::before': {
      backgroundImage: 'url(./images/profile.svg)'
    }
  },
  
  '.employment-history-wrapper': {
    
    '&::before': {
      backgroundImage: 'url(./images/employment.svg)'
    }
  },

  '.education-wrapper': {
    
    '&::before': {
      backgroundImage: 'url(./images/education.svg)'
    }
  },

  '.sar-wrapper': {

    '.sar-titles': {
      fontWeight: '600',
      color: 'gray',
      margin: '30px 0 0'
    },
    
    '&::before': {
      backgroundImage: 'url(./images/success.svg)'
    }
  },

  '.content': {
    marginBottom: '50px',

    '&::before': {
      content: '""',
      width: '2px',
      position: 'absolute',
      top: '34px',
      bottom: '0',
      left: '10px',
      transform: 'translateX(-50%)',
      backgroundColor: 'black'
    },

    'p': {
      margin: '0',
      '& + p': {
        marginTop: '16px'
      }
    }
  },

  '.bullet': {
    position: 'relative',
    display: 'block',
    paddingLeft: '20px',
    marginLeft: '10px',

    '&::before': {
      content: '""',
      height: '6px',
      width: '6px',
      borderRadius: '50%',
      position: 'absolute',
      top: '6px',
      left: '0',
      backgroundColor: 'gray'
    }
  },
});

const Header = () => (
  <div className="header">
    <label>Philip Rurka</label>
    <div className="header-content">
      <p className='title'>React Front-End Developer</p>
      <p className="location">Montreal, H3K 1S2, Canada</p>
      <p className="phoneNumber">
        <a href="tel:5062612325">(506) 261-2325</a>
      </p>
      <p className="email">
        <a href="mailto:hey@philiprurka.com">hey@philiprurka.com</a>
      </p>
    </div>
  </div>
);

const Profile = () => (
  <div className="profile-wrapper wrapper">
    <label>Profile</label>
    <div className='profile-content content'>
      <p>
        Greetings!
        <br />
        I am a bilingual self-taught Front-End Developer who absolutely loves developing. Especially with a hard working and passionate team! A healthy work culture is very important to me. My ultimate goal is to help increase the quality of life of others. Whether its by sharing knowledge/experiences or simply by the encounters and relationships we build.
      </p>
      <p>
        My proficiencies are the following:
        <span className='bullet'>HTML</span>
        <span className='bullet'>Pug</span>
        <span className='bullet'>CSS</span>
        <span className='bullet'>Sass</span>
        <span className='bullet'>Javascript</span>
        <span className='bullet'>Angular1</span>
        <span className='bullet'>React</span>
      </p>
      <p>
        I have obtained skills such as:
        <span className='bullet'>Building emails</span>
        <span className='bullet'>Building email signatures</span>
        <span className='bullet'>Leading a team</span>
        <span className='bullet'>Conducting and leading meetings</span>
        <span className='bullet'>Creating, writing and optimizing processes</span>
        <span className='bullet'>Design system creation and implementation</span>
        <span className='bullet'>Handling cleaning, sanitizing and rebuilding complex data structures from requests</span>
        <span className='bullet'>Handling complex UI revamps/redesigns while users are not affected</span>
        <span className='bullet'>Major work with Graphing libraries</span>
      </p>
    </div>
  </div>
);

const EmploymentHistory = () => (
  <div className="employment-history-wrapper wrapper">
    <label>Employment History</label>
    <div className='employment-history-content content'>
      <ul>
        <li>
          <span>Front-End Developer & Team Lead at&nbsp;
            <a
              href="https://www.simptekinc.com/"
              target='_blank'
              rel='noopener noreferrer' >
              SimpTek
            </a>
            , Fredericton, NB</span>
          <span>December 2016 - February 2019</span>
          <p>
            My first position in the Tech Industry was an internship at SimpTek. After 1 month of being an intern, I was employed. I joined a team of well skilled developers and had much to learn. During my 2 years of working at this innovative startup, I went from:
            <span className='bullet'>Spending little time on sleep and many extra hours at cafes to learn what an API was, what to do with them and how to develop in Angular1.</span>
            to
            <span className='bullet'>Being Team Lead of the Technology Department.</span>
          </p>
          <p>By the time I grew to Team Lead, my responsibilities were the following:
            <span className='bullet'>Front-End Development</span>
            <span className='bullet'>On a basic level, managed the tech team</span>
            <span className='bullet'>Delegate tasks to the Front-End team</span>
            <span className='bullet'>Represented the tech team in meetings</span>
            <span className='bullet'>Conducted demo’s of the current product & upcoming features</span>
            <span className='bullet'>Conduct & lead meetings</span>
            <span className='bullet'>Create new or adjust previous processes</span>
            <span className='bullet'>Hold a monthly feedback & retrospective sessions with every individual within the Tech Team</span>
            <span className='bullet'>Ensure no one within the tech team is blocked and if they were, work toward unblocking them</span>
            <span className='bullet'>Research on new technologies to better the efficiency and effectiveness of the Tech Team</span>
          </p>
          <p>
            The projects I worked on were the Building360 Dashboard, their website, custom dynamic emails and custom email signatures.
            <span className='bullet'><strong>Building360 Dashboard:</strong> I had a major part in building their version 1 and version 2 of their Dashboard. Within this project, I had implemented multiple custom and interactive Graphs that would dictate information displayed in a filterable table and vise versa. I got to build the Login, Reset Password, Registration process and all of their emails.</span>
            <span className='bullet'><strong>SimpTek Website:</strong> I had redesigned the styling folder structure and built version 2 from scratch.</span>
            I can share more details regarding these projects in person.
          </p>
          <p>
          I can elaborate more in person as to what processes and implementations I brought forward to better the efficiency, effectiveness and culture of the overall Tech Team.
          </p>
          <p>My main reasons for leaving are:
            <span className='bullet'>I really wanted to live in Montreal. Fredericton is a small town, too small for this hungry hustler.</span>
            <span className='bullet'>I wanted to let go of Angular1 and become proficient in ReactJs.</span>
            <span className='bullet'>I wanted to have taste of Freelancing. There is a lot to gain when exposing yourself to different environments, practices, styles and teams.</span>
          </p>
        </li>
        <li>
          <span>Freelance Front-End Developer at&nbsp;
            <a
              href="https://renorun.com/"
              target='_blank'
              rel='noopener noreferrer' >
              RenoRun
            </a>
            , Montreal</span>
          <span>February 2019 - April 2019</span>
          <p>
            I was brought in as an hourly rate contractor that ended up lasting 2 months. During my time there, I worked on a 2 week deadline for their Marketplace site. With 100 hour in and the help of their backend team, we delivered! I also worked on re-building their entire website. During that process, I got to work with Google Maps and some of its custom actions.
            <br />
            If you want some more information regarding this job, I would be happy to share in person.
          </p>
        </li>
      </ul>
    </div>
  </div>
);

const Education = () => (
  <div className="education-wrapper wrapper">
    <label>Education</label>
    <div className="education-content content">
      <span>Self-Taught</span>
      <p>
        As a self-taught developers, I have used various resources to acquire my skills, such as:
        <span className='bullet'>Both SimpTek and RenoRun</span>
        <span className='bullet'>
          <a
            href="https://teamtreehouse.com/"
            target='_blank'
            rel='noopener noreferrer' >
            Team Treehouse
          </a>
          &nbsp;-&nbsp;
          <a
            href="https://teamtreehouse.com/philiprurka"
            target='_blank'
            rel='noopener noreferrer' >
            Profile
          </a>
        </span>
        <span className='bullet'>Various documentations and blogs</span>
        <span className='bullet'>Collaborating with my mentor</span>
        <span className='bullet'>Building multiple projects to better improve myself</span>
        <span className='bullet'>Wes Bos's&nbsp;
          <a
            href="https://reactforbeginners.com/"
            target='_blank'
            rel='noopener noreferrer' >
            React For Beginners
          </a>
          <img src="./images/Wes-Certificate.png" alt="Certificate"/>
        </span>
      </p>
    </div>
  </div>
);

const SAR = () => (
  <div className="sar-wrapper wrapper">
    <label>SAR (Situation, Action, Result)</label>
    <div className='employment-history-content content'>
      <ul>
        <li>
          <span>Our Remote Developers</span>
          <span className='sar-titles'>Situation:</span>
          <p>
            When I became Team Lead at SimpTek, I felt it was important to get closer to each of my team members and dive deeper into our culture. I knew my team members from the Fredericton office very well, considering I spent my days working beside them, however, there were two developers located in the Halifax office (Different city in a different province) that I only really got to know through meetings and work interactions. My worries were that they may not feel included in our work and/or team culture and they may be missing some elements in their work environment that could better their work efficient/effective, engagement and more importantly, their health. I also wanted to better understand what it was like to be a remote worker and see what improvements can be done to better help them feel included.
          </p>
          <span className='sar-titles'>Action:</span>
          <p>
            I decided to move to Halifax for a month (Entirely out of my own pocket). I rented an apartment that was far enough from the office that allowed me to experience a 2 hour daily commute. I wanted, to the best of my abilities, experience their day to day.
          </p>
          <span className='sar-titles'>Result:</span>
          <p>
            As a result, I better understood what it was like to be a remote worker within the Tech Team.
            I got closer to my, now friends from Halifax (We went fishing a couple occasions while I was there). I was able to make some requests for some office supplies and other supplies that helped them out tremendously. Since my trip to Halifax, I had noticed a positive shift in their behaviour and overall engagement.
            As a Team Lead, it’s important to create connections, establish healthy dynamics and promote a positive culture with your team members.
          </p>
        </li>
        <li>
          <span>Currently writting copy for the next example.</span>
        </li>
      </ul>
    </div>
  </div>
);

const ResumePage = () => {

  return (
    <ResumePageWrapper className='container'>
      <Header />
      <Profile />
      <EmploymentHistory />
      <Education />
      <SAR />
    </ResumePageWrapper>
  );
};

export default ResumePage;