import React from 'react';
import Draggable from 'react-draggable';

function AddTodo({isAddTodoVisible, onAddTodo}) {
  const [task, setTask] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo({task})
    setTask("")
  };

  return (
    <Draggable>
      <div className={isAddTodoVisible ? "" : "hidden"} id="add-todo-container">
        <h3>Add a task</h3>
        <form onSubmit={handleSubmit}>
          <div className="todo-input-element">
            <label htmlFor="todo-text-input">Task</label>
            <input
              type="text"
              id="todo-input"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </Draggable>
  );
}

export default AddTodo;