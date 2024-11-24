import './App.css';

function App() {
  return (
    <div className="App">

      <body className = "App-body font-sans">
        <div className = "roommate-container">
          <select name = "roommate" id = "select-roommate">
            <option value = "roommate1">Louis'</option>
            <option value = "roommate2">Benny's</option>
            <option value = "roommate3">Reina's</option>
          </select>
          <h1 className = "font-sans">RoomieBoard</h1>
        </div>
        

        <div className = "time-view-container">
            <h2 className = "flex">Time View</h2>
            <button className = "flex">Day</button>
            <button className = "flex">Week</button>
          </div>

          <div className = "calendar-container">

          </div>

          <div className = "task-container">
            <h2>Tasks</h2>
            <button>Add Task</button>
          </div>

          <div className = "todo-board-container">
            <h2>To-do</h2>
            <label>
            <input type = "checkbox"/>Clean the stove</label>
          </div>


        </body>

    </div>
  );
}

export default App;
