var C = require("../constants/badw.js")
const firebase = require("firebase")

export function setBadw(){
  return function(dispatch, getState){
    dispatch({type: C.LOAD})
    var wordsFir = []
    var currentRef = {}
    let engWords = firebase.database().ref('eng-words')
    let ruWords = firebase.database().ref('ru-words')
    if(getState().badw.currentlyLang == "ru"){
      currentRef = ruWords
    }
    else{
      console.log(123);
      currentRef = engWords
    }
      currentRef.once('value', function(snap){
      snap.val().forEach(function(e){
        wordsFir.push(e)
      })
    }).then( () => {
      dispatch({type: C.LOADING_COMPLEATE, badw: wordsFir})
    })
  }
}
export function changeBadw(dispatch, getState){
  dispatch({type: C.LOAD})
  var wordsFir = []
  var currentRef = {}
  let engWords = firebase.database().ref('eng-words')
  let ruWords = firebase.database().ref('ru-words')
  if(getState().badw.currentlyLang == "ru"){
    currentRef = ruWords
  }
  else{
    console.log(123);
    currentRef = engWords
  }
    currentRef.once('value', function(snap){
    snap.val().forEach(function(e){
      wordsFir.push(e)
    })
  }).then( () => {
    dispatch({type: C.LOADING_COMPLEATE, badw: wordsFir})
  })
}
export function addContact(contact){
  return function(dispatch){
    dispatch({type: C.CONTACT, currentlyContact: C.LOADING_CONTACT})
    firebase.database().ref('contacts').push(contact).then( () => {
      dispatch({type: C.CONTACT, currentlyContact: C.LOADED_CONTACT})
    })
  }
}

export function changeView(){
  return function(dispatch,getState){
    if(getState().badw.currentlyView == C.VIEW){
      dispatch({type: C.CHANGE_STATE, currentlyView: C.NOT_VIEW})
    }
    else {
      dispatch({type: C.CHANGE_STATE, currentlyView: C.VIEW})
    }
  }
}
export function changeLanguage(){
  return function(dispatch,getState){
    if(getState().badw.currentlyLang == "ru"){
      dispatch({type: C.CHANGE_LANG, currentlyLang: "eng-BG"})
      changeBadw(dispatch, getState)
    }
    else {
      dispatch({type: C.CHANGE_LANG, currentlyLang: "ru"})
      changeBadw(dispatch, getState)
    }
  }
}
