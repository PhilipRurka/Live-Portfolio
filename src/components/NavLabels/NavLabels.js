/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled/macro';
import { jsx, css } from '@emotion/core'
import { sharedTags } from '../../helpers/general';
import { styles } from './NavLabels.container';

const goToPage = (location, history) => {
  history.push(process.env.PUBLIC_URL + location);
};

/** External External External External */
const External = ({
  text,
  href,
  icon,
  hoveredIcon,
  addedStyles
}) => {

  return <a
    title={text}
    href={href}
    css={styles(text, addedStyles, icon, hoveredIcon)}
    {...sharedTags} >
    {text}
  </a>
};
/** End End End End */

/** Internal Internal Internal Internal */
const Internal = ({
  text,
  addedStyles,
  clickEvent,
  icon,
  hoveredIcon,
  className,
  closeBubble,
  currentLocation,
  history
}) => {

  let clickHandler;
  let location;

  if(typeof clickEvent === 'string' || clickEvent instanceof String) {
    location = {
      currentLocation,
      triggeredLocation: clickEvent
    };

    clickHandler = () => {
      goToPage(clickEvent, history);
      if(closeBubble) {
        closeBubble();
      };
    };
  } else {
    clickHandler = clickEvent;
    location = null;
  };

  if(icon) {
    return (
      <div
        className={className}
        css={styles(text, addedStyles, icon, hoveredIcon)}
        onClick={clickHandler} >
        <label>{text}</label>
        <div className="hovered">
          <label className='hidden'>{text}</label>
          <label>{text}</label>
        </div>
      </div>
    );
  } else {
    return (
      <label
        title={text}
        css={styles(text, addedStyles, icon, hoveredIcon, location)}
        onClick={clickHandler} >
          {text}
      </label>
    );
  };
};
/** End End End End */

const NavLabels = ({
  type,
  text,
  href = null,
  clickEvent = null,
  icon = null,
  hoveredIcon = null,
  addedStyles = null,
  closeBubble = null,
  className = '',
  currentLocation = null,
  history

}) => {

  if(type === 'external') {
    return <External
      type={type}
      text={text}
      href={href}
      addedStyles={addedStyles} />
  } else {
    return <Internal
      type={type}
      text={text}
      className={className}
      icon={icon}
      hoveredIcon={hoveredIcon}
      clickEvent={clickEvent}
      addedStyles={addedStyles}
      closeBubble={closeBubble}
      currentLocation={currentLocation}
      history={history} />
  };

};

export default NavLabels;