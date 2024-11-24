import React, { useEffect, useState } from 'react';
import { getRoommates } from '../firebase';

function RoommateSelector({ selectedRoommate, onSelectRoommate, onAddRoommateClick }) {
  const [roommates, setRoommates] = useState([]);

  useEffect(() => {
    const fetchRoommates = async () => {
      const roommates = await getRoommates();
      setRoommates(roommates);
    };
    fetchRoommates();
  }, []);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value === 'add-roommate') {
      onAddRoommateClick();
    } else {
      onSelectRoommate(value);
    }
  };

  return (
    <div className="roommate-container">
      <select name="roommate" id="select-roommate" value={selectedRoommate} onChange={handleSelectChange}>
        {roommates.map((roommate) => (
          <option key={roommate.id} value={roommate.id}>{roommate.name}</option>
        ))}
        <option value="add-roommate">Add Roommate</option>
      </select>
      <h1 className="font-sans roomieboard-title">RoomieBoard</h1>
    </div>
  );
}

export default RoommateSelector;