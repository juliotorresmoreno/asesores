import React, { PureComponent } from 'react';
import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/auth';
import { actionsCreators as actionsCreators2 } from '../../../../actions/messages';
import { Icon } from 'react-fa';

const mapProps = (state) => ({

});

class TabPassword extends PureComponent {
    state = {
        password: "",
        new_password: "",
        confirm_password: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.confirm_password !== this.state.new_password) {
            this.props.alert("Debes confirmar la contraseña");
            return;
        }
        const data = {
            passwd: this.state.password,
            passwdNew: this.state.new_password
        };
        this.props.password(data)
            .then(() => {
                this.props.info("Actualizado correctamente.");
                this.setState({
                    password: "",
                    new_password: "",
                    confirm_password: ""
                });
            })
            .catch((err) => {
                this.props.alert(err.message);
            });
    }
    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label sm={4}>Contraseña</Label>
                    <Col sm={8}>
                        <Input type="password" name="password" onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={4}>Nueva</Label>
                    <Col sm={8}>
                        <Input type="password" name="new_password" onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={4}>Confirmar</Label>
                    <Col sm={8}>
                        <Input type="password" name="confirm_password" onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <Button color="primary">
                    <Icon name="save" />&nbsp;
                    Guardar
                </Button>
            </Form>
        );
    }
}

export default connect(mapProps, {
    ...actionsCreators1,
    ...actionsCreators2
})(TabPassword);