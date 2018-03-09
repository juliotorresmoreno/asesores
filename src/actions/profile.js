
import * as actionsTypes from './actionsTypes';
import { api } from '../config';
import { request } from '../util/request';

export const actionsCreators = {
    profile: (data) => (dispatchEvent, getState) => {
        return request(
            `${api}/profile`, "GET", data, function() {
                dispatchEvent(({
                    type: actionsTypes.profileQuery
                }));
            }, getState().auth.session.token
        );
    },
    update: (data) => (dispatchEvent, getState) => {
        return request(
            `${api}/profile`, "PUT", data, function() {
                dispatchEvent(({
                    type: actionsTypes.profileUpdate
                }));
            }, getState().auth.session.token
        );
    }
}