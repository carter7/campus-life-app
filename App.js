import React from 'react';
import EventCalendar from './components/EventCalendar';
import Chatbot from './components/Chatbot';
function App() {
  return (
    <div className="App">
      <h1>Campus Life App</h1>
      <EventCalendar />
      <Chatbot />
    </div>
  );
}
export default App;