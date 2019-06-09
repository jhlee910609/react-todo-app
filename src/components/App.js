import React, { Component } from 'react';
import './App.scss';
import PageTemplate from './PageTemplate/PageTemplate'
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';
import { getDiffieHellman } from 'crypto';

export default class App extends Component {

  state = {
    input: '',
    todos: [
      {
        id: 0,
        text: '리액트를 배우자(1)',
        done: false
      },
      {
        id: 1,
        text: '리액트를 배우자(2)',
        done: true
      }
    ]
  }

  id = 1;
  getId() {
    return ++this.id;
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    console.log('index', index);

    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };

    console.log(todos.slice(0, index));
    console.log(todos.slice(index + 1, todos.length));

    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    })

  };



  handleInsert = (e) => {
    const { todos, input } = this.state;
    const newTodo = {
      id: this.getId(),
      text: input,
      done: false
    }
    this.setState({
      todos: [...todos, newTodo],
      input: ''
    })
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    

    this.setState({
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index + 1, todos.length)
      ]
    });

  }

  render() {
    return (
      <div>
        <PageTemplate>
          <TodoInput onInsert={this.handleInsert} onChange={this.handleChange} value={this.state.input} />
          <TodoList onToggle={this.handleToggle} todos={this.state.todos} onRemove={this.handleRemove} />
        </PageTemplate>
      </div >
    );
  };
}

