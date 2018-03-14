
import * as actionsTypes from '../actions/actionsTypes';

const defaultState = {
	imagen: 1,
    data: []
};

export default (state = { ...defaultState }, action) => {
    switch (action.type) {
        case actionsTypes.galeriaSet:
            return { ...state, data: action.data };
        case actionsTypes.galeriaSetFotoPerfil:
            return { ...state, imagen: state.imagen + 1 };
        default:
            return state;
    }
};