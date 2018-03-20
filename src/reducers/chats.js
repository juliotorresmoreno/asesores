
import * as actionsTypes from '../actions/actionsTypes';

const defaultState = {
	usuarios: [],
    videoCall: false,
    data: []
}

export default (state = { ...defaultState }, action) => {
    switch (action.type) {
        case actionsTypes.chatsSet:
            return { ...state, data: action.data, videoCall: action.videoCall };
        case actionsTypes.chatsUsersSet:
            return { ...state, usuarios: action.data };
        case actionsTypes.chatsVideocall:
            return { ...state, videoCall: action.videoCall };
        case actionsTypes.chatsMessagesAdd:
            return { 
                ...state, 
                data: [
                    ...state.data,
                    { 
                        id: action.id,
                        status: action.status,
                        usuario: action.usuario,
                        usuarioReceptor: action.usuarioReceptor,
                        mensaje: action.mensaje,
                        fecha: action.fecha
                    }
                ]
            };
        case actionsTypes.chatsMessagesEdit:
            console.log(action);
            return { 
                ...state, 
                data: state.data.map((value) => {
                    if (value.id !== action.id)
                        return value;
                    return {
                        ...value,
                        status: action.status
                    };
                })
            };
        default:
            return state;
    }
}