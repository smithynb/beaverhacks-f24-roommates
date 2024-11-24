import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { getRoommates, deleteRoommate } from '../firebase';

function RemoveRoommate({ isRemoveRoommateVisible, setIsRemoveRoommateVisible, onRoommateRemoved, roommates }) {
  const [selectedRoommate, setSelectedRoommate] = useState('');
  const [localRoommates, setLocalRoommates] = useState([]);
  const [error, setError] = useState('');
  const [confirmRemove, setConfirmRemove] = useState(false);

  useEffect(() => {
    setLocalRoommates(roommates);
  }, [roommates]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedRoommate) {
      setError('Please select a roommate');
      return;
    }
    if (!confirmRemove) {
      setError('Please double-click the remove button to confirm');
      return;
    }
    try {
      await deleteRoommate(selectedRoommate);
      setSelectedRoommate('');
      setError('');
      setConfirmRemove(false);
      setIsRemoveRoommateVisible(false);
      onRoommateRemoved();
    } catch (error) {
      console.error("Error removing roommate: ", error);
      setError('Error removing roommate');
    }
  };

  const handleClose = () => {
    setIsRemoveRoommateVisible(false);
    setSelectedRoommate('');
    setError('');
    setConfirmRemove(false);
  };

  return (
    <Draggable>
      <div className={isRemoveRoommateVisible ? "visible" : "hidden"} id="remove-roommate-container">
        <button className="close-button" onClick={handleClose}>X</button>
        <h3>Remove a Roommate</h3>
        <form onSubmit={handleSubmit}>
          <div className="roommate-input-element">
            <label htmlFor="roommate-select">Select Roommate</label>
            <select
              id="roommate-select"
              value={selectedRoommate}
              onChange={(e) => setSelectedRoommate(e.target.value)}
            >
              <option value="">Select Roommate</option>
              {localRoommates.map((roommate) => (
                <option key={roommate.id} value={roommate.id}>{roommate.name}</option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => setConfirmRemove(true)}
              onDoubleClick={handleSubmit}
            >
              Remove
            </button>
            {error && <p className="error">{error}</p>}
          </div>
        </form>
      </div>
    </Draggable>
  );
}

export default RemoveRoommate;