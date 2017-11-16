import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import { connect } from 'react-redux'
import { changeView } from '../actions/badw_actions'
import { bindActionCreators } from 'redux'

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

class SpeechComponent extends Component {
  constructor(props){
    super(props)
    this.onPlay = this.onPlay.bind(this);
    this.sound = new Audio('../assets/speech.mp3');
  }

  onPlay(){
   this.sound.play();
  }

  render() {

    let s = this.state
    let p = this.props
    const { recognition, transcript, resetTranscript, browserSupportsSpeechRecognition, stopListening, startListening } = this.props
    if (!browserSupportsSpeechRecognition) {
      return null
    }
    if (recognition.lang != this.props.badw.currentlyLang){
      resetTranscript()
      recognition.lang = this.props.badw.currentlyLang
    }
    for(var i = 0; i < this.props.badw.badw.length; i++){
      var arr = transcript.split(" ").map(function(x){ return x.toLowerCase() })
      if(arr.includes(this.props.badw.badw[i])){
        resetTranscript()
        stopListening()
        this.onPlay()
        this.props.changeView()
        setTimeout(() => {
            this.props.changeView();
            this.props.startListening();
          }, 3000);
      }
    }
    if(transcript.split(" ").length > 5){
      resetTranscript()
    }
    console.log(transcript.split(" "));
    switch (p.badw.currentlyView) {
      case "VIEW":
        return(
          <div>
            <div className = "style1"></div>
              {p.badw.currentlyLang == "ru"?
                (<div>Послушаешься компьютера? </div>)
              :
                (<div>Will you obey the computer??</div>)
              }
          </div>
        )
      default:
        return(
          <div>
            <div className = "style1"></div>
              {p.badw.currentlyLang == "ru"?
                (<div>
                  <h3 className = "main_iii">ХАХАХА ТЫ ПРОИГРАЛ</h3>
                </div>)
              :
                (<div>
                  <h3 className = "main_iii">HAHAHAHA YOU LOSE</h3>
                </div>)
              }

          </div>
        )
    }
  }
}

SpeechComponent.propTypes = propTypes

const options = {
  autoStart: true
}

function mapStateToProps(state){
  return {
    badw: state.badw
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      changeView: changeView
    }
    ,
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeechRecognition(options)(SpeechComponent))
