import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addContact } from '../actions/badw_actions'
const Loading = require('react-loading-animation');

class ContactsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      contacts: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  render() {
    let p = this.props
    let s = this.state
    console.log(p.contacts);
    switch (p.contacts.currentlyContact) {
      case "NOT_LOADED_CONTACT":
        return(
          <div className="row">
              <div className="col-sm-12">
                {p.badw.currentlyLang == "ru"?
                  (<div>
                    <h3>Понравилось? Напиши как с тобой связаться</h3>
                    <h3>Или напиши что ты думаешь об этом</h3>
                  </div>)
                :
                  (<div>
                    <h3>Interesting? Give me your contacts</h3>
                    <h3>Or give your feedback</h3>
                  </div>)
                }

                  <div className="input-group">
                      <input name="contacts" type="text" className="form-control" placeholder="Contacts or Feedback" value = {s.contacts} onChange= {this.handleChange}/>
                      <span className="input-group-btn">
                          <button className="btn btn-danger" type="button" onClick = {() => p.addContact(s.contacts)}><i className="fa fa-check"></i></button>
                      </span>
                  </div>
                  <br />
                  <ul className="list-unstyled list-inline">

                  </ul>
              </div>
          </div>
        )
      case "LOADING_CONTACT":
        return(
          <Loading />
        )
      default:
        return (
          <h3>Thank you! I will find you!</h3>
        )
    }
  }
}

function mapStateToProps(state){
  return {
    contacts: state.contacts,
    badw: state.badw
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addContact: addContact
  },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer)
