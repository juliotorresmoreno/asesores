

import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/chats';

const mapProps = (state) => ({
    auth: { session: state.auth.session },
    userProfile: {
        nombres: state.profile.nombres,
        apellidos: state.profile.apellidos,
        usuario: state.profile.usuario
    }
});

class Chat extends PureComponent {
    getDisplayName = (value) => {
        const session = this.props.auth.session;
        const profile = this.props.userProfile;
        if (session.usuario === value.usuario) {
            return session.nombres + " " + session.apellidos;
        }
        return (
            <Link to={`/user/${value.usuario}`} style={{ color: "#D94B3B" }}>
                {profile.nombres} {profile.apellidos}
            </Link>
        );
    }
    handleCancelar = (id) => (e) => {
        e.preventDefault();
        this.props.cancelVideoCall(id);
    }
    handleRechazar = (id) => (e) => {
        e.preventDefault();
        this.props.rejectVideoCall(id);
    }
    handleAceptar = (id) => (e) => {
        e.preventDefault();
        this.props.aceptedVideoCall(id);
    }
    handleEnter = (id) => (e) => {
        e.preventDefault();
        const profile = this.props.userProfile;
        window.open(`/videocall/${profile.usuario}?id=${id}`, "_blank", "toolbar=0");
    }
    handleTerminar = (id) => (e) => {
        e.preventDefault();
        this.props.stopVideoCall(id);
    }
    getContentUser1 = () => {
        const data = this.props.data;
        if (data.status === 1)
            return (
                <span>
                    Solicitaste una videollamada&nbsp;
                    <a href="" onClick={this.handleCancelar(data.id)}>
                        Cancelar
                    </a>
                </span>
            )
        if (data.status === 2)
            return "Cancelaste una solicitud de videollamada.";
        if (data.status === 3)
            return "Ha rechazado una solicitud de videollamada.";
        if (data.status === 4)
            return "Estas en una videollamada.";
        if (data.status === 5)
            return "Estuviste en una videollamada.";
    }
    getContentUser2 = () => {
        const data = this.props.data;
        if (data.status === 1)
            return (
                <span>
                    Solicita una videollamada&nbsp;
                    <a href="" onClick={this.handleAceptar(data.id)}>
                        Aceptar
                    </a>&nbsp;
                    <a href="" onClick={this.handleRechazar(data.id)}>
                        Rechazar
                    </a>
                </span>
            );
        if (data.status === 2)
            return "Ha cancelado una solicitud de videollamada.";
        if (data.status === 3)
            return "Rechazaste una solicitud de videollamada.";
        if (data.status === 4)
            return (
                <span>
                    Estas en una videollamada.&nbsp;
                    <a href="" onClick={this.handleEnter(data.id)}>
                        Entrar
                    </a>&nbsp;
                    <a href="" onClick={this.handleTerminar(data.id)}>
                        Terminar
                    </a>
                </span>
            );
        if (data.status === 5)
            return "Estuviste en una videollamada.";
    }
    render() {
        const session = this.props.auth.session;
        const data = this.props.data;
        if (session.usuario === data.usuario) {
            return (
                <div>
                    {moment(data.fecha).format("YYYY-MM-DD HH:ss")}&nbsp;
                    <span style={{ fontWeight: 'bold' }}>
                        {this.getDisplayName(data)}
                    </span>:&nbsp;
                    {this.getContentUser1()}
                </div>
            );
        }
        return (
            <div>
                {moment(data.fecha).format("YYYY-MM-DD HH:ss")}&nbsp;
                <span style={{ fontWeight: 'bold' }}>
                    {this.getDisplayName(data)}
                </span>:&nbsp;
                {this.getContentUser2()}
            </div>
        );
    }
};

export default connect(mapProps, {
    ...actionsCreators1
})(withRouter(Chat));