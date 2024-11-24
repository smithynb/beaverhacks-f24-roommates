

import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar({ currentView }) {
  return (
    <div className="App">
      <FullCalendar
        key={currentView} 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={currentView}
        headerToolbar={false}
        height="auto"
        events={[
          {
            title: 'Sample Event',
            start: new Date(),
          }
        ]}
      />
    </div>
  );
}

export default Calendar;