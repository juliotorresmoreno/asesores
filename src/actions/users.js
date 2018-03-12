
import * as actionsTypes from './actionsTypes';
import { api } from '../config';
import { request } from '../util/request';

export const actionsCreators = {
    setUsers: (data) => ({
        type: actionsTypes.usersSet,
        data: data
    }),
    describe: (data) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/users/${data.id}`,
            method: "GET",
            callback: function ({ data }) {
                //dispatchEvent(actionsCreators.setProfile(data));
            },
            token: getState().auth.session.token
        });
    },
    read: () => (dispatchEvent, getState) => {
        return request({
            url: `${api}/users`,
            method: "GET",
            callback: function ({ data }) {
                dispatchEvent(actionsCreators.setUsers(data));
            },
            token: getState().auth.session.token
        });
    }
}