import React, { useEffect, useState } from 'react';
import { getRoommates } from '../firebase';

function RoommateSelector({ selectedRoommate, onSelectRoommate }) {
  const [roommates, setRoommates] = useState([]);

  useEffect(() => {
    const fetchRoommates = async () => {
      const roommates = await getRoommates();
      setRoommates(roommates);
    };
    fetchRoommates();
  }, []);

  return (
    <div className="roommate-container">
      <select name="roommate" id="select-roommate" value={selectedRoommate} onChange={(e) => onSelectRoommate(e.target.value)}>
        {roommates.map((roommate) => (
          <option key={roommate.id} value={roommate.id}>{roommate.name}</option>
        ))}
      </select>
      <h1 className="font-sans roomieboard-title">RoomieBoard</h1>
    </div>
  );
}

export default RoommateSelector;