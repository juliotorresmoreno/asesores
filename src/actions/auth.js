
import * as actionsTypes from './actionsTypes';
import { api } from '../config';
import { request } from '../util/request';

export const actionsCreators = {
    password: (data) => (dispatchEvent, getState) => {
        return request(
            `${api}/auth/password_change`, "POST", data, function(data) {
                if(!data.success) return;
                dispatchEvent(({
                    type: actionsTypes.authPassword
                }));
            }, getState().auth.session.token
        );
    },
    recovery: (data) => (dispatchEvent) => {
        return request(
            `${api}/auth/recovery`, "POST", data, function(data) {
                if(!data.success) return;
                dispatchEvent(({
                    type: actionsTypes.authRecovery
                }));
            }
        );
    },
    session: () => (dispatchEvent) => {
        const token = window.localStorage.getItem("token");
        return request(
            `${api}/auth/session?token=${token}`, "GET", function(data) {
                if(!data.success) {
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
            }
        );
    },
    login: (data) => (dispatchEvent) => {
        return request(
            `${api}/auth/login`, "POST", data, function(data) {
                if(!data.success) return;
                dispatchEvent(({
                    type: actionsTypes.authLogin
                }));
                dispatchEvent(({
                    type: actionsTypes.authSetSession,
                    session: data.session
                }));
                window.localStorage.setItem("token", data.session.token);
            }
        );
    },
    register: (data) => (dispatchEvent) => {
        return request(
            `${api}/auth/registrar`, "POST", data, function(data) {
                if(!data.success) return;
                dispatchEvent(({
                    type: actionsTypes.authLogin
                }));
                dispatchEvent(({
                    type: actionsTypes.authSetSession,
                    session: data.session
                }));
            }
        );
    }
}