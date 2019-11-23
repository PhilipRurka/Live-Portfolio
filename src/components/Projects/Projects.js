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
  },
  {
    name: 'BlueKiwi In React | Still being developed!',
    description: 'I am basically recreating an old project from scratch with some UI adjustments. By doing so, I will learn how to make API calls with React and hook everything up to a database. I am making frequent deployments for those who are curious about its progress.',
    link:'https://philiprurka.github.io/BlueKiwi-React/',
    image:'BlueKiwi-React.png'
  }
];

const imageWidth = '28rem';
let projectNumber = 1;

const shadow = '1px 1px 5px black'

const ProjectWrapper = styled.div(({ color }) => ({
  position: 'relative',
  padding: '4rem 0',
  backgroundColor: color,
  minHeight: '300px',
  overflow: 'hidden'
}));

const CopySection = styled.div({
  position: 'relative',
  color: 'white',

  'label, p': {
    textShadow: shadow
  },

  'label': {
    fontSize: '2rem',
    margin: '0',
    fontWeight: '700'
  },

  'hr': {
    border: 'none',
    height: '3px',
    width: 'calc(100% + ((100vw - 100%) / 2) )',
    backgroundColor: 'white',
    margin: '0',
    boxShadow: shadow
  },

  'p': {
    width: '100%',
    fontSize: '20px',
    fontWeight: '200',
    letterSpacing: '0.5px'
  },

  [breakPoints.breakPointMD]: {
    'p': {
      width: 'calc(100% - 200px)'
    }
  },

  [breakPoints.breakPointLG]: {

    'hr': {
      width: '100%'
    },

    'p': {
      width: 'calc(100% - 395px)'
    },
  }
});

const Image = styled.div(({ image, bigType }) => ({
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
    top: (bigType) ? '-40px' : '-50px',
    right: '-230px'
  },

  [breakPoints.breakPointLG]: {
    right: '-38px'
  }
}));

const CheckIt = styled.div(({ color }) => ({
  'a': {
    textDecoration: 'none',
    outline: 'none',
    margin: '10px auto 0',
    display: 'table',

    'button': {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      border: 'none',
      borderRadius: '5px',
      fontSize: '0.75rem',
      fontWeight: '600',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      padding: '10px 20px',
      color: color,
      boxShadow: '1px 1px 6px -1px black',
      transition: 'background-color 0.5s ease',

      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 1)'
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
}));

const Projects = () => {

  return (
    < >
      {projectsArray.map((project, index) => {
        const { name, description, link, image } = project;
        let color;
        let fontColor;

        if(projectNumber === 1) {
          color = COLORS.red;
          fontColor = '#0020be';
        } else if(projectNumber === 2) {
          color = COLORS.purple;
          fontColor = '#24ff7d';
        } else if(projectNumber === 3) {
          color = COLORS.green;
          fontColor = '#a50001';
          projectNumber = 0;
        };

        let isOdd = ((index % 2) === 0);

        projectNumber += 1;

        return (
          <ProjectWrapper
            key={name}
            color={color} >
            <CopySection
              className='container'
              fontColor={fontColor} >
              <label>{name}</label>
              <hr/>
              <p>{description}</p>
              <Image
                image={image} 
                bigType={isOdd} />
            </CopySection>
            <CheckIt
              className='container'
              color={color} >
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