import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../../helpers/colors';
import { breakPoints } from '../../helpers/breakPoints';

const projectsArray = [
  {
    name: 'Blue Kiwi',
    description: 'This is a project I have been working on with a wonderful team of rockstars. Check it out and let us know what you think.',
    link: 'http://www.iotplace.store',
    image: 'BlueKiwi.png'
  },
  {
    name: 'SimpTek',
    description: 'Here is a company website that I have built. I very much enjoyed this project. The SimpTek Team are a bunch of passionate, hungry go-getters. I have also worked and build features on their Dashboard (For which I can not display on my portfolio site.).',
    link: 'http://www.simptekinc.com',
    image: 'SimpTek.png'
  },
  {
    name: 'Form Submission',
    description: 'This project was created with the intent of gaining a better understanding of React. I do plan on developing it more and more ass time goes on. In this project, I worked with Redux-React, form validations & storing/removing/retraving session storage data.',
    link:'https://philiprurka.github.io/Form-Submission/',
    image:'Form-Submission.png'
  },
  {
    name: 'Ezabble',
    description: 'The first time I used a library (Bootstrap) I was first confused, until I understood how they worked, than blown away. I kept thinking that, someone made this and simply made it available and free. Ever since that day, I have always wanted to make my own library for the hopes that someday someone will use my solution for their problem. Big or small, I wanted to contribute and give back to the community. That said, here is my first (and not the last) library. Let me remove the annoyance of having to create a beautiful tooltip.',
    link:'https://github.com/PhilipRurka/ezabble',
    image:'Ezabble.png'
  }
];

const imageWidth = '28rem';
const imageRightPosition = '100px';
let projectNumber = 1;

const ProjectWrapper = styled.div(({ color }) => ({
  position: 'relative',
  padding: '4rem 0',
  backgroundColor: color,
  minHeight: '300px',
  overflow: 'hidden'
}));

const CopySection = styled.div({
  color: COLORS.white,

  'label': {
    fontSize: '1.5rem',
    margin: '0'
  },

  'hr': {
    border: 'none',
    height: '3px',
    width: 'calc(100% + ((100vw - 100%) / 2))',
    backgroundColor: 'white',
    margin: '0'
  },

  'p': {
    width: '100%'
  },

  [breakPoints.breakPointMD]: {
    'p': {
      width: `calc(100% - ${imageWidth} + ((100vw - 100%) /2) + ${imageRightPosition})`
    }
  },

  [breakPoints.breakPointLG]: {
    'p': {
      width: `calc(100% - ${imageWidth} + ((100vw - 100%) /2))`
    },
  }
});

const Image = styled.div(({ image }) => {
  let imageHeight;

  return {
    width: '100%',
    margin: 'auto',
    paddingBottom: '58vw',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url("./images/${image}")`,
    
    [breakPoints.breakPointSM]: {
      width: imageWidth,
      padding: 'initial',
      height: '18rem'
    },

    [breakPoints.breakPointMD]: {
      position: 'absolute',
      top: '22px',
      right: `-${imageRightPosition}`
    },

    [breakPoints.breakPointLG]: {
      right: '0'
    }
  };
});

const CheckIt = styled.div({
  'a': {
    textDecoration: 'none',
    outline: 'none',
    margin: '10px auto 0',
    display: 'table',

    'button': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: 'none',
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      padding: '10px 20px',
      color: COLORS.white,
      transition: 'background-color 0.5s ease',

      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 1)'
      }
    },

    [breakPoints.breakPointSM]: {
      marginTop: '10px'
    },
  
    [breakPoints.breakPointMD]: {
      margin: '15px 0 0 0',
      display: 'inline-block'
    }
  }
});

const Projects = () => {

  return (
    < >
      {projectsArray.map((project) => {
        const { name, description, link, image } = project;
        let color;

        if(projectNumber === 1) {
          color = COLORS.red;
        } else if(projectNumber === 2) {
          color = COLORS.purple;
        } else if(projectNumber === 3) {
          color = COLORS.green;
          projectNumber = 0;
        }

        projectNumber += 1;

        return (
          <ProjectWrapper key={name} color={color}>
            <CopySection className='container'>
              <label>{name}</label>
              <hr/>
              <p>{description}</p>
            </CopySection>
            <Image image={image} />
            <CheckIt className='container'>
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer' >
                <button>
                  Check It!
                </button>
              </a>
            </CheckIt>
          </ProjectWrapper>
        );
      })}
    </ >
  );
};

export default Projects;