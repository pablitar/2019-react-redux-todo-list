import { TOGGLE_VISIBILITY } from '../actions/toggleVisibility';

export default function visibilityFilter(state = 'TODO', action) {
  if(action.type === TOGGLE_VISIBILITY) {
    return action.visibility;
  }
  
  return state;
}