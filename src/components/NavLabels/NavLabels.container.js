import NavLabels from './NavLabels';
import { connect } from 'react-redux';
import { COLORS } from '../../helpers/colors';
import { navTransition } from '../../helpers/general';

// const sharedOpenCloseStyles = {
//   height: '32px',

//   'label': {
//     height: '32px',
//     padding: '6px 0 0 50px',
//   },

//   'label::before': {
//     height: '38px',
//     width: '38px'
//   }
// };

// const addedStylesObject = {
//   openStyles: {
//     // ...sharedOpenCloseStyles,
//     height: '32px',
//     width: '88px',

//     'label': {
//       height: '32px',
//       padding: '6px 0 0 50px',

//       '&::before': {
//         height: '38px',
//         width: '38px'
//       }
//     }
//   },

//   closeStyles: {
//     // ...sharedOpenCloseStyles,
//     height: '32px',
//     width: '88px',

//     'label': {
//       height: '32px',
//       padding: '6px 0 0 50px',

//       '&::before': {
//         height: '32px',
//         width: '32px'
//       }
//     }
//   }
// };

/**
 * *: addedStyle = sharedStyles 
 * 
 * 1 1 1 1 1 1 1 1 1 1 1 1 1
 * 1: key = width
 * 1: objectLocation = [openStyles']
 * Promise 1: addedStyle.openStyles. = 
 */

// const recursiveStyles = (sharedStyles, addedStyles, text, savedPosition) => {

//   let sharedStyle;

//   return new Promise ((resolve) => {

//     const recursiveFunc = (sharedStyles, addedStyles, text, savedPosition) => {

//       console.log('2');

//       sharedStyle = sharedStyles || [];
//       const addedStyle = addedStyles;
  
//       console.log('3');
  
//       Object.keys(addedStyle).map((key) => {
  
//         const style = addedStyle[key];
//         let objectLocation = savedPosition || [];
//         return new Promise ((resolve) => {
//           if(typeof style === 'string' || style instanceof String) {
//             // Save the value using lastPosition
//             if(objectLocation.length === 0) {
//               sharedStyle[key] = style;
//             } else if(objectLocation.length === 1) {
//               sharedStyle[objectLocation[0]][key] = style;
//             } else if(objectLocation.length === 2) {
//               sharedStyle[objectLocation[0]][objectLocation[1]][key] = style;
//             } else if(objectLocation.length === 2) {
//               sharedStyle[objectLocation[0]][objectLocation[1]][objectLocation[2]][key] = style;
//             } else if(objectLocation.length === 2) {
//               sharedStyle[objectLocation[0]][objectLocation[1]][objectLocation[2]][objectLocation[3][key]] = style;
//             } else if(objectLocation.length === 2) {
//               sharedStyle[objectLocation[0]][objectLocation[1]][objectLocation[2]][objectLocation[3]][objectLocation[4]][key] = style;
//             } else if(objectLocation.length === 2) {
//               sharedStyle[objectLocation[0]][objectLocation[1]][objectLocation[2]][objectLocation[3]][objectLocation[4]][objectLocation[5]][key] = style;
//             } else if(objectLocation.length === 2) {
//               sharedStyle[objectLocation[0]][objectLocation[1]][objectLocation[2]][objectLocation[3]][objectLocation[4]][objectLocation[5]][objectLocation[6]][key] = style;
//             } else if(objectLocation.length === 2) {
//               sharedStyle[objectLocation[0]][objectLocation[1]][objectLocation[2]][objectLocation[3]][objectLocation[4]][objectLocation[5]][objectLocation[6]][objectLocation[7]][key] = style;
//             };
  
//             return resolve();
//           } else {
//             objectLocation.push(key);
//             return recursiveFunc(sharedStyle, style, text, objectLocation);
//           };
//         });
//       });
//     };

//     if(addedStyles) {
//       return recursiveFunc(sharedStyles, addedStyles, text, savedPosition);
//     } else {
//       return resolve();
//     };
//   })
//   .then(() => {
//     console.log(text)
//     debugger
//     return sharedStyle;
//   });
// };


/**
 * Loop over the Added Styles
 * 
 */

export const styles = (
  text,
  addedStyles,
  icon,
  hoveredIcon,
  location
  ) => {

  // return new Promise ((resolve) => {
  //   return resolve()
  // })
  // .then(() => {
    let sharedStyles = {};

    if(icon) {
  
      sharedStyles = {
        position: 'relative',
        height: '32px',
        width: '88px',
        // FRONTEND: Temporary
        marginLeft: '15px 0 0 15px',
        
        '&, *': { cursor: 'pointer' },
        '&:hover .hovered': { width: '100%' },
  
        'label': {
          height: '32px',
          padding: '6px 0 0 50px',
          margin: '0',
          overflow: 'hidden',
  
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '0',
            height: '38px',
            width: '38px',
            transform: 'translateY(-50%)',
            zIndex: '0',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }
        },
  
        'label:not(.hidden)': {
          position: 'absolute',
          top: '0',
          left: '0',
        },
  
        '& > label': {
          zIndex: '0',
          color: COLORS.red,
  
          '&::before': {
            backgroundImage: `url("./images/${icon}")`
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
          },
  
          'label + label': {
            color: COLORS.purple,
  
            '&::before': {
              backgroundImage: `url("./images/${hoveredIcon}")`
            }
          }
        }
      };
    } else {
      sharedStyles = {
        position: 'relative',
        display: 'inline-block',
        textDecoration: 'none !important',
        outline: 'none !important',
        margin: '0',
        
        '&, &:active': {
          color: `${COLORS.red} !important`,
        },
        
        '&:hover::after': {
          width: '100%'
        },
        
        '&, &::after': { cursor: 'pointer' },
        '&, &::before, &::after': { whiteSpace: 'nowrap' },
        
        '&::after, &::before': {
          content: 'attr(title)',
          position: 'absolute',
          top: '0',
          left: '0',
          ...navTransition()
        },

        '&::after': {
          color: `${COLORS.purple} !important`
        },

        '&::before': {
          color: `${COLORS.green} !important`,
          width: (location && location.currentLocation === location.triggeredLocation) ? '100%' : '0'
        }
      }
    };

    return sharedStyles;

    
    // let finalStyles;
    
    if(text === 'Menu') {
      console.log('1');
    }
  
    // return finalStyles = recursiveStyles(sharedStyles, addedStylesObject[addedStyles], text)

  // })
  // .then((finalStyles) => {
  //   console.log(text);
  //   console.log('5');
  //   debugger
  //   return finalStyles
  // })
};

const mapToStateToProps = ({
  history
}) => ({
  history
});

export default connect(
  mapToStateToProps
) (NavLabels);