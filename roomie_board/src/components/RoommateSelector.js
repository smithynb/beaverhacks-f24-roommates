import React, { useEffect, useState } from 'react';
import { getRoommates } from '../firebase';

function RoommateSelector({ selectedRoommate, onSelectRoommate, onAddRoommateClick, onRemoveRoommateClick, roommates }) {
  const [localRoommates, setLocalRoommates] = useState([]);

  useEffect(() => {
    setLocalRoommates(roommates);
  }, [roommates]);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value === 'add-roommate') {
      onAddRoommateClick();
    } else if (value === 'remove-roommate') {
      onRemoveRoommateClick();
    } else {
      onSelectRoommate(value);
    }
  };

  return (
    <div className="roommate-container">
      <select name="roommate" id="select-roommate" value={selectedRoommate} onChange={handleSelectChange}>
        {localRoommates.map((roommate) => (
          <option key={roommate.id} value={roommate.id}>{roommate.name}</option>
        ))}
        <option value="add-roommate">Add Roommate</option>
        <option value="remove-roommate">Remove Roommate</option>
      </select>
      <h1 className="font-sans roomieboard-title">RoomieBoard</h1>
    </div>
  );
}

export default RoommateSelector;