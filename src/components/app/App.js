import React, { Component } from 'react';
import './App.css';
import AddTodoForm from '../addTodoForm/AddTodoForm';
import TodoList from '../todos/TodoList';
import VisibilitySelector from '../visibilitySelector/VisibilitySelector';

import {connect} from 'react-redux';
import { addTodo, toggleTodo } from '../../actions/todos';
import VisibilityFilters from '../../constants/visibilityFilters';
import { toggleVisibility } from '../../actions/toggleVisibility';



function getVisibleTodos(state) {
  function isVisible(aTodo) {
    return state.visibilityFilter === VisibilityFilters.ALL ||
      (state.visibilityFilter === VisibilityFilters.DONE && aTodo.done) ||
      (state.visibilityFilter === VisibilityFilters.TODO && !aTodo.done)
  }
  
  return state.todos.filter(isVisible)
}

const AddTodoFormConnected = connect(undefined, dispatch => {return {onTodoAdded: (description) => dispatch(addTodo(description))}})(AddTodoForm)
const TodoListConnected = connect(
  state => { return {todos: getVisibleTodos(state)}},
  dispatch => {return {toggleTodo: (id) => dispatch(toggleTodo(id))}})(TodoList)

const VisiblitySelectorConnected = connect(
  state => { return {selected: state.visibilityFilter}},
  dispatch => {return {onVisibilityChange: (visibility) => dispatch(toggleVisibility(visibility))}})(VisibilitySelector)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>A Todo List</h2>
        </header>
        <section className="mainApp">
          <AddTodoFormConnected />
          <TodoListConnected />
          <VisiblitySelectorConnected />
        </section>
      </div>
    );
  }
}

export default App;
