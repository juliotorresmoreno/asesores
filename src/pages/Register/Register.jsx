
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators0 } from '../../actions/auth';
import { actionsCreators as actionsCreators1 } from '../../actions/messages';
import {
    Button, Form, FormGroup, Label,
    Input, Container, Row, Col
} from 'reactstrap';

const mapProps = (state) => ({

});

class Register extends PureComponent {
    state = {
        name: "julio cesar",
        lastname: "torres moreno",
        email: "username@test.com",
        username: "username",
        password: "username1",
        password_confirmation: "username1"
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { password, password_confirmation } = this.state;
        if (password !== password_confirmation) {
            this.props.alert("Favor confirma la contraseña");
            return;
        }
        const data = {
            nombres: this.state.name,
            apellidos: this.state.lastname,
            email: this.state.email,
            usuario: this.state.username,
            passwd: this.state.password
        };
        this.props.register(data)
            .then(() => {
                this.props.history.push("/");
            })
            .catch((err) => {
                var error = err.message.split(";")
                this.props.alert(error[0].split(":")[1].trim());
            });
    }
    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div style={{ minHeight: 400 }}>
                <Row style={{ marginRight: 0 }}>
                    <div className="col col-md-4 offset-md-4" style={{ paddingRight: 0 }}>
                        <Container
                            style={{
                                background: 'white', padding: 20, borderRadius: '5px',
                                boxShadow: '0px 0px 40px 0px rgba(0,0,0,0.48)'
                            }}>
                            <Form onSubmit={this.handleSubmit}>
                                <h3 style={{
                                    textAlign: "center",
                                    fontFamily: "Franchise",
                                    fontSize: 48
                                }}>REGISTRATE</h3>
                                <hr />
                                <br />
                                <FormGroup row>
                                    <Label sm={5}>Nombres</Label>
                                    <Col sm={7}>
                                        <Input
                                            onChange={this.handleChange}
                                            type="text" name="name"
                                            value={this.state.name} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={5}>Apellidos</Label>
                                    <Col sm={7}>
                                        <Input
                                            onChange={this.handleChange}
                                            type="text" name="lastname"
                                            value={this.state.lastname} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={5}>Usuario</Label>
                                    <Col sm={7}>
                                        <Input
                                            onChange={this.handleChange}
                                            type="text" name="username"
                                            value={this.state.username} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={5}>E-mail</Label>
                                    <Col sm={7}>
                                        <Input
                                            onChange={this.handleChange}
                                            type="email" name="email"
                                            value={this.state.email} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={5}>Password</Label>
                                    <Col sm={7}>
                                        <Input
                                            onChange={this.handleChange}
                                            type="password" name="password"
                                            value={this.state.password} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={5}>Confirmar Password</Label>
                                    <Col sm={7}>
                                        <Input
                                            onChange={this.handleChange}
                                            type="password" name="password_confirmation"
                                            value={this.state.password_confirmation} />
                                    </Col>
                                </FormGroup>
                                <Row>
                                    <Col sm={4}>
                                        <Button color="primary">Registrate</Button>
                                    </Col>
                                    <Col sm={8} style={{ textAlign: "right" }}>
                                        <Button type="button" color="primary">Facebook</Button>
                                        &nbsp;&nbsp;o&nbsp;&nbsp;
                                        <Button type="button" color="danger">Google+</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                </Row>
            </div>
        );
    }
}

export default connect(mapProps, {
    ...actionsCreators0,
    ...actionsCreators1
})(Register);