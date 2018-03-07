
import * as actionsTypes from '../actions/actionsTypes';

const defaultState = {
    session: null
}

export default (state = { ...defaultState }, action) => {
    switch (action.type) {
        case actionsTypes.authLogin:
            return { ...state };
        case actionsTypes.authSetSession:
            return { ...state, session: action.session };
        default:
            return state;
    }
}