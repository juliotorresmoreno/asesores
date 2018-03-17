
import * as actionsTypes from './actionsTypes';
import { api } from '../config';
import { request } from '../util/request';

export const actionsCreators = {
    read: () => (dispatchEvent, getState) => {
        return request({
            url: `${api}/geo`,
            method: "GET",
            callback: function ({success, data}) {
                if (!success) return;
                dispatchEvent(({
                    type: actionsTypes.countriesSet,
                    data: data.sort((v1, v2) => v1 > v2 ? 1: -1)
                }));
            },
            token: getState().auth.session.token
        });
    },
    city: (city) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/geo/${city}`,
            method: "GET",
            callback: function ({success, data}) {
                if (!success) return;
                dispatchEvent(({
                    type: actionsTypes.countriesSetCity,
                    data: {
                        city: data
                    }
                }));
            },
            token: getState().auth.session.token
        });
    }
}