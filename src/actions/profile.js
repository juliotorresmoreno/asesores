
import * as actionsTypes from './actionsTypes';
import { api } from '../config';
import { request } from '../util/request';

export const actionsCreators = {
    setProfile: (data) => ({
        type: actionsTypes.profileSet,
        data: data
    }),
    profile: (username) => (dispatchEvent, getState) => {
        const url = username ? `${api}/profile/${username}` : `${api}/profile`;
        const state = getState();
        const user = username || state.auth.session.usuario;
        if (state.profile.usuario === user)
            return { action: actionsTypes.none };
        return request({
            url: url,
            method: "GET",
            callback: function ({ data }) {
                data.isMe = user === state.auth.session.usuario;
                console.log(data);
                dispatchEvent(actionsCreators.setProfile(data));
            },
            token: state.auth.session.token
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