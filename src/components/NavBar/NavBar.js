import React from 'react';
import styled from '@emotion/styled/macro';
import NavItem from '../NavItem';
import Contact from '../Contact'
import { breakPoints } from '../../helpers/breakPoints';
import {
  LANDING_PAGE,
  PROJECTS_PAGE,
  REACT_DIARY_PAGE,
  HELPFUL_RESOURCES_PAGE,
  QUESTIONS_AND_ANSWERS_PAGES
} from '../../helpers/constants';
import MobileBubble from '../MobileBubble';
import TwoIconLabel from '../TwoIconLabel';

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

      '.menuLabelWrapper': {
        position: 'relative'
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

  openMobileBubble = () => {
    const { props:{ toggleMobileBubble } } = this;
    toggleMobileBubble(true);
  };

  closeMobileBubble = () => {
    const { props:{ toggleMobileBubble } } = this;
    toggleMobileBubble(false);
  };

  render() {
    const {
      Wrapper,
      NavItems,
      MobileMenu,
      goToPage,
      openMobileBubble,
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
      <>
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
              <div className='menuLabelWrapper'>
                <MobileBubble />
                <TwoIconLabel
                  text='Menu'
                  icon='hamburger-red.svg'
                  hoveredIcon='hamburger-purple.svg'
                  clickEvent={openMobileBubble} />
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
      </>
    );
  };
};

export default Navbar;