import "./Chat.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
//we're connecting our frontend with socket.io (where our backend server where it is runing)
// const socket = io.connect('http://localhost:3001')

function App({ socket }) {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    //we allow to join room without username and room
    if (username && room) {
      // EventEmitter, which means you can emit events on one side and register listeners on the other:

      socket.emit("join_room", room);
      setShowChat(true);
      console.log(showChat);
    }
  };
  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          {/* input for name  */}
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          {/* input for room  we want to have chat with peeps in same room  */}
          <input
            type="text"
            placeholder="Room-id"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
