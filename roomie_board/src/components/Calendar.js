
import './Calendar.css'
import React, { useRef } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar({ currentView, onMonthChange }) {
  const calendarRef = useRef(null);

  const handlePrevMonth = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
    const currentDate = calendarApi.getDate();
    onMonthChange(currentDate.toLocaleString('default', { month: 'long' }));
  };

  const handleNextMonth = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
    const currentDate = calendarApi.getDate();
    onMonthChange(currentDate.toLocaleString('default', { month: 'long' }));
  };

  return (
    <div className="App">
      <div className="calendar-navigation">
        <button onClick={handlePrevMonth}>&larr;</button>
        <button onClick={handleNextMonth}>&rarr;</button>
      </div>
      <FullCalendar
        ref={calendarRef}
        key={currentView}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={currentView}
        allDaySlot={false}
        headerToolbar={false}
        height="auto"
        slotLabelInterval="04:00:00" 
        slotDuration="04:00:00" 
        dayHeaderFormat={{ day: 'numeric' }} 
        events={[]}
      />
    </div>
  );
}

export default Calendar;