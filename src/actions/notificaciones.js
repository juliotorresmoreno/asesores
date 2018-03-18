
import * as actionsTypes from './actionsTypes';
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
            dispatchEvent(data);
        } else { //if (usuario !== session) {
            dispatchEvent(actionsCreators.notificar(data));
        }
    }
    conn.onclose = function() {
        setTimeout(() => connect(params), 1000);
    };
}

export const actionsCreators = {
    connect: () => (dispatchEvent, getState) => {
        if (getState().auth.session === null) return;
        connect({
            token: getState().auth.session.token,
            getState: getState,
            dispatchEvent: dispatchEvent
        });
    },
    notificar: (data) => ({
        type: actionsTypes.notificacionesAdd,
        data: data
    }),
    remove: (index) => ({
        type: actionsTypes.notificacionesDel,
        index: index
    })
}