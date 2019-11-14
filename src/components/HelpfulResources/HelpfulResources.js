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
    margin: '1rem 0 0'
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
        <Anchors title='GitKraken' href='https://www.gitkraken.com/' />
        &nbsp;is a beautiful and concise app that makes github actions easy to use. They neatly show your GitHub repositories branches and how they behave.
        </p>
        <p>
          <Anchors title='Visual Studio Code' href='https://code.visualstudio.com/' />
          &nbsp;is my personal favourite text editor. I have used Sublime and Atom in my past, however, they don’t come close to Visual Studio Code. It’s a bit of a learning curve, however, once you get the hang of it, you’ll never look back!
        </p>
        <p>
          I am a fan of being able to customize my own terminal. For that I use&nbsp;
          <Anchors title='iTerm 2' href='https://iterm2.com/' />
          . There are others out there like hyper (I hear is pretty good.), however, I have invested enough time into adjusting the visual of my terminal ,via iTerm 2, that I will stick with it a little longer. If you are interested in how to pimp out your terminal using iTerm 2, check out my easy to follow&nbsp;
          <Anchors title='tutorial' href='https://www.youtube.com/watch?v=bfWeeyf7Q4I' />
          .
        </p>
        <span>Communications</span>
        <p>
          <Anchors title='Slack' href='https://slack.com/' />
          &nbsp;is an application that I am currently using. This one is a must! They make communication amongst teams much easier!
        </p>
        <p>
          <Anchors title='Loom' href='https://www.loom.com/' />
          &nbsp;is a wonderful way to record your screen combined with the optional recording and/or recording of yourself. Once recorded, the video gets added to your profile’s library. There you can crop, share, …
        </p>
        <p>
          Write this one down! You don’t want to chance a misunderstanding with a poor choice of limited Slack Giphys, who knows, that insignificant message could END YOUR CAREER! Or ... I guess, it may just make your cleverly planned reaction just be ... “aight”, which lets be honest, feels much worse than the termination of one's career! Save yourself from the embarrassment and possibility your career, right&nbsp;
          <Anchors title='here' href='https://giphy.com/' />
          . Your welcome!
        </p>
        <span>Styling</span>
        <p>
          Looking for a specific transition for your CSS?&nbsp;
          <Anchors title='Cubic Bezier' href='https://cubic-bezier.com/' />
          !
        </p>
        <p>
          <Anchors title='Tape 2.0' href='https://bit.ly/2CFJPS6' />
          &nbsp;is a Chrome Extension that allows you to draw vertical and horizontal lines on your Chrome Browser with helpful measurements, comparing the distances in pixels between lines. I use this to line up elements.
        </p>
        <span>Colors</span>
        <p>
          <Anchors title='Name That Color' href='http://chir.ag/projects/name-that-color/#6195ED' />
          &nbsp;is a project built (Not by myself) to help you find a name for that odd color.
        </p>
        <p>
          <Anchors title='Coolors' href='https://coolors.co/' />
          &nbsp;is an easy to use color generator. It nicely displays 5 complementing colors and allows you to make altering adjustments.
        </p>
        <span>Icons</span>
        <p>
          <Anchors title='Icon Monstr' href='https://iconmonstr.com/' />
          &nbsp;provides free popular icons that can be downloaded in many formats.
        </p>
        <span>Fonts</span>
        <p>
          <Anchors title='Google Fonts' href='https://fonts.google.com/' />
          , of course everyone knows about this one, however, incase you are unaware, here you can find easy to implement fonts.
        </p>
        <p>
          <Anchors title='Canva, Font Combinations' href='https://www.canva.com/font-combinations/' />
          &nbsp;helps reduce the stress of trying to find complementary fonts.
        </p>
        <span>Images</span>
        <p>
          <Anchors title='TinyPNG' href='https://tinypng.com/' />
          &nbsp;is a .png & .jpg compression tool.
        </p>
        <p>
          <Anchors title='Unsplash' href='https://unsplash.com/' />
          &nbsp;provides free high quality photos.
        </p>
        <span>Text Filler</span>
        <p>
          <Anchors title='Hipsum' href='https://hipsum.co/' />
          &nbsp;generates filler mock text.
        </p>
        <span>Emails</span>
        <p>
          When it comes to creating Emails,&nbsp;
          <Anchors title='Litmus' href='https://litmus.com' />
          &nbsp;has it all.
        </p>
        <span>Testing</span>
        <p>
          <Anchors title='BrowserStack' href='https://www.browserstack.com/' />
          &nbsp;allows you to try your application on multiple browsers and devices.
        </p>
        <p>
          <Anchors title='Can I Use' href='https://caniuse.com/' />
          &nbsp;informs you on what CSS styles (as well as some other goods) are allowed on which browsers and much more.
        </p>
        <span>Inspirations</span>
        <p>
          <Anchors title='Dribbble' href='https://dribbble.com/' />
          &nbsp;is great for sharing your design ideas/work and for me, inspiration.
        </p>
        <span>Other</span>
        <p>
          This tool helps visually decode&nbsp;
          <Anchors title='jwt' href='https://jwt.io/' />
          &nbsp;tokens.
        </p>
        <p>
          <Anchors title='Bitly' href='https://bitly.com/' />
          &nbsp;is a go to tools and services for links.
        </p>
      </Intro>
    </div>
  );
};

export default HelpfulResources;