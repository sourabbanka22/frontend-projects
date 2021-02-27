import React from 'react';
import './DrumMachine.css';
import DrumkeyPad from "./DrumKeyPad.js";

const library = [
  { id: 'Heater 1', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { id: 'Heater 2', letter: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { id: 'Disc Oh', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { id: 'Kick and Hat', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { id: 'Chord 1', letter: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },
  { id: 'Chord 2', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },
  { id: 'Punchy Kick', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
  { id: 'Side Stick', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
  { id: 'Give us a Light', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'  },
]


class DrumMachine extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: 'Play the Drums!'
    }
  }
  
  handleDisplay = (display) => {
    this.setState({ display })
  };
  
  render(){
    return(
    <div id='drum-machine'>
        <div id='display'>
          <h3>{this.state.display}</h3>
        </div>
        <div id='drum-pads'>
          {
            library.map(vocal => (
            <DrumkeyPad
              key={vocal.id}
              id={vocal.id}
              letter={vocal.letter}
              src={vocal.src}
              handleDisplay={this.handleDisplay}
            />   
         ))}</div>
    </div>
    )
  }
}

export default DrumMachine;
