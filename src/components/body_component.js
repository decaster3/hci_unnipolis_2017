import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setBadw } from '../actions/badw_actions'
import BadwContainer from './badw_container'
import ContactsContainer from './contacts_container'

class BodyComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      words: [],
      view: true
    }
  }
  componentDidMount(){
    this.props.setBadw()
  }

  render() {
    return (
      <section className="ss-style-doublediagonal main-content">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <button className="Rec buttonN">Recording</button>
                    {this.props.badw.currentlyLang == "ru"?
                      <h3 className = "main_ii" >Я запрещаю тебе говорить эти слова:</h3>
                    :
                      <h3 className = "main_ii" >I forbid you to say these words:</h3>
                    }

                    <BadwContainer />
                </div>
            </div>
            <ContactsContainer />
          </div>
    </section>
    );
  }
}
function mapStateToProps(state){
  return{
    badw: state.badw
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      setBadw: setBadw
    }
    ,
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(BodyComponent)
