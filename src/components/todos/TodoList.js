import React from 'react';
import Todo from './Todo';
import './TodoList.css'

export default class TodoList extends React.Component {

  componentDidMount() {
    this.props.loadTodos();
  }

  render() {
    return <div className={"todo-list " + this.props.status}>
      {this.props.todos.map(aTodo => <Todo key={aTodo._id} todo={aTodo} onClick={() => this.props.toggleTodo(aTodo)} />)}
    </div>
  }
}