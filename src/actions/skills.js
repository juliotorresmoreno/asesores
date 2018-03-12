
import * as actionsTypes from './actionsTypes';
import { api } from '../config';
import { request } from '../util/request';

export const actionsCreators = {
    setSkills: (data) => ({
        type: actionsTypes.skillsSet,
        data: data
    }),
    describe: (data) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/skills/${data.id}`,
            method: "GET",
            callback: function ({ data }) {
                //dispatchEvent(actionsCreators.setProfile(data));
            },
            token: getState().auth.session.token
        });
    },
    read: (username) => (dispatchEvent, getState) => {
        const url = username ? `${api}/skills/${username}` : `${api}/skills`;
        return request({
            url: url,
            method: "GET",
            callback: function ({ data }) {
                dispatchEvent(actionsCreators.setSkills(data));
            },
            token: getState().auth.session.token
        });
    },
    create: (data) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/skills`,
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
            url: `${api}/skills/${data.id}`,
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
            url: `${api}/skills/${data.id}`,
            method: "DELETE",
            data: data,
            callback: function ({ data }) {
                dispatchEvent(actionsCreators.read());
            },
            token: getState().auth.session.token
        });
    },
}