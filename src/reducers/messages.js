
import * as actionsTypes from '../actions/actionsTypes';

const defaultState = {
    alert: "",
    info: ""
};

export default (state = {...defaultState}, action) => {
    switch (action.type) {
        case actionsTypes.messagesAlert:
            return {
                ...state,
                alert: action.message
            };
        case actionsTypes.messagesClose:
            return { ...defaultState };
        default:
            return state;
    };
};