
import * as actionsTypes from '../actions/actionsTypes';

const defaultState = {
    data: [],
    cities: {}
};

export default (state = { ...defaultState }, action) => {
    switch (action.type) {
        case actionsTypes.countriesSet:
            return { ...state, data: action.data };
        case actionsTypes.countriesSetCity:
            return {
            	...state, 
            	cities: { ...state.cities, ...action.data }
            };
        default:
            return state;
    }
};