
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators0 } from '../../actions/auth';
import { actionsCreators as actionsCreators1 } from '../../actions/messages';
import { actionsCreators as actionsCreators2 } from '../../actions/notificaciones';
import {
    Button, Form, FormGroup, Label,
    Input, Container, Row, Col
} from 'reactstrap';
import {
    Link, withRouter, Redirect
} from 'react-router-dom';
import { Icon } from 'react-fa';

const mapProps = (state) => ({
    auth: { ...state.auth }
});

class Login extends PureComponent {
    state = {
        username: "",
        password: ""
    }
    componentWillMount() {
        if (this.props.auth.session !== null) {
            this.props.history.push("/");
        }
    }
    componentWillUnmount() {
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
                this.props.connect();
            })
            .catch((err) => this.props.alert(err.message));
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
            <div style={{ display: 'table', height: 'calc(100% - 56px)', width: '100%' }}>
                <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                    <Row style={{ marginRight: 0, marginTop: 'auto', marginBottom: 'auto' }}>
                        <Col xs={{ size: 12, offset: 0 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }} sm={{ size: 8, offset: 2 }} style={{ paddingRight: 0 }}>
                            <Container style={{ background: 'white', padding: 20, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.48)' }}>
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

                                    <Button color="secondary">
                                        <Icon name="sign-in" />&nbsp;
                                        Ingresa
                                </Button>&nbsp;&nbsp;
                                <Link className="link" to="/recovery-password">Recuperar cuenta</Link>
                                </Form>
                                <hr />
                                <div style={{ textAlign: "right" }}>
                                    <Button color="primary">
                                        <Icon name="facebook-square" />&nbsp;
                                            </Button>
                                    &nbsp;&nbsp;o&nbsp;&nbsp;
                                            <Button color="danger">
                                        <Icon name="google-plus" />&nbsp;
                                    </Button>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default connect(mapProps, {
    ...actionsCreators0,
    ...actionsCreators1,
    ...actionsCreators2
})(withRouter(Login));