import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, toggleTodo }) {
  return <div className="todo-list">
    {todos.map(aTodo => <Todo key={aTodo.id} todo={aTodo} onClick={() => toggleTodo(aTodo.id)} />)}
  </div>
}