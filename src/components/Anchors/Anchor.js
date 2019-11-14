import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../../helpers/colors';
import { navTransition, sharedTags } from '../../helpers/general';

const Anchor = styled.a({
  position: 'relative',
  display: 'inline-block',
  textDecoration: 'none !important',
  outline: 'none',

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
});

const Anchors = ({href, title}) => {

  return (
    <Anchor
      title={title}
      href={href}
      {...sharedTags} >
      {title}
    </Anchor>
  );
};

export default Anchors;