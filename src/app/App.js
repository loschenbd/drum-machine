import React from 'react';
import './App.css';

import soundData from "./components/data/audio"
import DrumPad from "./components/DrumPad"


class App extends React.Component {
render() {
  return (
    <div id="drum-machine" className="App">
      <div id="display"></div>
      {soundData.map( data => (
        <DrumPad
          id={data.id}
          letterKey={data.letterKey}
          path={data.path}
          keyCode={data.keyCode}>
        </DrumPad>
      ))}
    </div>
  );
}}

export default App;
