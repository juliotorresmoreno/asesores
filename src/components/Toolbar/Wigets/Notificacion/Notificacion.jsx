import React from 'react';
import * as actionsTypes from '../../../../actions/actionsTypes';
import Chat from './Chat';
import { connect } from 'react-redux';

const mapProps = (state) => ({

});

const Notificacion = ({ data, index }) => {
    switch(data.type) {
        case actionsTypes.chatsMessagesAdd:
            return <Chat index={index} data={data} />;
        default:
            return false;
    }
}

export default connect(mapProps)(Notificacion);