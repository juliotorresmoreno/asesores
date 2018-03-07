
import * as actionsTypes from './actionsTypes';
import { api } from '../config';
import { request } from '../util/request';

export const actionsCreators = {
    session: () => (dispatchEvent) => {
        return request(
            `${api}/auth/session?token=MTUyMDQ2Mjc5NAgRmy1IPKG0EVhTSEq5HQa68xR77SUF1nmB9vwVk6DAY3DRx4JXw19efP8IiaBUkbl8g2NQib2dRtciGK3XcDgJ`, "GET", function(data) {
                console.log(data);
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
                dispatchEvent(({
                    type: actionsTypes.authLogin
                }));
                dispatchEvent(({
                    type: actionsTypes.authSetSession,
                    session: data.session
                }));
            }
        );
    },
    register: (data) => (dispatchEvent) => {
        return request(
            `${api}/auth/registrar`, "POST", data, function(data) {
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