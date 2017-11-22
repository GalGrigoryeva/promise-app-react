import React, { Component } from 'react';
import {TodoItem} from "./TodoItem";

export class TodoList extends Component {

  render() {
    const todoItems = Object.values(this.props.data).map((todoData) => {  // Make from array of objects array of components
      return <TodoItem key={todoData.id}
                       id={todoData.id}
                       isCompleted={todoData.isCompleted}
                       todoText={todoData.todoText}
                       removeTodo={this.props.removeTodo}
                       updateTodo={this.props.updateTodo}/>
    }).sort((a, b) => {
      return a.id - b.id;
    });

    return (
      <ul className="list-group" id="toDoList">
        {
          todoItems
        }
      </ul>
    );
  }
}