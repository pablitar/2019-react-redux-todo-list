import { fetchConstants, postWithJSONBody, putRequestWithJSONBody } from './fetchActionUtils';
import _ from 'lodash';

export const LOAD_TODOS = fetchConstants("LOAD_TODOS")
export const ADD_TODO = fetchConstants("ADD_TODO")
export const TOGGLE_TODO = fetchConstants("TOGGLE_TODO")

let currentId = 0;

function createAsyncAction(fetchRequest, 
  fetchConstants, 
  jsonToAction = json => {return {response: json}},
  loadingParams = {},
  onSuccess
  ) {
  return async dispatch => {
    currentId += 1;
    const requestId = currentId;
    dispatch({ type: fetchConstants.loading, ...loadingParams, requestId })
    try {
      const response = await fetchRequest();
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: fetchConstants.ok, ...jsonToAction(json), requestId })
        if(_.isFunction(onSuccess)){
          onSuccess(dispatch, json)
        }
      } else {
        const message = json.status ? json.status : response.statusText;
        dispatch({ type: fetchConstants.error, message: message, requestId })
      }
    } catch (error) {
      dispatch({ type: fetchConstants.error, message: error.message, requestId});
    }
  }
}

export function loadItems() {
  return createAsyncAction(() => fetch("api/todos"), LOAD_TODOS, json => {return { todos: json}});
}

export function addTodo(description) {
  return createAsyncAction(
    () => fetch("api/todos", postWithJSONBody({description})), 
    ADD_TODO,
    json => {return { todo: json }},
    {description}
  );
}

export function toggleTodo(todo) {
  return createAsyncAction(
    () => fetch("api/todos/" + todo._id, putRequestWithJSONBody({...todo, done: !todo.done})), 
    TOGGLE_TODO,
    json => {return { todo: json}},
    {todo}
  );
}