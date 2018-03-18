
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
            const { usuario, usuarioReceptor, mensaje, fecha } = action;
            return { 
                ...state, 
                data: [
                    ...state.data,
                    { 
                        usuario, 
                        usuarioReceptor, 
                        mensaje, 
                        fecha 
                    }
                ]
            };
        default:
            return state;
    }
}