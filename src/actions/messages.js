

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
    close: () => ({
        type: actionsTypes.messagesClose
    })
}