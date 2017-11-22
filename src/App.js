import React, { Component } from 'react';
import {AddTodoForm} from './AddTodoForm';
import {TodoList} from "./TodoList";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idCounter: 0,
      todoList: {}
    };

    // this.state = {
    //   idCounter: 3,
    //   todoList: {
    //     0: {
    //       id: 0,
    //       isCompleted: false,
    //       todoText: "bla bla"
    //     },
    //     1: {
    //       id: 1,
    //       isCompleted: false,
    //       todoText: "bla bla bla"
    //     },
    //     2: {
    //       id: 2,
    //       isCompleted: true,
    //       todoText: "bla bla bla bla"
    //     }
    //   }
    // };
  }

  render() {
    return (
      <div className="starter-template">
        <h1 className="text-success display-4">Promise App</h1>
        <AddTodoForm addTodo={this.addTodo}/>

        <h2>Promise list</h2>
        <TodoList data={this.state.todoList}
                  removeTodo={this.removeTodo}
                  updateTodo={this.updateTodo}/>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const state = this.state;
    const stateString = JSON.stringify(state);
    localStorage.setItem('state', stateString);
  }

  componentDidMount() {
    if (localStorage.getItem('state')) {
      const stateString = localStorage.getItem('state');
      const state = JSON.parse(stateString);
      this.setState(state);
    }
  }

  addTodo = (todoText) => {
    this.setState((prevState) => {
      const newTodo = {
        id: prevState.idCounter,
        isCompleted: false,
        todoText // the same as todoText: todoText
      };

      return {
        ...prevState, // Spread operator
        idCounter: prevState.idCounter + 1,
        todoList: {
          ...prevState.todoList,
          [newTodo.id]: newTodo
        }
      }
    });
  };

  removeTodo = (id) => {
    this.setState((prevState) => {
      let newTodoList = {
        ...prevState.todoList
      };
      delete newTodoList[id];

      return {
        ...prevState,
        todoList: newTodoList
      }
    });
  };

  updateTodo = (id, updateData) => {
    this.setState((prevState) => {
      const updatedTodo = {
        ...prevState.todoList[id],
        ...updateData
      };

      return {
        ...prevState,
        todoList: {
          ...prevState.todoList,
          [id]: updatedTodo
        }
      }
    });
  }
}