
import * as actionsTypes from '../actions/actionsTypes';

const defaultState = {
    data: []
};

export default (state = { ...defaultState }, action) => {
    switch (action.type) {
        case actionsTypes.skillsSet:
            return { ...state, data: action.data };
        default:
            return state;
    }
};