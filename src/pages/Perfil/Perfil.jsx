
import React, { PureComponent } from 'react';
import { Container, Button, Input, Form, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import Editor from '../../components/Editor';
import Others from './Others';
import User from './User';
import Describe from './Describe';

const mapProps = (state) => ({
    auth: { session: state.auth.session }
});

class Perfil extends PureComponent {
    handleTo = () => (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div style={{ display: "flex", margin: '0 90px' }}>
                <div style={{ margin: '0 5px', width: 240 }}>
                    <User />
                </div>
                <div style={{ flex: 1, margin: '0 5px', minWidth: 515 }}>
                    <Describe />
                </div>
                <div style={{ margin: '0 5px' }}>
                    <Others />
                </div>
            </div>
        );
    }
}

export default connect(mapProps)(Perfil);