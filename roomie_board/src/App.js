import './App.css';
import { useState } from 'react';
function App() {
  const [isAddTodoVisible, setIsAddTodoVisible] = useState(false);

  function toDoAddClickHandler(event){
    console.log("Add task clicked");
    setIsAddTodoVisible(!isAddTodoVisible);
  }

  return (
    <div className="App font-sans">
        <div className = "roommate-container">
          <select name = "roommate" id = "select-roommate">
            <option value = "roommate1">Louis'</option>
            <option value = "roommate2">Benny's</option>
            <option value = "roommate3">Reina's</option>
          </select>
          <h1 className = "font-sans">RoomieBoard</h1>
        </div>
        

        <div className = "time-view-container">
            <button>Day</button>
            <button>Week</button>
          </div>

          <div className = "calendar-container">

          </div>

          <div className = "task-container">
            <h2>Tasks</h2>
            <button>Add Task</button>
          </div>

          <div className = "todo-board-container">
            <div className = "todo-title">
              <h2>To-do</h2>
              <button onClick={toDoAddClickHandler}>+</button>
            </div>
            <div className = "todo-list">
              <label>
            <input type = "checkbox"/>Clean the stove</label>
            </div>
            
          </div>

          <div className = {isAddTodoVisible ? "" : "hidden"} id = "add-todo-container" >
            <h3>Add a task</h3>
            <div className = "todo-input-element">
              <label htmlFor="todo-text-input">Task</label>
              <input type = "text" id = "todo-input"/>

              <label htmlFor="todo-text-input">Time</label>
              <input type = "text" id = "todo-input"/>

              <label htmlFor="todo-text-input">Roommate</label>
                <select name = "roommate">
                  <option value = "roommate1">Louis'</option>
                  <option value = "roommate2">Benny's</option>
                  <option value = "roommate3">Reina's</option>
                </select>
              
              <button className = "add-button">Add</button>
            </div>
          </div>

    </div>
  );
}

export default App;
