import './App.css';
import { useState } from 'react';
import RoommateSelector from './components/RoommateSelector';
import TimeViewSelector from './components/TimeViewSelector';
import Calendar from './components/Calendar';
import TaskContainer from './components/TaskContainer';
import TodoBoard from './components/TodoBoard';
import AddTodo from './components/AddTodo';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "roomieboard.firebasestorage.app",
  messagingSenderId: "376622126162",
  appId: "1:376622126162:web:6e906fba25d588776b7b8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [isAddTodoVisible, setIsAddTodoVisible] = useState(false);
  const [currentView, setCurrentView] = useState('timeGridWeek');

  function toDoAddClickHandler(event) {
    console.log("Add task clicked");
    setIsAddTodoVisible(!isAddTodoVisible);
  }

  const handleViewChange = (newView) => {
    setCurrentView(newView);
  };

  return (
    <div className="App font-sans">
      <div className="left-side">
        <RoommateSelector />
        <TimeViewSelector 
          onViewChange={handleViewChange} 
          currentView={currentView} 
        />
        <Calendar currentView={currentView} />
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