

import { combineReducers } from 'redux';
import auth from './auth';
import chats from './chats';
import users from './users';
import skills from './skills';
import profile from './profile';
import galerias from './galerias';
import messages from './messages';
import educacion from './educacion';
import countries from './countries';
import experience from './experience';

export default combineReducers({
    auth, chats, users, 
    skills, messages, 
    profile, galerias, 
    educacion, experience, 
    countries
});