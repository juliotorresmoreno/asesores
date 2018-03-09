
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
            if (action.session === null)
                window.document.querySelector("body").className = "body";
            else
                window.document.querySelector("body").className = "";
            return { ...state, session: action.session, complete: true };
        default:
            return state;
    }
}