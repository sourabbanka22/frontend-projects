import React from 'react';
import './DrumKeyPad.css';

class DrumKeyPad extends React.Component {
 
    componentDidMount() {
      console.log(this.audio)
      document.addEventListener('keydown', this.handleKeydown)
      window.focus()
    }
    
   componentWillUnmount() {
     document.removeEventListener('keydown', this.handleKeydown)
   }
    
    handleKeydown = e => {
      if(e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
      }
    }
   
    handleClick = () => {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
    
    render() {
      return (
        <div className='drum-pad' id={this.props.id} onClick={this.handleClick} >
            
                <div className="text">
                {this.props.letter}
            <audio id={this.props.letter} className='clip' src={this.props.src} ref={ref => this.audio = ref}></audio>
                </div>


        </div>
      )
    }
  }

export default DrumKeyPad;
