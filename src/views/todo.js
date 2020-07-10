import React from 'react';
import { Provider } from 'react-redux';
import { store } from './todo-components/redux';
import './todo-components/App.css';
// Components dari todo yang mengatur input dan list
import TodoInput from './todo-components/TodoInput';
import TodoList from './todo-components/TodoList';

// berbagai component todo yang di compose disini
const Todo = () => (
  <Provider store={store}>
    <div className="main">
      <TodoInput />
      <TodoList />
    </div>
  </Provider>
);

export default Todo;