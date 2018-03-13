
import * as actionsTypes from '../actions/actionsTypes';

const defaultState = {
	usuarios: [],
    data: []
}

export default (state = { ...defaultState }, action) => {
    switch (action.type) {
        case actionsTypes.chatsSet:
            return { ...state, data: action.data };
        case actionsTypes.chatsUsersSet:
        	return { ...state, usuarios: action.data };
        case actionsTypes.chatsMessagesAdd:
            return { 
                ...state, 
                data: [
                    ...state.data,
                    action.data
                ] 
            };
        default:
            return state;
    }
}