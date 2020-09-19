import React from 'react';

const soundData = [{
  keyCode: 81,
  key: 'Q',
  id: 'Heater-1',
  path: 'src/audio/Heater-1.mp3'
}, {
  keyCode: 87,
  key: 'W',
  id: 'Heater-2',
  path: 'src/audio/Heater-2.mp3'
}, {
  keyCode: 69,
  key: 'E',
  id: 'Heater-3',
  path: 'src/audio/Heater-3.mp3'
}, {
  keyCode: 65,
  key: 'A',
  id: 'Heater-4',
  path: 'src/audio/Heater-4_1.mp3'
}, {
  keyCode: 83,
  key: 'S',
  id: 'Clap',
  path: 'src/audio/Heater-6.mp3'
}, {
  keyCode: 68,
  key: 'D',
  id: 'Open-HH',
  path: 'src/audio/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  key: 'Z',
  id: "Kick-n'-Hat",
  path: 'src/audio/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  key: 'X',
  id: 'Kick',
  path: 'src/audio/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  key: 'C',
  id: 'Closed-HH',
  path: 'src/audio/Cev_H2.mp3'
},yarns tart
];

const playSound = (e) => {
  e.play(soundData.path);

function DrumMachine() {

  };
  return soundData.map(name =>
    <div className="drum-pad" id={name.id} key={name.keyCode}>{name.key}
      <audio src={name.path} autoPlay/>
    </div>)

}

export default DrumMachine