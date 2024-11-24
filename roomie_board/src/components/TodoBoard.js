import React from 'react';

function TodoBoard({ toDoAddClickHandler }) {
  return (
    <div className="todo-board-container">
      <div className="todo-title">
        <h2>To-do</h2>
        <button onClick={toDoAddClickHandler}>+</button>
      </div>
      <div className="todo-list">
        <label>
          <input type="checkbox" />Clean the stove
        </label>
      </div>
    </div>
  );
}

export default TodoBoard;