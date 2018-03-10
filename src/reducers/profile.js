
import * as actionsTypes from '../actions/actionsTypes';

const defaultState = {
    legenda: "",
    descripcion: ""
}

export default (state = { ...defaultState }, action) => {
    switch (action.type) {
        case actionsTypes.profileSet:
            return { ...state, ...action.data };
        default:
            return state;
    }
};