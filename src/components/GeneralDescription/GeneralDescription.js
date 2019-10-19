import React from 'react';
import styled from '@emotion/styled/macro';
import GradContainer from '../CornerGradContainer';
import { breakPoints } from '../../helpers/breakPoints';
import { COLORS } from '../../helpers/colors';

const Container = styled.div({
  position: 'relative',
  paddingBottom: '100% !important',
});

const Content = styled.div({
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  overflowY: 'scroll',
  margin: '2rem 0',

  'label': {
    fontSize: '1.75rem',
    '&.purple': { color: COLORS.purple },
    '&.green': { color: COLORS.green },
  },

  'p': {
    lineHeight: '2em',
    margin: '0',
    fontSize: '1rem',
    textAlign: 'justify',
    textJustify: 'inter-word'
  },

  [breakPoints.breakPointLG]: {
    paddingLeft: '50px',
    margin: '0'
  }
});

const GeneralDescription = () => {
  return (
    < >
      <Container>
        <Content>
          <GradContainer
            corner='topLeft'
            color='green'
            >
            <label className='purple'>Hello World!</label>
            <p>I was on my way to becoming a licensed red seal carpenter with three out of the four blocks required to complete the college program. On december of 2016, I had gotten laid off for the winter due to shortage of work. Considering that I never was very good at standing still for too long, I took my brothers advice and jumped into a basic tutorial video on HTML. I ended up taking 10 months off of everything and dedicated all of my time to learning HTML, CSS and Javascript. Since the day I began learning about “Hello World” of Front-End, I’ve been madly passionate and can’t seem to satisfy my hunger for more. If I am not outside being active, I am inside working on the latest features for a client, personal projects, learning and/or finding ways to improve my quality of life. A healthy life means I can keep pushing forward, doing the things I love to do such as bringing beautiful designs to life and solving complex problems with simple solutions.</p>
          </GradContainer>
          <GradContainer
            corner='bottomRight'
            color='purple'
            >
            <label className='green'>Where am I?</label>
            <p>After 10 months of intense learning, Simptek offered me a one month unpaid internship. To be honest, I didn’t get much sleep during those days considering there were some frameworks that needed to be learned (Angular.js). Failure wasn't and still isn’t an option. I always do whatever it takes to get the job done. After the internship, I had become a fulltime employee. I have been working at SimpTek for a year and a half now (October 2end will be my two year anniversary). Hands down, one the best teams I got to work with. I am grateful that it's a startup, what better way is there to learn how to work in a fast paced environment, work closely with other departments as well as adapt to new scope changes and adjustments with ease.</p>
          </GradContainer>
        </Content>
      </Container>
    </ >
  )
};

export default GeneralDescription;