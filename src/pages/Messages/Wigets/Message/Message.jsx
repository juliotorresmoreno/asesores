
import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap';
import { Icon } from 'react-fa';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/chats';
import { actionsCreators as actionsCreators2 } from '../../../../actions/profile';
import Chat from './Chat';

const mapProps = (state) => ({
    auth: { session: state.auth.session },
    chats: state.chats.data,
    usuarios: state.chats.usuarios,
    userProfile: {
        isMe: state.profile.isMe,
        nombres: state.profile.nombres,
        apellidos: state.profile.apellidos,
        usuario: state.profile.usuario
    }
});

const customStyles = {
    container: {
        marginBottom: 10, padding: 15,
        display: 'flex',
        border: '1px solid #DDD',
        flexDirection: "column",
        backgroundColor: 'white',
        minWidth: 690,
        height: 'calc(100% - 26px)'
    },
    content: {
        flex: 1,
    },
    footer: {
        display: 'flex'
    },
    toolbar: {
        float: 'right'
    },
    layout: {
        overflowY: 'auto'
    },
    input: {
        flex: 1
    }
}

class Message extends Component {
    state = {
        usuario: '',
        mensaje: ''
    }
    componentDidMount() {
        const { username } = this.props.match.params;
        if (!username) return;
        this.props.read(username);
        this.props.profile(username);
        this.setState({ usuario: username });

    }
    componentWillReceiveProps(props) {
        const { username } = props.match.params;
        if (!username) return;
        if (this.state.usuario !== username) {
            this.props.profile(username);
            this.props.read(username);
        }
        this.setState({ usuario: username });
    }
    handleTo = () => (e) => {
        e.preventDefault();
    }
    handleSubmit = (e) => {
        if (e !== undefined) e.preventDefault();
        const { usuario, mensaje } = this.state;
        const { usuarios } = this.props;
        const data = {
            mensaje: mensaje,
            usuario: usuario,
            tipo: 'usuario'
        };
        this.props.send(data)
            .then(() => {
                this.setState({ mensaje: '' });
                const exists = usuarios.find((value) => value.usuario === usuario);
                if (exists === undefined) {
                    this.props.read(usuario);
                    this.props.listUsers();
                }
            });
    }
    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        });
    }
    hideMessages = (e) => {
        e.preventDefault();
        alert('sd');
    }
    handleEnter = ({ charCode }) => {
        if (charCode === 13) this.handleSubmit();
    }
    handleVidelCall = (e) => {
        if (e !== undefined) e.preventDefault();
        const { usuario } = this.state;
        const data = { usuario: usuario, };
        this.props.videocall(data);
    }
    handleCall = (e) => {
        e.preventDefault();
    }
    render() {
        const profile = this.props.userProfile;
        const usuarios = this.props.usuarios;
        const pathname = this.props.location.pathname;
        const chats = pathname !== "/mensajes" ? this.props.chats : [];
        const exists = usuarios.find((value) => value.usuario === profile.usuario);
        return (
            <div style={customStyles.container}>
                <div>
                    {exists ?
                        <div style={customStyles.toolbar}>
                            <a
                                href=""
                                onClick={this.handleVidelCall}
                                style={{ color: 'rgb(217, 75, 59)' }}>
                                <Icon name="camera" />
                            </a>&nbsp;&nbsp;
                            <a
                                href=""
                                onClick={this.handleCall}
                                style={{ color: 'green' }}>
                                <Icon name="phone" />
                            </a>
                            {/*<a href="">Denunciar</a>&nbsp;&nbsp;*/}
                            {/*<a href="" onClick={this.hideMessages}>Ocultar mensajes</a>*/}
                        </div> : false}
                    <h4>Mensajes</h4>
                    <hr />
                </div>

                <div style={customStyles.content}>
                    <div style={customStyles.layout}>
                        {chats.map((value, index) => (
                            <Chat key={index} data={value} />
                        ))}
                    </div>
                </div>

                <Form style={customStyles.footer} onSubmit={(e) => e.preventDefault()}>
                    <Input
                        disabled={pathname === "/mensajes"}
                        type="text" name="mensaje"
                        onChange={this.handleChange}
                        onKeyPress={this.handleEnter}
                        value={this.state.mensaje}
                        style={customStyles.input} />&nbsp;&nbsp;
                    <Button disabled={pathname === "/mensajes"} color="primary" onClick={this.handleSubmit}>
                        <Icon name="share-square" />&nbsp;
                        Enviar
                    </Button>
                </Form>
            </div>
        );
    }
}

export default connect(mapProps, {
    ...actionsCreators1,
    ...actionsCreators2
})(withRouter(Message));