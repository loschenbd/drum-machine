import React from 'react';
import './App.css';

import DrumMachine from "./components/DrumMachine"

function App() {
  return (
    <div id="drum-machine" className="App">
      <div id="display"></div>
    <DrumMachine />
    </div>
  );
}

export default App;
