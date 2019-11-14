import React from 'react';
import styled from '@emotion/styled/macro';
import { navTransition, sharedTags } from '../../helpers/general';
import Anchors from '../Anchors';

const Intro = styled.div({
  marginTop: '30px',

  'label, span': {
    display: 'inline-block',
    lineHeight: '1em',
    fontWeight: '600',
    margin: '1rem 0 0.5rem'
  },

  'label': { fontSize: '2.3rem' },
  'span': { fontSize: '1.5rem' },

  'p': {
    letterSpacing: '0.5px'
  }
})

const HelpfulResources = () => {

  return (
    <div className='container'>
      <Intro col-lg-6>
        <label>Helpful Resources</label>
        <p>
          The first thing I have learned about Developers is how helpful and friendly they are. They took this open source to heart and share their passion with the world. On a daily basis, I might add! It’s absolutely amazing if you think about it. Anytime I make a form of online post, about some issues I am having with any kind of code or concept, someone is there to help. Heck, event when someone has clearly given you a well thought out answer, other problem solving enthusiasts still take the time to share with you a different solution, their solution. It blows my mind how generous this community is. I am proud to be part of this community of Developers. Anyway, before I get all teared up, I would like to share with you some of the resources that have and still help me to this day.
        </p>
        <span>Development Goods</span>
        <p>
        <Anchors
          title='GitKraken'
          href="https://www.gitkraken.com/" >
        </Anchors>
        &nbsp;is a beautiful and concise app that makes github action easy. They neatly show your GitHub repositories branches and how they behave.
        </p>
      </Intro>
    </div>
  );
};

export default HelpfulResources;