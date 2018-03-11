

import React, { PureComponent } from 'react';
import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators0 } from '../../../../actions/auth';
import { actionsCreators as actionsCreators1 } from '../../../../actions/profile';
import { actionsCreators as actionsCreators2 } from '../../../../actions/messages';
import { Icon } from 'react-fa';

const mapProps = (state) => ({
    auth: { ...state.auth }
});

class TabBasico extends PureComponent {
    state = {
        name: "",
        lastname: ""
    }
    componentDidMount() {
        this.setState({
            name: this.props.auth.session.nombres,
            lastname: this.props.auth.session.apellidos
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.lastname === "") {
            this.props.alert("Debes escribir un nombre y apellido.");
            return;
        }
        const data = {
            nombres: this.state.name,
            apellidos: this.state.lastname
        };
        this.props.updateProfile(data)
            .then(() => {
                this.props.info("Actualizado correctamente.")
                this.props.session();
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
                    <Label sm={4}>Nombres</Label>
                    <Col sm={8}>
                        <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={4}>Apellidos</Label>
                    <Col sm={8}>
                        <Input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
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
    ...actionsCreators2,
    updateProfile: actionsCreators1.update,
    session: actionsCreators0.session
})(TabBasico);