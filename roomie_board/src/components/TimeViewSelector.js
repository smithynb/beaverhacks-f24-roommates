import React from 'react';

const TimeViewSelector = ({ onViewChange, currentView }) => {
  return (
    <div className="time-view-container">
      <button 
        onClick={() => onViewChange('timeGridDay')}
        className={currentView === 'timeGridDay' ? 'active' : ''}
      >
        Day
      </button>
      <button 
        onClick={() => onViewChange('timeGridWeek')}
        className={currentView === 'timeGridWeek' ? 'active' : ''}
      >
        Week
      </button>
    </div>
  );
};

export default TimeViewSelector;