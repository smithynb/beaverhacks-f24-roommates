
import './Calendar.css'
import React, { useRef } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar({ currentView, onMonthChange, calendarRef }) {


  return (
    <div className="App">
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

