import { combineReducers } from "redux";
import { todos } from './todos';
import visibilityFilter from './visibilityFilter'
import { LOAD_TODOS } from '../actions/todos';
import { fetchStateFrom } from '../actions/fetchActionUtils'

function listStatus(state = "ok", action) {
  return fetchStateFrom(LOAD_TODOS, action, state);
}

const todoApp = combineReducers({
  todos, 
  visibilityFilter,
  listStatus
})

export default todoApp