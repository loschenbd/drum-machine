import React from 'react';


class DrumPad extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

    handleKeyDown = e => {
    if (e.keyCode === this.props.keyCode) {
      this.audio.current.play();
      this.props.handleDisplay(this.props.id)
    }
    }

  handleClick = () => {
    this.audio.current.play();
    console.log(this.audio.current);
    this.props.handleDisplay(this.props.id)
  };
  render() {
    return (
      <button
        onClick={this.handleClick}
        className="drum-pad"
        id={this.props.id}
        keyCode={this.props.keyCode}
      >
        <h3>{this.props.letterKey}</h3>
        <audio
          ref={this.audio}
          className="clip"
          id={this.props.letterKey}
          src={this.props.path}>
        </audio>
      </button>
    )
  }
}

export default DrumPad