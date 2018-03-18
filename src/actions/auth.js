
import * as actionsTypes from './actionsTypes';
import { api } from '../config';
import { request } from '../util/request';

export const actionsCreators = {
    password: (data) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/auth/password_change`,
            method: "POST",
            data: data,
            callback: function (data) {
                if (!data.success) return;
                dispatchEvent(({
                    type: actionsTypes.authPassword
                }));
            },
            token: getState().auth.session.token
        });
    },
    recovery: (data) => (dispatchEvent) => {
        return request({
            url: `${api}/auth/recovery`,
            method: "POST",
            data: data,
            callback: function (data) {
                if (!data.success) return;
                dispatchEvent(({
                    type: actionsTypes.authRecovery
                }));
            }
        });
    },
    session: () => (dispatchEvent) => {
        const token = window.localStorage.getItem("token");
        return request({
            url: `${api}/auth/session`,
            method: "GET",
            callback: function (data) {
                if (!data.success) {
                    dispatchEvent(({
                        type: actionsTypes.authSetSession,
                        session: null
                    }));
                    return;
                }
                dispatchEvent(({
                    type: actionsTypes.authSetSession,
                    session: data.session
                }));
            },
            failure: function() {
                dispatchEvent(({
                    type: actionsTypes.authSetSession,
                    session: null
                }));
            },
            token: token
        });
    },
    login: (data) => (dispatchEvent) => {
        return request({
            url: `${api}/auth/login`,
            method: "POST",
            data: data,
            callback: function (data) {
                if (!data.success) return;
                dispatchEvent(({
                    type: actionsTypes.authLogin
                }));
                dispatchEvent(({
                    type: actionsTypes.authSetSession,
                    session: data.session
                }));
                window.localStorage.setItem("token", data.session.token);
            }
        });
    },
    register: (data) => (dispatchEvent) => {
        return request({
            url: `${api}/auth/registrar`,
            method: "POST",
            data: data,
            callback: function (data) {
                if (!data.success) return;
                dispatchEvent(({
                    type: actionsTypes.authLogin
                }));
                dispatchEvent(({
                    type: actionsTypes.authSetSession,
                    session: data.session
                }));
            }
        });
    }
}