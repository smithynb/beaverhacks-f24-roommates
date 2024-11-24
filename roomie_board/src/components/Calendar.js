

import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


function Calendar() {
  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          center: "dayGridMonth,timeGridWeek,timeGridDay new",
        }}
        eventColor="red"
        nowIndicator
        dateClick={(e) => console.log(e.dateStr)}
        eventClick={(e) => console.log(e.event.id)}
      />
    </div>
  );
}

export default Calendar;