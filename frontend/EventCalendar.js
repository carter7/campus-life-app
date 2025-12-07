import React, { useEffect, useState } from 'react';
function EventCalendar() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);
  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event.title} - {event.date} at {event.location}</li>
        ))}
      </ul>
    </div>
  );
}
export default EventCalendar;