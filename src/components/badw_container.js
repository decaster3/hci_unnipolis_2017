import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpeachComponent from './speech_component'
import { changeView } from '../actions/badw_actions'
import { bindActionCreators } from 'redux'

const Loading = require('react-loading-animation');

 class BadwContainer extends Component {

  render() {
    let p = this.props
    var redStyle = {
      color: 'red'
    }
    switch (p.badw.currently) {
      case "LOADING":
        return(
        <div>
           <Loading />
        </div>)
      case "LOADED":
        var wordsView = p.badw.badw.map((word, index) => {
          return(
                  <h3 key = {index} className = "main_ii" ><i className="fa fa-ban" style={redStyle}/>  {word}  <i className="fa fa-ban" style={redStyle}/></h3>
          )
        })
        return(
          <div>
            {wordsView}
            <SpeachComponent />
          </div>
        )
      default:
        return (
          <div>
            Connection Error
          </div>
        )
    }
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(BadwContainer)
