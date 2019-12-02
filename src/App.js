import React from 'react';
import Profile from './components/Profile';
import { profH } from './api';
import './App.css';

function App() {
  return (
    <div className="App">
      <Profile person={profH} />
    </div>
  );
}

export default App;
