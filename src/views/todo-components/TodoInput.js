import React, { useState } from 'react';
import uuid from 'uuid/dist/v4';
import { connect } from 'react-redux';
import { addTodoAction } from './redux';
// component todo yang mengatur input terdapat hooks
const TodoInput = (props) => {
  const [todo, setTodo] = useState('');

  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.addTodoAction({
      id: uuid(),
      name: todo,
      complete: false
    });
    setTodo('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <h1>ToDo App</h1>
        <textarea name="todo"
          placeholder="Add a todo"
          value={todo}
          onChange={onChange}
         >
        </textarea>
        <button className='myButton' type="submit">Add</button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { addTodoAction }
)(TodoInput);
