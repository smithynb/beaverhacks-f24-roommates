import './App.css';
import { useState, useEffect } from 'react';
import RoommateSelector from './components/RoommateSelector';
import TimeViewSelector from './components/TimeViewSelector';
import Calendar from './components/Calendar';
import TaskContainer from './components/TaskContainer';
import TodoBoard from './components/TodoBoard';
import AddTodo from './components/AddTodo';
import {db} from './firebase';

//firebase functions
import { addTodo, getTodos, deleteTodo } from './firebase';

function App() {
  const [isAddTodoVisible, setIsAddTodoVisible] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
    fetchTodos();
  }, [])

  function toDoAddClickHandler(event) {
    setIsAddTodoVisible(!isAddTodoVisible);
  }

  const handleAddTodo = async (todo) => {
    await addTodo(todo);
    const todos = await getTodos();
    setTodos(todos);
    setIsAddTodoVisible(false);
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    const todos = await getTodos();
    setTodos(todos);
  };

  return (
    <div className="App font-sans">
      <div className="left-side">
        <RoommateSelector />
        <TimeViewSelector />
        <Calendar />
      </div>
      <div className="right-side">
        <TaskContainer />
        <TodoBoard toDoAddClickHandler={toDoAddClickHandler} todos={todos} onDeleteTodo={handleDeleteTodo} />
        <AddTodo isAddTodoVisible={isAddTodoVisible} onAddTodo={handleAddTodo} />
      </div>
    </div>
  );
}

export default App;