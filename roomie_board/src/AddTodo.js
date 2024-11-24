import React from 'react';
import Draggable from 'react-draggable';

function AddTodo({ isAddTodoVisible }) {
  return (
    <Draggable>
      <div className={isAddTodoVisible ? "" : "hidden"} id="add-todo-container">
        <h3>Add a task</h3>
        <div className="todo-input-element">
          <label htmlFor="todo-text-input">Task</label>
          <input type="text" id="todo-input" />

          <label htmlFor="todo-text-input">Time</label>
          <input type="text" id="todo-input" />

          <label htmlFor="todo-text-input">Roommate</label>
          <select name="roommate">
            <option value="roommate1">Louis'</option>
            <option value="roommate2">Benny's</option>
            <option value="roommate3">Reina's</option>
          </select>

          <button className="add-button">Add</button>
        </div>
      </div>
    </Draggable>
  );
}

export default AddTodo;