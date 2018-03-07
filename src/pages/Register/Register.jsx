
import React, { PureComponent } from 'react';
import {
    Button, Form, FormGroup, Label,
    Input, Container, Row, Col
} from 'reactstrap';
import {
    Link
} from 'react-router-dom';

export default class Register extends PureComponent {
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div style={{ minHeight: 400 }}>
                <Row style={{ marginRight: 0}}>
                    <div className="col col-md-4 offset-md-4" style={{paddingRight:0}}>
                        <Container 
                            style={{ 
                            background: 'white', padding: 20, borderRadius: '5px', 
                            boxShadow: '0px 0px 40px 0px rgba(0,0,0,0.48)' }}>
                            <Form onSubmit={this.handleSubmit}>
                                <h3 style={{
                                    textAlign: "center",
                                    fontFamily: "Franchise",
                                    fontSize: 48
                                }}>REGISTRATE</h3>
                                <hr />
                                <br />
                                <FormGroup row>
                                    <Label sm={4}>Nombres</Label>
                                    <Col sm={8}>
                                        <Input type="text" name="name" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={4}>Apellidos</Label>
                                    <Col sm={8}>
                                        <Input type="text" name="lastname" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={4}>Usuario</Label>
                                    <Col sm={8}>
                                        <Input type="text" name="username" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={4}>E-mail</Label>
                                    <Col sm={8}>
                                        <Input type="email" name="email" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={4}>Password</Label>
                                    <Col sm={8}>
                                        <Input type="password" name="password" />
                                    </Col>
                                </FormGroup>
                                <Button color="info">Registrate</Button>
                            </Form>
                            <hr />
                            <div style={{textAlign: "right"}}>
                                <Button color="primary">Facebook</Button>
                                &nbsp;o&nbsp;
                                <Button color="danger">Google+</Button>
                            </div>
                        </Container>
                    </div>
                </Row>
            </div>
        );
    }
}