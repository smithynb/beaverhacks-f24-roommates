import React from 'react';

function RoommateSelector() {
  return (
    <div className="roommate-container">
      <select name="roommate" id="select-roommate">
        <option value="roommate1">Louis'</option>
        <option value="roommate2">Benny's</option>
        <option value="roommate3">Reina's</option>
      </select>
      <h1 className="font-sans roomieboard-title">RoomieBoard</h1>
    </div>
  );
}

export default RoommateSelector;