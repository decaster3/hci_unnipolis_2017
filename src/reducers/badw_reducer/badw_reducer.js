var C = require("../../constants/badw.js");
let initialState = require("./initial_state.js");

module.exports = function(currentstate = initialState.badw, action){
  switch (action.type) {
    case C.CHANGE_LANG:
      return {
        ...currentstate,
        currentlyLang: action.currentlyLang
      }
    case C.LOAD:
      return {
        ...currentstate,
        currently: C.LOADING
      }
    case C.LOADING_COMPLEATE:
      return {
        ...currentstate,
        currently: C.LOADED,
        badw: action.badw
      }
    case C.CHANGE_STATE:
      return {
        ...currentstate,
        currentlyView: action.currentlyView
      }
    default: return currentstate;
  }
}
