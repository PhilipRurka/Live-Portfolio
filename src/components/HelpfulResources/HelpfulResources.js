import React from 'react';
import styled from '@emotion/styled/macro';

const Intro = styled.div({
  marginTop: '30px',

  'label': {
    fontSize: '2.3rem',
    lineHeight: '1em',
    fontWeight: '600',
    margin: '1rem 0'
  },

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
      </Intro>
    </div>
  );
};

export default HelpfulResources;