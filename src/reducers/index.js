import { combineReducers } from 'redux';
import BadwReducer from './badw_reducer/badw_reducer'
import ContactsReducer from './contacts/contacts_reducer'
const rootReducer = combineReducers({
  badw: BadwReducer,
  contacts: ContactsReducer
});

export default rootReducer;
