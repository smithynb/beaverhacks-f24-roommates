import './App.css';
import { useState, useRef, useEffect } from 'react';
import RoommateSelector from './components/RoommateSelector';
import TimeViewSelector from './components/TimeViewSelector';
import Calendar from './components/Calendar';
import TaskContainer from './components/TaskContainer';
import TodoBoard from './components/TodoBoard';
import AddTodo from './components/AddTodo';
import AddRoommate from './components/AddRoommate';
import { addTodo, getTodos, deleteTodo, getRoommates } from './firebase';

function App() {
  const [isAddTodoVisible, setIsAddTodoVisible] = useState(false);
  const [isAddRoommateVisible, setIsAddRoommateVisible] = useState(false);
  const [currentView, setCurrentView] = useState('timeGridWeek');
  const [currentMonth, setCurrentMonth] = useState(new Date().toLocaleString('default', { month: 'long' }));
  const calendarRef = useRef(null);
  const [todos, setTodos] = useState([]);
  const [selectedRoommate, setSelectedRoommate] = useState('');
  const [roommates, setRoommates] = useState([]);

  useEffect(() => {
    const fetchRoommates = async () => {
      try {
        const roommates = await getRoommates();
        setRoommates(roommates);
        if (roommates.length > 0) {
          setSelectedRoommate(roommates[0].id);
        }
      } catch (error) {
        console.error("Error fetching roommates: ", error);
      }
    };
    fetchRoommates();
  }, []);

  useEffect(() => {
    if (selectedRoommate) {
      const fetchTodos = async () => {
        try {
          const todos = await getTodos(selectedRoommate);
          setTodos(todos);
        } catch (error) {
          console.error("Error fetching todos: ", error);
        }
      };
      fetchTodos();
    }
  }, [selectedRoommate]);

  const toDoAddClickHandler = () => {
    setIsAddTodoVisible(!isAddTodoVisible);
  };

  const handleAddTodo = async (roommateId, todo) => {
    try {
      await addTodo(roommateId, todo);
      if (roommateId === selectedRoommate) {
        const todos = await getTodos(roommateId);
        setTodos(todos);
      }
      setIsAddTodoVisible(false);
    } catch (error) {
      console.error("Error adding todo: ", error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(selectedRoommate, id);
      const todos = await getTodos(selectedRoommate);
      setTodos(todos);
    } catch (error) {
      console.error("Error deleting todo: ", error);
    }
  };

  const handleAddRoommateClick = () => {
    setIsAddRoommateVisible(true);
  };

  const handleRoommateAdded = async () => {
    const roommates = await getRoommates();
    setRoommates(roommates);
  };

  const handleViewChange = (newView) => {
    setCurrentView(newView);
  };

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth);
  };

  return (
    <div className="App font-sans">
      <div className="left-side">
        <RoommateSelector 
        selectedRoommate={selectedRoommate} 
        onSelectRoommate={setSelectedRoommate} 
        onAddRoommateClick={handleAddRoommateClick}/>
        <TimeViewSelector 
          onViewChange={handleViewChange} 
          currentView={currentView}
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          calendarRef={calendarRef}
        />
        <Calendar 
          currentView={currentView} 
          onMonthChange={handleMonthChange}
          calendarRef={calendarRef}
        />
        <RoommateSelector 
        selectedRoommate={selectedRoommate} 
        onSelectRoommate={setSelectedRoommate} />
        <TimeViewSelector />
        <Calendar />
      </div>
      <div className="right-side">
        <TaskContainer />
        <TodoBoard toDoAddClickHandler={toDoAddClickHandler} todos={todos} onDeleteTodo={handleDeleteTodo} />
        <AddTodo isAddTodoVisible={isAddTodoVisible} onAddTodo={handleAddTodo} setIsAddTodoVisible={setIsAddTodoVisible} />
        <AddRoommate
          isAddRoommateVisible={isAddRoommateVisible}
          setIsAddRoommateVisible={setIsAddRoommateVisible}
          onRoommateAdded={handleRoommateAdded}
        />
      </div>
    </div>
  );
}

export default App;