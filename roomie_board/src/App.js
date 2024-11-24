import './App.css';
import { useState } from 'react';
import RoommateSelector from './components/RoommateSelector';
import TimeViewSelector from './components/TimeViewSelector';
import Calendar from './components/Calendar';
import TaskContainer from './components/TaskContainer';
import TodoBoard from './components/TodoBoard';
import AddTodo from './components/AddTodo';

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