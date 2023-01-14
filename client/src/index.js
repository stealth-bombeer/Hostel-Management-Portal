import React from 'react';
import ReactDOM from 'react-dom/client';
import io from 'socket.io-client'
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutsContext'
import { AuthContextProvider } from './context/AuthContext'
import { AuthContext2Provider } from './context/AuthContext2';
import reportWebVitals from './reportWebVitals';

const socket = io.connect('http://localhost:4000')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <AuthContext2Provider>
      <WorkoutsContextProvider>
      <App socket={socket} />
      </WorkoutsContextProvider>
      </AuthContext2Provider>
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();