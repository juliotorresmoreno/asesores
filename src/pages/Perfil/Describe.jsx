
import React, { PureComponent } from 'react';
import { Container, Button, Input, Form, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import Editor from '../../components/Editor';
import Others from './Others';
import User from './User';

const mapProps = (state) => ({
    auth: { session: state.auth.session }
});

class Describe extends PureComponent {
    handleTo = () => (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div style={{ backgroundColor: "white", padding: 15 }}>
                <h1>{this.props.auth.session.nombres}</h1>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <Input type="text" style={{ fkex: 1 }} />&nbsp;&nbsp;
                        <Button style={{ float: 'right' }} color="primary">
                            Guardar
                        </Button>
                    </div>
                </Form>
                <br />
                <Editor />
                <div style={{ margin: 5 }} />
                <Button color="primary">
                    Guardar
                </Button>
            </div>
        );
    }
}

export default connect(mapProps)(Describe);