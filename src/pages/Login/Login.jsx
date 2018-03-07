
import React, { PureComponent } from 'react';
import {
    Button, Form, FormGroup, Label,
    Input, Container, Row, Col
} from 'reactstrap';
import {
    Link
} from 'react-router-dom';

export default class Login extends PureComponent {
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div style={{ minHeight: 400 }}>
                <Row style={{ marginRight: 0}}>
                    <div className="col col-md-4 offset-md-4" style={{paddingRight:0}}>
                        <Container style={{ background: 'white', padding: 20, borderRadius: '5px', boxShadow: '0px 0px 40px 0px rgba(0,0,0,0.48)' }}>
                            <Form onSubmit={this.handleSubmit}>
                            <h3 style={{ textAlign: "center", fontFamily: "Franchise", fontSize: 48 }}>INGRESAR</h3>
                                <hr />
                                <br />
                                <FormGroup row>
                                    <Label sm={4}>Usuario/Email</Label>
                                    <Col sm={8}>
                                        <Input type="text" name="usuario" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={4}>Password</Label>
                                    <Col sm={8}>
                                        <Input type="password" name="password" />
                                    </Col>
                                </FormGroup>
                                <Button color="primary">Ingresa</Button>&nbsp;&nbsp;
                                <Link className="link" to="recovery_password">Recuperar cuenta</Link>
                            </Form>
                            <hr />
                            <div style={{textAlign: "right"}}>
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