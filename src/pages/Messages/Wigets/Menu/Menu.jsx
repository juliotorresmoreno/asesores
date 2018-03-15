
import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import classname from 'classname';
import { Icon } from 'react-fa';
import Nuevo from '../Nuevo';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/chats';

const mapProps = (state) => ({
    auth: { session: state.auth.session },
    chats: state.chats.usuarios,
    profile: {
        usuario: state.profile.usuario,
        nombres: state.profile.nombres,
        apellidos: state.profile.apellidos,
        isMe: state.profile.isMe
    }
});

const customStyles = {
    container: {
        backgroundColor: 'white',
        height: 'calc(100% - 26px)',
        display: 'inline-table',
        padding: 15, marginBottom: 10,
        border: '1px solid #DDD',
        width: 300
    }
}

class Menu extends Component {
    static defaultProps = {
        chats: []
    }
    state = {
        chats: [],
        isOpen: false
    }
    componentDidMount() {
        this.props.listUsers();
    }
    componentWillReceiveProps(props) {
        const chats = [ ...props.chats ];
        const profile = props.profile;
        const exists = chats.find((value) => value.usuario === profile.usuario);
        if (exists === undefined && profile.usuario && !profile.isMe) {
            chats.push({
                fullname: profile.nombres + " " + profile.apellidos,
                ...profile
            });
        }
        this.setState({
            chats: chats
        });
    }
    handleTo = (value) => (e) => {
        e.preventDefault();
        this.props.history.push(`/mensajes/${value.usuario}`);
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { username } = this.props.match.params;
        const chats = this.state.chats;
        return (
            <div style={customStyles.container}>
                <Button color="primary" style={{ float: 'right' }} onClick={this.toggle}>
                    <Icon name="search" />&nbsp;
                    Nuevo
                </Button>
                <h4>Mensajes</h4>
                <hr />
                <ListGroup>
                    {chats.map((value, index) => (
                        <ListGroupItem 
                            key={index} style={{ cursor: 'pointer' }}
                            className={classname({ active: value.usuario === username })}
                            onClick={this.handleTo(value)} >
                            {value.fullname}
                        </ListGroupItem>
                    ))}
                </ListGroup>
                <Nuevo isOpen={this.state.isOpen} toggle={this.toggle} />
            </div>
        );
    }
}

export default connect(mapProps, {
    ...actionsCreators1
})(withRouter(Menu));