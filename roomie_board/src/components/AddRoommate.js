import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { addRoommate } from '../firebase';

function AddRoommate({ isAddRoommateVisible, setIsAddRoommateVisible, onRoommateAdded }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setError('Please enter a name');
      return;
    }
    try {
      await addRoommate(name);
      setName('');
      setError('');
      setIsAddRoommateVisible(false);
      onRoommateAdded(); // Call the callback function
    } catch (error) {
      console.error("Error adding roommate: ", error);
      setError('Error adding roommate');
    }
  };

  const handleClose = () => {
    setIsAddRoommateVisible(false);
    setName('');
    setError('');
  };

  return (
    <Draggable>
      <div className={isAddRoommateVisible ? "visible" : "hidden"} id="add-roommate-container">
        <button className="close-button" onClick={handleClose}>X</button>
        <h3>Add a Roommate</h3>
        <form onSubmit={handleSubmit}>
          <div className="roommate-input-element">
            <label htmlFor="roommate-name-input">Name</label>
            <input
              type="text"
              id="roommate-name-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Add</button>
            {error && <p className="error">{error}</p>}
          </div>
        </form>
      </div>
    </Draggable>
  );
}

export default AddRoommate;