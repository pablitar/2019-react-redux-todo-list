import React from 'react';

export default class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoDescription: ''
    };
  }

  onInputChange(event) {
    this.setState({...this.state, todoDescription: event.target.value})
  }

  addTodo() {
    this.props.onTodoAdded(this.state.todoDescription)
  }

  render() {
    return <div className="add-todo-form">
      <input type="text" onChange={this.onInputChange.bind(this)}></input>
      <button className="add-todo" onClick={this.addTodo.bind(this)} disabled={!this.state.todoDescription}>Add</button>
    </div>
  }
}