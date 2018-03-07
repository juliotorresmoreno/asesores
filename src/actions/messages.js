

import * as actionsTypes from './actionsTypes';

export const actionsCreators = {
    alert: (message) => ({
        type: actionsTypes.messagesAlert,
        message: message
    }),
    close: () => ({
        type: actionsTypes.messagesClose
    })
}