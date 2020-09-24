import React from 'react';



class DrumPad extends React.Component {

  handleClick = () => {
    this.audio.play();
    console.log(this.audio.play());
  };
  render() {
    return (
      <div
        onClick={this.handleClick}
        className="drum-pad"
        id={this.props.id}
      >
        <h3>{this.props.letterKey}</h3>
        <audio
          ref={ref => this.audio = ref}
          className="clip"
          id={this.props.letterKey}
          src={this.props.path}>
        </audio>
      </div>
    )
  }
}

export default DrumPad