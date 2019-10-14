import {
  UPDATE_CURRENT_LOCATION,
  UPDATE_HISTORY,
  UPDATE_LOCATION
} from './constants';

const initialState = {
  currentLocation: '',
  history: {}
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  
  if(type === UPDATE_CURRENT_LOCATION) {
    return Object.assign({}, state, { currentLocation: payload })

  } else if(UPDATE_HISTORY) {
    return Object.assign({}, state, { history: payload })

  } else if(type === UPDATE_LOCATION) {

    let newState = Object.assign({}, state);
    newState.history.push(payload)
    newState = Object.assign({}, state, { history: newState.history });

    return newState;
  };

  return state;
};

export default rootReducer;