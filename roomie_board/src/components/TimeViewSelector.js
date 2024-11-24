import { useState } from 'react';
import './Calendar.css'


const TimeViewSelector = ({ onViewChange, currentView, currentMonth, onMonthChange, calendarRef }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    if (calendarRef.current && calendarRef.current.getApi()) {
      const newDate = new Date(currentDate);
      newDate.setMonth(currentDate.getMonth() - 1);
      setCurrentDate(newDate);
      onMonthChange(newDate.toLocaleString('default', { month: 'long' }));
      calendarRef.current.getApi().prev();
    }
  };

  const handleNextMonth = () => {
    if (calendarRef.current && calendarRef.current.getApi()) {
      const newDate = new Date(currentDate);
      newDate.setMonth(currentDate.getMonth() + 1);
      setCurrentDate(newDate);
      onMonthChange(newDate.toLocaleString('default', { month: 'long' }));
      calendarRef.current.getApi().next();
    }
  };

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