
import * as actionsTypes from './actionsTypes';
import { api } from '../config';
import { request } from '../util/request';

export const actionsCreators = {
    setEducacion: (data) => ({
        type: actionsTypes.educacionSet,
        data: data
    }),
    describe: (data) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/educacion/${data.id}`,
            method: "GET",
            callback: function ({ data }) {
                //dispatchEvent(actionsCreators.setProfile(data));
            },
            token: getState().auth.session.token
        });
    },
    read: () => (dispatchEvent, getState) => {
        return request({
            url: `${api}/educacion`,
            method: "GET",
            callback: function ({ data }) {
                dispatchEvent(actionsCreators.setEducacion(data));
            },
            token: getState().auth.session.token
        });
    },
    create: (data) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/educacion`,
            method: "POST",
            data: data,
            callback: function ({ data }) {
                dispatchEvent(actionsCreators.read());
            },
            token: getState().auth.session.token
        });
    },
    update: (data) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/educacion/${data.id}`,
            method: "PUT",
            data: data,
            callback: function ({ data }) {
                dispatchEvent(actionsCreators.read());
            },
            token: getState().auth.session.token
        });
    },
    delete: (data) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/educacion/${data.id}`,
            method: "DELETE",
            data: data,
            callback: function ({ data }) {
                dispatchEvent(actionsCreators.read());
            },
            token: getState().auth.session.token
        });
    },
}