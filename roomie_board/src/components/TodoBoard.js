import React from 'react';

function TodoBoard({toDoAddClickHandler, todos, onDeleteTodo }) {
  return (
    <div className="todo-board-container">
      <hr/>
      <div className="todo-title">
        <h2>To-do</h2>
        <button onClick={toDoAddClickHandler}>+</button>
      </div>
      <div className="todo-list">
        {todos.map(todo => (
            <div key={todo.id}>
              <label>
                <input type="checkbox" />{todo.task}
              </label>
              <button onClick={() => onDeleteTodo(todo.id)}>-</button>
            </div>
        ))}
      </div>
    </div>
  );
}

export default TodoBoard;