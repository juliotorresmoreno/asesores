
import * as actionsTypes from '../actions/actionsTypes';


export default (state = {}, action) => {
    switch(action.type) {
        case actionsTypes.authLogin:
            return {...state};
        default:
            return state;
    }
}