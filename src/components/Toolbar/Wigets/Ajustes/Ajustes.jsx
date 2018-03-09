import React from 'react';
import {
    Modal, Button,
    ModalHeader,
    ModalBody,
    TabPane,
    TabContent,
    Nav, NavItem,
    NavLink, Col,
    Form, FormGroup,
    Label, Input
} from 'reactstrap';
import classnames from "classnames";

class Toolbar extends React.Component {
    static defaultProps = {
        open: false,
        toggle: () => { }
    }
    state = {
        activeTab: '1'
    };
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <Modal isOpen={this.props.open} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Ajustes</ModalHeader>
                <ModalBody style={{ minHeight: 400 }}>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Basico
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Pagos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                            >
                                Cambiar contraseña
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <br />
                            <Form>
                                <FormGroup row>
                                    <Label sm={4}>Nombres</Label>
                                    <Col sm={8}>
                                        <Input />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={4}>Apellidos</Label>
                                    <Col sm={8}>
                                        <Input />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={4}>Email</Label>
                                    <Col sm={8}>
                                        <Input />
                                    </Col>
                                </FormGroup>
                                <Button color="primary">Guardar</Button>
                            </Form>
                        </TabPane>
                        <TabPane tabId="2">
                            <br />
                            <Button color="primary">Paypal</Button>
                        </TabPane>
                        <TabPane tabId="3">
                            <br />
                            <Form>
                                <FormGroup row>
                                    <Label sm={4}>Contraseña</Label>
                                    <Col sm={8}>
                                        <Input />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={4}>Nueva</Label>
                                    <Col sm={8}>
                                        <Input />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={4}>Confirmar</Label>
                                    <Col sm={8}>
                                        <Input />
                                    </Col>
                                </FormGroup>
                                <Button color="primary">Guardar</Button>
                            </Form>
                        </TabPane>
                    </TabContent>
                </ModalBody>
            </Modal>
        );
    }
}

export default Toolbar;