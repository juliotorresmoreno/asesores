

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import Videollamada from './Videollamada'

const mapProps = (state) => ({
    auth: { session: state.auth.session },
    userProfile: {
        nombres: state.profile.nombres,
        apellidos: state.profile.apellidos,
        usuario: state.profile.usuario
    }
});

 const Chat = ({ auth, userProfile, data }) => {
    const session = auth.session;
    const profile = userProfile;
    const getDisplayName = (value) => {
        if (session.usuario === value.usuario) {
            return session.nombres + " " + session.apellidos;
        }
        return (
            <Link to={`/user/${value.usuario}`} style={{ color: "#D94B3B" }}>
                {profile.nombres} {profile.apellidos}
            </Link>
        );
    }
    if(data.mensaje === '@chats/videocall')
        return <Videollamada data={data} />
    return (
        <div>
            {moment(data.fecha).format("YYYY-MM-DD HH:ss")}&nbsp;
            <span style={{ fontWeight: 'bold' }}>
                {getDisplayName(data)}
            </span>:&nbsp;
            {data.mensaje}
        </div>
    );
};

export default connect(mapProps)(withRouter(Chat));