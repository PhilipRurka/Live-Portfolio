/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled/macro';
import { jsx, css } from '@emotion/core'
import { COLORS } from '../../helpers/colors';
import { navTransition, sharedTags } from '../../helpers/general';
import {
  LANDING_PAGE,
  PROJECTS_PAGE,
  REACT_DIARY_PAGE,
  HELPFUL_RESOURCES_PAGE,
  QUESTIONS_AND_ANSWERS_PAGES
} from '../../helpers/constants';

const styles = (type) => {

  let addedStyles = {};

  if(type === 'external') {
    addedStyles = {
      position: 'relative',
      display: 'inline-block',
      textDecoration: 'none !important',
      outline: 'none !important',
      
      '&, &:active': {
        color: `${COLORS.red} !important`,
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
        color: `${COLORS.purple} !important`,
        ...navTransition()
      }
    }
  };

  return {
    ...addedStyles
  }
};

const External = ({ type, text, href }) => {

  return <a
    title={text}
    href={href}
    css={styles(type)}
    {...sharedTags} >
    {text}
  </a>
};

const Internal = () => {
  
  return (
    <div></div>
  )
};

const NavLabels = ({
  type,
  text,
  href,
  icon = null,
  hoveredIcon = null,

}) => {

  if(type === 'external') {
    return <External
    type={type}
    text={text}
    href={href} />
  } else {
    return <Internal /> 
  }

};

export default NavLabels;



/**
 * Params will type.
 * Type will be 
 */