
import * as actionsTypes from '../actions/actionsTypes';

const defaultState = {
    alert: "",
    info: "",
    confirm: "",
    callback: () => { }
};

export default (state = { ...defaultState }, action) => {
    switch (action.type) {
        case actionsTypes.messagesConfirm:
            console.log({
                ...state,
                confirm: action.message,
                callback: action.callback
            });
            return {
                ...state,
                confirm: action.message,
                callback: action.callback
            };
        case actionsTypes.messagesAlert:
            return {
                ...state,
                alert: action.message
            };
        case actionsTypes.messagesInfo:
            return {
                ...state,
                info: action.message
            };
        case actionsTypes.messagesClose:
            return { ...defaultState };
        default:
            return state;
    }
};