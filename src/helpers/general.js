export function navTransition(options = []) {
  const repeatingStyle = ' 0.3s ease';
  let transition = `width ${repeatingStyle}`;

  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    transition = transition + ', ' + option + repeatingStyle
  };

  return {
    overflow: 'hidden',
    width: '0',
    transition 
  }
};


// {/* Relative Hover Click */}
// <div className='menuLabel'>

// {/* Absolute */}
// <label>Menu</label>

// {/* Absolute Transition */}
// <div className="hovered">

//   {/* Relative */}
//   <label className='hidden'>Menu</label>

//   {/* Absolute */}
//   <label>Menu</label>