

import { combineReducers } from 'redux';
import auth from './auth';
import messages from './messages';
import profile from './profile';


export default combineReducers({
    auth, messages, profile
});