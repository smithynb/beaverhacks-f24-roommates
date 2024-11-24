import React from 'react';
import './Calendar.css'


const TimeViewSelector = ({ onViewChange, currentView, currentMonth }) => {
  return (
    <div className="time-view-container">
      <div className="selector-content">
        <div className="month-header">
          {currentMonth}
        </div>
        <div className="button-group">
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
      </div>
    </div>
  );
};

export default TimeViewSelector;