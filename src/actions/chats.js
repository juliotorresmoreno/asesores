
import * as actionsTypes from './actionsTypes';
import { actionsCreators as notificaciones } from './notificaciones';
import { api } from '../config';
import { request } from '../util/request';
import moment from 'moment';

export const actionsCreators = {
    listUsers: () => (dispatchEvent, getState) => {
        return request({
            url: `${api}/chats`,
            method: "GET",
            callback: function ({success, data}) {
                if (!success) return;
                const n = data.filter((value) => value.count > 0);
                n.forEach((element) => {
                    dispatchEvent(notificaciones.notificar({
                        type: actionsTypes.chatsMessagesAdd,
                        usuario: element.usuario,
                        mensaje: "Tienes mensajes nuevos",
                        fecha: moment().toLocaleString()
                    })); 
                });
                dispatchEvent(({
                    type: actionsTypes.chatsUsersSet,
                    data: data
                }));
            },
            token: getState().auth.session.token
        });
    },
    read: (username) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/chats/${username}`,
            method: "GET",
            callback: function ({success, data, videoCall}) {
                if (!success) return;
                dispatchEvent(({
                    type: actionsTypes.chatsSet,
                    data: data,
                    videoCall: videoCall
                }));
            },
            token: getState().auth.session.token
        });
    },
    send: (data) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/chats/mensaje`,
            method: "POST",
            data: data,
            callback: function (data) {
                if (!data.success) return;
            },
            token: getState().auth.session.token
        });
    },
    call: (data) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/chats/mensaje`,
            method: "POST",
            data: data,
            callback: function (data) {
                if (!data.success) return;
            },
            token: getState().auth.session.token
        });
    },
    videocall: (data) => (dispatchEvent, getState) => {
        return dispatchEvent(actionsCreators.send({
            ...data,
            tipo: "usuario",
            mensaje: '@chats/videocall'
        }));
    },
    cancelVideoCall: (id) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/chats/mensaje`,
            method: "PUT",
            data: { id: `${id}`, status: "2" },
            callback: function (data) {
                if (!data.success) return;
            },
            token: getState().auth.session.token
        });
    },
    rejectVideoCall: (id) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/chats/mensaje`,
            method: "PUT",
            data: { id: `${id}`, status: "3" },
            callback: function (data) {
                if (!data.success) return;
            },
            token: getState().auth.session.token
        });
    },
    aceptedVideoCall: (id) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/chats/mensaje`,
            method: "PUT",
            data: { id: `${id}`, status: "4" },
            callback: function (data) {
                if (!data.success) return;
            },
            token: getState().auth.session.token
        });
    },
    stopVideoCall: (id) => (dispatchEvent, getState) => {
        return request({
            url: `${api}/chats/mensaje`,
            method: "PUT",
            data: { id: `${id}`, status: "5" },
            callback: function (data) {
                if (!data.success) return;
            },
            token: getState().auth.session.token
        });
    },
}