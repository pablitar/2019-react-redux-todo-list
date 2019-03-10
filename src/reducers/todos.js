import {
  ADD_TODO,
  TOGGLE_TODO
} from '../actions/todos';

function toggleTodo({done, ...rest}) {
  return {
    ...rest,
    done: !done
  }
}

export function todos(todos = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, {
        id: action.id,
        description: action.description,
        done: false
      }]
    case TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.id) {
          return toggleTodo(todo);
        }
        return todo;
      })
    default:
      return todos
  }
}