// import logo from './logo.svg';
import './App.css';
import Modal from './Modal/Modal';

function App() {
  return (
    <div className="App">
     <Modal/>
    </div>
  );
}

export default App;

// // src/App.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // client/src/App.js
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// import './App.css'; // Import the CSS file

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const fetchMessages = async () => {
//     const response = await axios.get('http://localhost:8080/api/messages');
//     setMessages(response.data);
//   };

//   const handleSendMessage = async () => {
//     if (newMessage.trim() !== '') {
//       await axios.post('http://localhost:8080/api/messages', {
//         content: newMessage,
//       });
//       setNewMessage('');

//       // Fetch messages again after sending a new one
//       fetchMessages();
//       console.log(messages)
//     }
//   };

//   return (
//     <div className="container">
//       <div className="message-container">
//         {messages.map((message) => (
//           <div key={message._id} className="message">
//             {message.content} - {new Date(message.timestamp).toLocaleString()}
//           </div>
//         ))}
//       </div>
//       <div className="input-container">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default App;

