
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators0 } from '../../actions/auth';
import { actionsCreators as actionsCreators1 } from '../../actions/messages';
import {
    Button, Form, FormGroup, Label,
    Input, Container, Row, Col
} from 'reactstrap';
import {
    Link, withRouter, Redirect
} from 'react-router-dom';

const mapProps = (state) => ({
    auth: { ...state.auth }
});

class Login extends PureComponent {
    state = {
        username: "username",
        password: "username1"
    }
    componentWillMount() {
        if (this.props.auth.session !== null) {
            this.props.history.push("/");
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            usuario: this.state.username,
            passwd: this.state.password
        };
        this.props.login(data)
            .then(() => {
                if (this.props.location.pathname === "/login") {
                    this.props.history.push("/");
                }
            })
            .catch((err) => {
                var error = err.message.split(";");
                this.props.alert(error[0].split(":")[1].trim());
            });
    }
    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }
    render() {
        if (this.props.auth.complete === false)
            return <i />;
        if (this.props.auth.session !== null)
            if (this.props.location.pathname === '/login')
                return <Redirect to="/" />;
        return (
            <div style={{ minHeight: 400 }}>
                <Row style={{ marginRight: 0 }}>
                    <div className="col col-md-4 offset-md-4" style={{ paddingRight: 0 }}>
                        <Container style={{ background: 'white', padding: 20, borderRadius: '5px', boxShadow: '0px 0px 40px 0px rgba(0,0,0,0.48)' }}>
                            <Form onSubmit={this.handleSubmit}>
                                <h3 style={{ textAlign: "center", fontFamily: "Franchise", fontSize: 48 }}>INGRESAR</h3>
                                <hr />
                                <br />

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
                                    <Label sm={5}>Password</Label>
                                    <Col sm={7}>
                                        <Input
                                            onChange={this.handleChange}
                                            type="password" name="password"
                                            value={this.state.password} />
                                    </Col>
                                </FormGroup>



                                <Button color="primary">Ingresa</Button>&nbsp;&nbsp;
                                <Link className="link" to="recovery_password">Recuperar cuenta</Link>
                            </Form>
                            <hr />
                            <div style={{ textAlign: "right" }}>
                                <Button color="primary">Facebook</Button>
                                &nbsp;&nbsp;o&nbsp;&nbsp;
                                <Button color="danger">Google+</Button>
                            </div>
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
})(withRouter(Login));