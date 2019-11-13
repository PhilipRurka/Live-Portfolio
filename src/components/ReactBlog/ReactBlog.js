import React from 'react';
import styled from '@emotion/styled/macro';
import CornerGradContainer from '../CornerGradContainer';
import { COLORS } from '../../helpers/colors';
import { navTransition } from '../../helpers/general';

const sharedTags = {
  target: '_blank',
  rel: 'noopener noreferrer'
};

const ReactBlogWrapper = styled.div({
  'label': {
    fontSize: '2.3rem',
    lineHeight: '1em',
    fontWeight: '600',
    margin: '1rem 0'
  },

  'span': {
    color: COLORS.green
  },

  'p': {
    lineHeight: '1.5em',
    margin: '0',
    fontSize: '1rem',
  },
  
  'a': {
    position: 'relative',
    display: 'inline-block',
    textDecoration: 'none',
    outline: 'none',

    '&, &:active': {
      color: COLORS.red,
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
      color: COLORS.purple,
      ...navTransition()
    },
  }
})

const ReactBlog = () => {

  return (
    < >
      <CornerGradContainer
        corner={{ topRight: 'green', bottomLeft: 'purple' }} 
        >
        <ReactBlogWrapper>
          <label>Dear React Diary</label>
          <p>
            <span>Log 1:&nbsp;</span>
            I kept hearing about you through friends, articles and the&nbsp;
            <a
              title="Stackoverflow's 2018 Developer Survey Results"
              href="https://insights.stackoverflow.com/survey/2018"
              {...sharedTags} >
              Stackoverflow's 2018 Developer Survey Results
            </a>
            . I think it’s time I give it a try and see what all of this hype is about!
            <br/> <br/>

            <span>Log 2:&nbsp;</span>
            First I began with&nbsp;
            <a
              title="Wes Bos"
              href="https://wesbos.com/"
              {...sharedTags} >
              Wes Bos
            </a>
            ’s course called&nbsp;
            <a
              title="React For Beginners"
              href='https://reactforbeginners.com/'
              {...sharedTags} >
              React For Beginners
            </a>
            . Before I go any further, I have to say that this Wes Bos guy really sounds familiar, I have heard him before!
            <br/> <br/>

            <span>Log 3:&nbsp;</span>
            I am really enjoying these new concepts such as&nbsp;
            <a
              title="Components"
              href='https://reactjs.org/docs/react-component.html'
              {...sharedTags} >
              Components
            </a>
            ,&nbsp;
            <a
              title="Props"
              href='https://reactjs.org/docs/components-and-props.html'
              {...sharedTags} >
              Props
            </a>
            ,&nbsp;
            <a
              title="State"
              href='https://reactjs.org/docs/faq-state.html'
              {...sharedTags} >
              State
            </a>
            ,&nbsp;
            <a
              title="Lifecycle"
              href='https://reactjs.org/docs/state-and-lifecycle.html'
              {...sharedTags} >
              Lifecycle
            </a>
            ,&nbsp;
            <a
              title="..."
              href='https://reactjs.org/docs/getting-started.html'
              {...sharedTags} >
              ...
            </a>
            &nbsp;I am beginning to understand its value.
            <br/> <br/>

            <span>Log 4:&nbsp;</span>
            Ok I take it back! What’s the value of passing down props to a child, just to keep passing it down from children to children. This is getting dirty and repetitive fast! There has to be a better way!
            <br/> <br/>

            <span>Log 5:&nbsp;</span>
            I spoke to Kolton today, a great friend/mentor of mine, about what I have been learning! He informed me on this beautiful concept called&nbsp; 
            <a
              title="Context"
              href='https://reactjs.org/docs/context.html'
              {...sharedTags} >
              Context
            </a>
            . This is a much easier way to pass down props to a multi level down component. Also, he made my day by revealing his secret on how to style components with ease and clarity. His secret was ...
            <br/> <br/>

            <span>Log 6:&nbsp;</span>
            I am sorry to keep you waiting on this secret. Had a&nbsp;
            <a
              title="pizza"
              href='https://en.wikipedia.org/wiki/Pizza'
              {...sharedTags} >
              pizza
            </a>
            &nbsp;in the oven that needed some TLC. Programmer’s gotta eat! So, where was I? … Oh yeah. He told me about&nbsp;
            <a
              title="Emotion"
              href='https://emotion.sh/docs/introduction'
              {...sharedTags} >
              Emotion
            </a>
            &nbsp;
            <a
              title="Core"
              href='https://emotion.sh/docs/css-prop'
              {...sharedTags} >
              Core
            </a>
            /
            <a
              title="Styled"
              href='https://emotion.sh/docs/styled'
              {...sharedTags} >
              Styled
            </a>
            . It seems like a great way to style components and their jsx elements. Although, it’s easy to use, it took me some time until I developed a style for writing these styles. And about this “Context”. Ouff, this one gave me a headache for a couple of days. However, once I fully understood it, it went well. This method must be the method to pass props down multiple layers.
            <br/> <br/>

            <span>Log 7:&nbsp;</span>
            Oh My God! That’s where I heard Wes Bos before! Wes Bos and&nbsp;
            <a
              title="Scott Tolinski"
              href='https://www.scotttolinski.com/'
              {...sharedTags} >
              Scott Tolinski
            </a>
            &nbsp;run this very insightful podcast called&nbsp;
            <a
              title="Syntax"
              href='https://syntax.fm/'
              {...sharedTags} >
              Syntax
            </a>
            . They cover all sorts of topics on Front-End Development.
            <br/> <br/>

            <span>Log 8:&nbsp;</span>
            Today, I decided to start a new project to practice what I have learned to date. I figured, I could build a 1 page application before getting into the&nbsp;
            <a
              title="Router"
              href='https://reactjs.org/community/routing.html'
              {...sharedTags} >
              Router
            </a>
            &nbsp;part of Wes Bos’s course. I decided to recreate the landing page of&nbsp;
            <a
              title="IoTplace"
              href='http://www.iotplace.store/'
              {...sharedTags} >
              IoTplace
            </a>
            . It seems to be going well.
            <br/> <br/>

            <span>Log 9:&nbsp;</span>
            After showcasing this lovely project to Kolton, he pointed out yet another method for sharing information from component to component. This method is called&nbsp;
            <a
              title="React-Redux"
              href='https://github.com/reduxjs/react-redux'
              {...sharedTags} >
              React-Redux
            </a>
            . What a life changer that was! I am glad I learned “Context” first, because struggling to learn about “Context” has helped me better understand React and how it works. Its by searching for solutions that we discover. The article I read and followed to understand and use React-Redux is&nbsp;
            <a
              title="here"
              href='https://www.valentinog.com/blog/redux/'
              {...sharedTags} >
              here
            </a>
            !
            <br/> <br/>
            
            <span>Log 10:&nbsp;</span>
            That project was great and all, however, it didn’t cover many of the complexities that can occur in the relationships between components. With that said, I have created a fun project called&nbsp;
            <a
              title="Form Submission"
              href='https://philiprurka.github.io/Form-Submission/'
              {...sharedTags} >
              Form Submission
            </a>
            . Haha, intriguing and compelling name for a project right? Anyway, my goal for this project was to fully implement the tools I had learned, get a better understanding of when to use&nbsp;
            <a
              title="Stateless/Functional vs Stateful/Class Components"
              href='https://itnext.io/react-component-class-vs-stateless-component-e3797c7d23ab'
              {...sharedTags} >
              Stateless/Functional vs Stateful/Class Components
            </a>
            &nbsp;and rock out with this new concept “React-Redux”.
            <br/> <br/>
            
            <span>Log 11:&nbsp;</span>
            I am having so much fun with this project. I just keep building on to it. I am debating whether I should keep adding features to it or turn it into something practical, like a todo list of some sort.
            <br/> <br/>
            
            <span>Log 12:&nbsp;</span>
            Let’s start working with React Route! What should I implement and/or build?!? How about I rebuild my Portfolio Site. It’s currently built in Angular 1. Hehe, not for long!
            <br/> <br/>
            
            <span>Log 13:&nbsp;</span>
            Oh My God!!! I am having this issue with my navigation links. Their hover effects are resetting on page change. There is something that I am missing! I am spending way too much time on this! After a lot of time had passed, I learned an important lesson! React, in a way, maps out the&nbsp;
            <a
              title="DOM"
              href='https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction'
              {...sharedTags} >
              DOM
            </a>
            , so upon re-rendering, React knows what to update. As long as the DOM Elements maintain their references with React, React can update the DOM elements without having to create a new one. I knew this already, however, it’s not something I had thought of. At first I thought my issue was a styling issue, then it was a form of&nbsp;
            <a
              title="Rendering"
              href='https://reactjs.org/docs/rendering-elements.html'
              {...sharedTags} >
              Rendering
            </a>
            &nbsp;issue. But when I realised that the component may be recreated every time the page changed, which would mean the reference would be lost and a new component would be replacing the old one, I traced up the nodes of the application’s component&nbsp;
            <a
              title="tree"
              href='https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393'
              {...sharedTags} >
              tree
            </a>
            &nbsp;and noticed that my Header was a child of the components generated by my Router Component. To resolve the issue, I simply moved my Header up and made it a sibling of the Router Component.
            <br/> <br/>
            
            <span>Log 14:&nbsp;</span>
            Ok my new portfolio site is complete. Well new in terms of re-built. It looks exactly the same as before. Which reminds me, I have to update this old content and projects page. That will, however, have to happen on another day. I must focus on getting this to Prod and replacing the old code.
            <br/> <br/>
            
            <span>Log 15:&nbsp;</span>
            Today, I took down philiprurka.com and attempted to deploy my code using&nbsp;
            <a
              title="Netlify"
              href='https://www.netlify.com/'
              {...sharedTags} >
              Netlify
            </a>
            . I had to try Netlify. I kept hearing great things about it via Kolton, Alex (Another friend/mentor) and the podcast “Syntax”. It’s very easy to use, says every article, youtube video and everyone. So how hard can it be?
            <br/> <br/>
            
            <span>Log 16:&nbsp;</span>
            Fuck my life! I have spent around 4h trying to deploy my damn code onto Netlify. The interface and the application is very easy to use, I'll give it that, but it doesn’t seem to like my project. I have even with ease deployed a project created by Wes Bos as a proof of concept and it took about 1 minute to deploy. That deployment went well and worked as expected. I mean, I don't know why I was expecting any different, he is kind of the shit! I must be missing something considering that I started my project off with&nbsp;
            <a
              title="create-react-app"
              href='https://github.com/facebook/create-react-app'
              {...sharedTags} >
              create-react-app
            </a>
            . … About 2h later. ... Ok ok ok! After troubleshooting with both my mentors, I have realised that the issue is still unknown! Haha. I am losing it, I am going mental!
            <br/> <br/>
            
            <span>Log 17:&nbsp;</span>
            I finally figured it out! Ok, I don’t feel bad about this anymore considering its not an obvious solution. What had happened was, before trying to deploy this on Netlify, I had it running on&nbsp;
            <a
              title="Github Pages"
              href='https://pages.github.com/'
              {...sharedTags} >
              Github Pages
            </a>
            &nbsp;and to that, I had to have a “homepage” key in my “package.json” that pointed to my Github project “https://philiprurka.github.io/Live-Portfolio/”. Because there was a subdirectory “Live-Portfolio”, when my project would perform a production build, it would add “Live-Portfolio” to the start of each of my static resource call. As soon as I removed that old line of code, Netlify became as easy as everyone said it was.
            <br/> <br/>
            
            <span>Log 18:&nbsp;</span>
            Awesome, its now live, lets try and break it! … I seem to have some sort of Routing issue. When I click on a Navigation Link, it routes as expected, however, when I copy/past “philiprurka.com/projects” into the URL, it fails. … Right on, I just had to configure Netlify and add some files to my project to handle these redirection. Finally I can go to sleep!
          </p>
        </ReactBlogWrapper>


        {/* {reactBlog.map((item, i) => {
          let color;

          if(ItemNumber === 1) {
            color = 'red';
          } else if(ItemNumber === 2) {
            color = 'purple';
          } else if(ItemNumber === 3) {
            color = 'green';
            ItemNumber = 0;
          };

          ItemNumber += 1;

          return (
            <ReactBlogWrapper key={i}>
              <p>{item}</p>
            </ReactBlogWrapper>
          );
        })} */}
      </CornerGradContainer>
    </ >
  )
};

export default ReactBlog;