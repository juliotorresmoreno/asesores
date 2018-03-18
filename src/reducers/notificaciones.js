
import * as actionsTypes from '../actions/actionsTypes';

const defaultState = {
    data: []
};

export default (state = { ...defaultState }, action) => {
    switch (action.type) {
        case actionsTypes.notificacionesAdd:
            return { ...state, data: [ ...state.data, action.data ] };
        case actionsTypes.notificacionesDel:
        	const data = state.data;
        	data.splice(action.index, 1);
        	return { ...state, data: [ ...state.data ] };
        default:
            return state;
    }
};