import {
  ADD_TODO,
  TOGGLE_TODO,
  LOAD_TODOS
} from '../actions/todos';

function toggleTodo({done, ...rest}, requestId) {
  return {
    ...rest,
    done: !done,
    requestId
  }
}

function updateTodo(todos, id, update) {
  return todos.map(todo => {
    if(todo._id === id) {
      return update(todo);
    }
    return todo;
  })
}

export function todos(todos = [], action) {
  switch (action.type) {
    case LOAD_TODOS.ok:
      return action.todos
    case ADD_TODO.loading:
      return [...todos, {
        _id: action.requestId,
        description: action.description,
        done: false,
        requestId: action.requestId
      }]
    case ADD_TODO.ok:
        return [...todos.filter(it => it.requestId !== action.requestId), action.todo]
    case TOGGLE_TODO.loading:
      return updateTodo(todos, action.todo._id, todo => toggleTodo(todo, action.requestId))
    case TOGGLE_TODO.ok:
        return updateTodo(todos, action.todo._id, _ => action.todo)
    default:
      return todos
  }
}