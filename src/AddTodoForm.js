import React, { Component } from 'react';

export class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {todoText: ''};
  }

  render() {
    return (
      <form id="addToDoForm" onSubmit={this.onSubmit}>
        <div className="form-group">
          <div className="col-lg-12">
            <div className="input-group">
              <input type="text"
                     className="form-control"
                     placeholder="Add you promise"
                     aria-label="Search for..."
                     onChange={this.inputOnChange}
                     value={this.state.todoText}/>
              <span className="input-group-btn">
                <button className="btn btn-secondary add" type="submit">Add</button>
              </span>
            </div>
            <small className="form-text text-muted">Your promise will be added to the list below</small>
          </div>
        </div>
      </form>
    );
  }

  onSubmit = (event) => {
    event.preventDefault();
    const todoText = this.state.todoText;
    if (todoText.length > 1) {
      this.props.addTodo(todoText);
      this.setState({todoText: ""});
    }
  };

  inputOnChange = (event) => {
    this.setState({todoText: event.target.value});
  }
}

// Or this way:

/*
export class AddTodoForm extends Component {

  textInput;

  render() {
    return (
      <form id="addToDoForm" onSubmit={this.onSubmit}>
        <div className="form-group">
          <div className="col-lg-12">
            <div className="input-group">
              <input type="text"
                     className="form-control"
                     placeholder="Add you promise"
                     aria-label="Search for..."
                     ref={(input) => {this.textInput = input;}}/> // DOM element ref
              <span className="input-group-btn">
                <button className="btn btn-secondary add" type="submit">Add</button>
              </span>
            </div>
            <small className="form-text text-muted">Your promise will be added to the list below</small>
          </div>
        </div>
      </form>
    );
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.textInput.value.length > 2) {
      this.props.addTodo(this.textInput.value);
      this.textInput.value = "";
    }
  }
}
*/



