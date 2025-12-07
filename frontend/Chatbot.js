import React, { useState } from 'react';
function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { user: 'You', text: input }, { user: 'Bot', text: 'I will help you find info soon!' }]);
      setInput('');
    }
  };
  return (
    <div>
      <h2>Campus Chatbot</h2>
      <div>
        {messages.map((msg, i) => (
          <p key={i}><b>{msg.user}:</b> {msg.text}</p>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
export default Chatbot;