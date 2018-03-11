

import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import messages from './messages';
import experience from './experience';

export default combineReducers({
    auth, messages, profile, experience
});