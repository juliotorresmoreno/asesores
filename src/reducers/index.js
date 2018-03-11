

import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import messages from './messages';
import educacion from './educacion';
import experience from './experience';

export default combineReducers({
    auth, messages, profile, educacion, experience
});