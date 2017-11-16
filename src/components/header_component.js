import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeLanguage } from '../actions/badw_actions'

class HederComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      ru: true
    }
    this.changeLangHandle = this.changeLangHandle.bind(this)
  }
  changeLangHandle(name){
    var a = this.state.ru
    if ( name != this.props.badw.currentlyLang){
      this.setState({
        ru: !a
      })
        this.props.changeLanguage(name)
    }
  }

  render() {
    let s = this.state
    var whiteStyle = {
      color: 'white'
    }
    var userLang = (navigator.language) ?
    navigator.language : navigator.userLanguage;

    return (
        <header>
          <section className="color">
              <div className="container">
                  <div className="row">
                      <div className="col-xs-12">
                          <h1><i className="fa fa-ban" style={whiteStyle} /></h1>
                          <h2>nope</h2>

                          <div className = "radio1">
                            <label className="containerr">English
                              <input name = "eng" onClick = { () => this.changeLangHandle("eng")} type="radio" checked ={s.ru? "checked": "" }/>
                              <span className="checkmark"></span>
                            </label>
                            <br />
                            <label className="containerr">Russian
                              <input name = "ru" onClick = { () => this.changeLangHandle("ru")} type="radio" checked ={!s.ru? "checked": "" } />
                              <span className="checkmark"></span>
                            </label>
                          </div>

                      </div>
                  </div>
              </div>

          </section>
        </header>
    );
  }
}

function mapStateToProps(state){
  return {
    badw: state.badw
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    changeLanguage: changeLanguage
  },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HederComponent)
