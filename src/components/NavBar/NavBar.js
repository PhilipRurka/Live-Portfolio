import React from 'react';
import styled from '@emotion/styled/macro';
import NavItem from '../NavItem';
import Contact from '../Contact';
import { COLORS } from '../../helpers/colors';
import { navTransition } from '../../helpers/general'
import { breakPoints } from '../../helpers/breakPoints';
import {
  LANDING_PAGE,
  PROJECTS_PAGE,
  REACT_DIARY_PAGE,
  HELPFUL_RESOURCES_PAGE,
  QUESTIONS_AND_ANSWERS_PAGES
} from '../../helpers/constants';

class Navbar extends React.Component {

  Wrapper = styled.div({
    display: 'flex',
    justifyContent: 'space-between',

    '.contact, .mobileMenu': {
      margin: '15px 0',
    },
    
    [breakPoints.breakPointXXS]: {
      display: 'initial'
    },

    [breakPoints.breakPointMD]: {
      '.contact': {
        display: 'none',
        margin: 'initial',
        textAlign: 'initial'
      }
    }
  });

  NavItems = styled.div({
    display: 'none',

    [breakPoints.breakPointMD]: {
      display: 'initial',
    }
  });

  MobileMenu = styled.div({

    '.wrapper': {
      display: 'block',

      '.menuLabel': {
        position: 'relative',
        height: '40px',
        height: '32px',
        width: '88px',
        
        '&, *': {
          cursor: 'pointer',
        },

        '&:hover .hovered': {
          width: '100%',
          paddingLeft: '30px'
        },

        '& > label': {
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: '0',
          paddingTop: '6px',
          paddingLeft: '50px',
          margin: '0',
          color: COLORS.red,
          height: '32px',
          overflow: 'hidden',

          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '0',
            transform: 'translateY(-50%)',
            zIndex: '0',
            height: '38px',
            width: '38px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundImage: 'url("./images/hamburger-red.svg")',
          },
        },

        '.hovered': {
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          width: '0',
          ...navTransition(),

          '.hidden': {
            position: 'relative',
            zIndex: '-1',
            opacity: '0',
            width: 'initial',
            paddingTop: '6px',
            paddingLeft: '50px',
            height: '32px',
            overflow: 'hidden',

            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
              zIndex: '0',
              height: '38px',
              width: '38px',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundImage: 'url("./images/hamburger-red.svg")',
            },
          },

          'label + label': {
            position: 'absolute',
            top: '0',
            left: '0',
            color: COLORS.purple,
            margin: '0',
            paddingTop: '6px',
            paddingLeft: '50px',
            height: '32px',
            overflow: 'hidden',
  
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
              zIndex: '0',
              height: '38px',
              width: '38px',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundImage: 'url("./images/hamburger-purple.svg")',
            },
          }
        }
      },

      '.content': {
        display: 'none'
      },

      [breakPoints.breakPointMD]: {
        display: 'none'
      }
    }
  });

  Contact = styled.div({});

  goToPage = (location) => {
    const { props: { history } } = this;
    history.push(process.env.PUBLIC_URL + location);
  };

  render() {
    const {
      Wrapper,
      NavItems,
      MobileMenu,
      goToPage,
      props: {
        currentLocation
      }
    } = this;

    const navItems = {
      home: {
        triggeredLocation: LANDING_PAGE,
        copy: 'Home',
        goToPage,
        currentLocation
      },
      projects: {
        triggeredLocation: PROJECTS_PAGE,
        copy: 'Projects',
        goToPage,
        currentLocation
      },
      reactDiary: {
        triggeredLocation: REACT_DIARY_PAGE,
        copy: 'React Diary',
        goToPage,
        currentLocation
      },
      helpful: {
        triggeredLocation: HELPFUL_RESOURCES_PAGE,
        copy: 'Helpful Resources',
        goToPage,
        currentLocation
      },
      qAndA: {
        triggeredLocation: QUESTIONS_AND_ANSWERS_PAGES,
        copy: 'Q&A',
        goToPage,
        currentLocation
      }
    };

    return (
      <Wrapper>
        <NavItems>
          <NavItem {...navItems.home} />
          <NavItem {...navItems.projects} />
          <NavItem {...navItems.reactDiary} />
          <NavItem {...navItems.helpful} />
          <NavItem {...navItems.qAndA} />
        </NavItems>
        <MobileMenu className='mobileMenu'>
          <div className='wrapper'>
            <div className='menuLabel'>
              <label>Menu</label>
              <div className="hovered">
                <label className='hidden'>Menu</label>
                <label>Menu</label>
              </div>
            </div>
            <div className='content'>
              <ul>
                <li> <NavItem {...navItems.home} /> </li>
                <li> <NavItem {...navItems.projects} /> </li>
                <li> <NavItem {...navItems.reactDiary} /> </li>
                <li> <NavItem {...navItems.helpful} /> </li>
                <li> <NavItem {...navItems.qAndA} /> </li>
              </ul>
            </div>
          </div>
        </MobileMenu>
        <Contact className='contact' />
      </Wrapper>
    );
  };
};

export default Navbar;