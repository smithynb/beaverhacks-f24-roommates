import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { getRoommates } from '../firebase';

function AddTodo ({ isAddTodoVisible, onAddTodo, setIsAddTodoVisible }) {
  const [task, setTask] = useState('');
  const [roommateId, setRoommateId] = useState('');
  const [roommates, setRoommates] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRoommates = async () => {
      const roommates = await getRoommates();
      setRoommates(roommates);
    };
    fetchRoommates();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task || !roommateId) {
      setError('Please fill in all fields');
      return;
    }
    try {
      await onAddTodo(roommateId, { task });
      setTask('');
      setRoommateId('');
      setError('');
      setIsAddTodoVisible(false); // Hide the container
    } catch (error) {
      console.error("Error adding todo: ", error);
      setError('Error adding todo');
    }
  };

  const handleClose = () => {
    setIsAddTodoVisible(false);
    setTask('');
    setRoommateId('');
    setError('');
  };

  return (
    <Draggable>
      <div className={isAddTodoVisible ? "visible" : "hidden"} id="add-todo-container">
        <button className="close-button" onClick={handleClose}>X</button>
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
            <label htmlFor="roommate-select">Assign to</label>
            <select
              id="roommate-select"
              value={roommateId}
              onChange={(e) => setRoommateId(e.target.value)}
            >
              <option value="">Select Roommate</option>
              {roommates.map((roommate) => (
                <option key={roommate.id} value={roommate.id}>{roommate.name}</option>
              ))}
            </select>
            <button type="submit">Add</button>
            {error && <p className="error">{error}</p>}
          </div>
        </form>
      </div>
    </Draggable>
  );
}

export default AddTodo;