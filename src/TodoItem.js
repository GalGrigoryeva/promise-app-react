import React, { Component } from 'react';

export class TodoItem extends Component {
  render() {
    return (
      <li className="col-lg-12">
        <div className="input-group">
          <span className="input-group-addon">
            <input type="checkbox"
                   checked={this.props.isCompleted}
                   onChange={this.completedCheckboxChangeHandler}/>
          </span>
          <input className="form-control"
                 id="toDoText"
                 type="text"
                 value={this.props.todoText}
                 onChange={this.inputTextChangeHandler}/>
          <span className="input-group-btn">
            <button className="btn btn-secondary delete"
                    type="button"
                    onClick={this.removeItem}></button>
          </span>
        </div>
      </li>
    );
  }

  removeItem = () => {
    this.props.removeTodo(this.props.id);
  };

  completedCheckboxChangeHandler = (event) => {
    this.props.updateTodo(this.props.id, {isCompleted: event.target.checked})
  };

  inputTextChangeHandler = (event) => {
    this.props.updateTodo(this.props.id, {todoText: event.target.value})
  }
}