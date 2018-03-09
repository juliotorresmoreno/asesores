
import * as actionsTypes from '../actions/actionsTypes';

const defaultState = {
    profile: {}
}

export default (state = { ...defaultState }, action) => {
    switch (action.type) {
        case actionsTypes.profileQuery:
            return { ...state, profile: action.data };
        default:
            return state;
    }
};