

import * as actionsTypes from './actionsTypes';

export const actionsCreators = {
    info: (message) => ({
        type: actionsTypes.messagesInfo,
        message: message
    }),
    alert: (message) => ({
        type: actionsTypes.messagesAlert,
        message: message
    }),
    confirm: (message, callback = () => { }) => {
        return {
            type: actionsTypes.messagesConfirm,
            message: message,
            callback: callback
        }
    },
    close: () => ({
        type: actionsTypes.messagesClose
    })
}