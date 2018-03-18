import React, { PureComponent } from 'react';
import { DropdownItem } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { api } from '../../../../config';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/notificaciones';

const mapProps = (state) => ({
    token: state.auth.session.token
});

class Chat extends PureComponent {
    handleTo = (url) => () => {
        const index = this.props.index;
        this.props.remove(index);
        this.props.history.push(url);
    }
    getUrl(usuario) {
        return `${api}/galery/fotoPerfil/${usuario}`;
    }
    render() {
        const data = this.props.data;
        return (
            <DropdownItem onClick={this.handleTo(`/mensajes/${data.usuario}`)}>
                <img height={24} alt="" src={this.getUrl(data.usuario)} />&nbsp;&nbsp;
                {data.mensaje.substring(0, 10)}
            </DropdownItem>
        );
    }
}

export default connect(mapProps, {
    ...actionsCreators1
})(withRouter(Chat));
