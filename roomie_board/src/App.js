import './App.css';
import { useState } from 'react';
import RoommateSelector from './RoommateSelector';
import TimeViewSelector from './TimeViewSelector';
import Calendar from './Calendar';
import TaskContainer from './TaskContainer';
import TodoBoard from './TodoBoard';
import AddTodo from './AddTodo';

function App() {
  const [isAddTodoVisible, setIsAddTodoVisible] = useState(false);

  function toDoAddClickHandler(event) {
    console.log("Add task clicked");
    setIsAddTodoVisible(!isAddTodoVisible);
  }

  return (
    <div className="App font-sans">
      <div className="left-side">
        <RoommateSelector />
        <TimeViewSelector />
        <Calendar />
      </div>
      <div className="right-side">
        <TaskContainer />
        <TodoBoard toDoAddClickHandler={toDoAddClickHandler} />
        <AddTodo isAddTodoVisible={isAddTodoVisible} />
      </div>
    </div>
  );
}

export default App;