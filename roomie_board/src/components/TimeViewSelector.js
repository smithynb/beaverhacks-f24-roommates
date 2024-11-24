import { useState } from 'react';
import './Calendar.css'


const TimeViewSelector = ({ onViewChange, currentView, currentMonth, onMonthChange, calendarRef }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
    const newDate = calendarApi.getDate();
    setCurrentDate(newDate);
    onMonthChange(newDate.toLocaleString('default', { month: 'long' }));
  };

  const handleNextMonth = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
    
    const newDate = calendarApi.getDate();
    setCurrentDate(newDate);
    onMonthChange(newDate.toLocaleString('default', { month: 'long' }));
  };

  return (
    <div className="time-view-container">
      <div className="selector-content">
        <div className="month-header">
          {currentMonth}
          <div className="navigation-buttons">
          <button onClick={handlePrevMonth}>&larr;</button>
          <button onClick={handleNextMonth}>&rarr;</button>
        </div>
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