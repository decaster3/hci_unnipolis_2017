var C = require("../../constants/badw.js");
let initialState = require("./initial_state.js");

module.exports = function(currentstate = initialState.contacts, action){
  switch (action.type) {
    case C.CONTACT:
      return {
        ...currentstate,
        currentlyContact: action.currentlyContact
      }
    default: return currentstate;
  }
}
