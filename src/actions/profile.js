
import * as actionsTypes from './actionsTypes';
import { api } from '../config';
import { request } from '../util/request';

export const actionsCreators = {
    setProfile: (data) => ({
        type: actionsTypes.profileSet,
        data: data
    }),
    profile: (data) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/profile`,
            method: "GET",
            data: data,
            callback: function ({ data }) {
                dispatchEvent(actionsCreators.setProfile(data));
            },
            token: getState().auth.session.token
        });
    },
    update: (data) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/profile`,
            method: "PUT",
            data: data,
            callback: function () {
                dispatchEvent(({
                    type: actionsTypes.profileUpdate
                }));
            },
            token: getState().auth.session.token
        });
    }
}