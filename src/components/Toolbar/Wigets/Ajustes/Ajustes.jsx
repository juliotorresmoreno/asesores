import React from 'react';
import {
    Modal, ModalHeader, ModalBody, TabPane, TabContent, Nav, NavItem, NavLink
} from 'reactstrap';
import classnames from "classnames";
import TabBasico from "./TabBasico";
import TabPassword from "./TabPassword";
import TabPagos from "./TabPagos";
import Logo from "../../../../components/Logo";

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
                <ModalHeader toggle={this.props.toggle}>
                    <Logo />&nbsp;
                    Ajustes
                </ModalHeader>
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
                            <TabBasico />
                        </TabPane>
                        <TabPane tabId="2">
                            <br />
                            <TabPagos />
                        </TabPane>
                        <TabPane tabId="3">
                            <br />
                            <TabPassword />
                        </TabPane>
                    </TabContent>
                </ModalBody>
            </Modal>
        );
    }
}

export default Toolbar;