import React from 'react';
import './App.css';
import DrumPad from "./components/DrumPad"

// mp3s must be served on localhost:8000
//You can do this bu running `python -m SimpleHTTPServer` inside the project directory

const soundData = [{
  keyCode: 81,
  letterKey: 'Q',
  id: 'Heater-1',
  path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  letterKey: 'W',
  id: 'Heater-2',
  path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  letterKey: 'E',
  id: 'Heater-3',
  path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  letterKey: 'A',
  id: 'Heater-4',
  path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  letterKey: 'S',
  id: 'Clap',
  path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  letterKey: 'D',
  id: 'Open-HH',
  path: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  letterKey: 'Z',
  id: "Kick-n'-Hat",
  path: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  letterKey: 'X',
  id: 'Kick',
  path: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  letterKey: 'C',
  id: 'Closed-HH',
  path: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display : 'Press a key'
    }
  }

  handleDisplay = display => this.setState({ display });

  render() {
  return (
    <div id="drum-machine" className="App">
      <div id="display">{this.state.display}</div>
      <div className="drum-pads">
      {soundData.map( data => (
        <DrumPad
          id={data.id}
          letterKey={data.letterKey}
          path={data.path}
          keyCode={data.keyCode}
          handleDisplay={this.handleDisplay}
        />
      ))}
      </div>
    </div>
  );
}}

export default App;
