import {
  UPDATE_CURRENT_LOCATION, 
  UPDATE_HISTORY,
  UPDATE_LOCATION,
  TOGGLE_MOBILE_BUBBLE
} from '../helpers/constants';

export function updateCurrentLocation(payload) {
  return { type: UPDATE_CURRENT_LOCATION, payload };
};

export function updateHistory(payload) {
  return { type: UPDATE_HISTORY, payload };
};

export function updateLocation(payload) {
  return { type: UPDATE_LOCATION, payload };
};

export function toggleMobileBubble(payload) {
  return { type: TOGGLE_MOBILE_BUBBLE, payload };
};