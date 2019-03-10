export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

let currentId = 0;

export function addTodo(description, id = currentId) {
  if(id === currentId) {
    currentId++;
  }
  
  return {
    type: ADD_TODO,
    description,
    id: id
  }
}

export function toggleTodo(id) {  
  return {
    type: TOGGLE_TODO,
    id: id
  }
}