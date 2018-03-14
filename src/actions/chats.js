
import * as actionsTypes from './actionsTypes';
import { api } from '../config';
import { request } from '../util/request';
import { wss } from '../config';

var conn;

function connect(params) {
    const { token, getState, dispatchEvent } = params;
    conn = new window.WebSocket(`${wss}?token=${token}`);
    conn.onopen = function() {
        console.log("connect");
    };
    conn.onmessage = function (message) {
        const data = JSON.parse(message.data);
        const { usuario, usuarioReceptor } = data;
        const state = getState();
        const session = state.auth.session.usuario;
        const user = session === usuario ? usuarioReceptor: usuario;

        if (state.profile.usuario === user) {
            const exists = state.chats.usuarios.find((value) => (
                value.usuario === user
            ));
            console.log(user, state.profile.usuario, exists)
            if (exists !== undefined) {
                dispatchEvent({
                    type: actionsTypes.chatsMessagesAdd,
                    data: data
                });
                return;
            }
            dispatchEvent(actionsCreators.listUsers());
            dispatchEvent(actionsCreators.read(user));
        }
    }
    conn.onclose = function() {
        setTimeout(() => connect(params), 1000);
    };
}

export const actionsCreators = {
    connect: () => (dispatchEvent, getState) => {
        connect({
            token: getState().auth.session.token,
            getState: getState,
            dispatchEvent: dispatchEvent
        });
    },
    listUsers: () => (dispatchEvent, getState) => {
        console.log("aca");
        return request({
            url: `${api}/chats`,
            method: "GET",
            callback: function ({success, data}) {
                if (!success) return;
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
            callback: function ({success, data}) {
                if (!success) return;
                dispatchEvent(({
                    type: actionsTypes.chatsSet,
                    data: data.reverse()
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
    }
}