
import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap';
import { Icon } from 'react-fa';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/chats';
import { actionsCreators as actionsCreators2 } from '../../../../actions/profile';

const mapProps = (state) => ({
    auth: { session: state.auth.session },
    chats: state.chats.data,
    userProfile: {
        isMe: state.profile.isMe,
        nombres: state.profile.nombres,
        apellidos: state.profile.apellidos
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
        this.setState({usuario: username});
        
    }
    componentWillReceiveProps(props) {
        const { username } = props.match.params;
        if (!username) return;
        if (this.state.usuario === username) return;
        this.props.read(username);
        this.props.profile(username);
        this.setState({ usuario: username });
    }
    handleTo = () => (e) => {
        e.preventDefault();
    }
    getDisplayName = (value) => {
        const session = this.props.auth.session;
        const profile = this.props.userProfile;
        if (session.usuario === value.usuario) {
            return session.nombres + " " + session.apellidos;
        }
        return (
            <Link to={`/user/${value.usuario}`} style={{color: "#D94B3B"}}>
                {profile.nombres} {profile.apellidos}
            </Link>
        );
    }
    handleSubmit = (e) => {
        if (e !== undefined) e.preventDefault();
        const data = {
            mensaje: this.state.mensaje,
            usuario: this.state.usuario,
            tipo: 'usuario'
        };
        this.props.send(data)
            .then(() => {
                this.setState({
                    mensaje: ''
                });
                //this.props.read(this.state.usuario);
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
    handleEnter = ({charCode}) => {
        if(charCode === 13) this.handleSubmit();
    }
    render() {
        const pathname = this.props.location.pathname;
        const chats = pathname !== "/mensajes" ? this.props.chats: [];
        return (
            <div style={customStyles.container}>
                <div>
                    <div style={customStyles.toolbar}>
                        {/*<a href="">Denunciar</a>&nbsp;&nbsp;*/}
                        {/*<a href="" onClick={this.hideMessages}>Ocultar mensajes</a>*/}
                    </div>
                    <h4>Mensajes</h4>
                    <hr />
                </div>

                <div style={customStyles.content}>
                    <div style={customStyles.layout}>
                        {chats.map((value, index) => (
                            <div key={index}>
                                {moment(value.fecha).format("YYYY-MM-DD HH:ss")}&nbsp;
                                <span style={{fontWeight: 'bold'}}>
                                    {this.getDisplayName(value)}
                                </span>:&nbsp;
                                {value.mensaje}
                            </div>
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