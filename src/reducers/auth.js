
import * as actionsTypes from '../actions/actionsTypes';

const defaultState = {
    session: null,
    complete: false
}

export default (state = { ...defaultState }, action) => {
    switch (action.type) {
        case actionsTypes.authLogin:
            return { ...state };
        case actionsTypes.authSetSession:
            return { ...state, session: action.session, complete: true };
        default:
            return state;
    }
}