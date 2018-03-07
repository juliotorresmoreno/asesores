import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar dark expand="md">
                <NavbarBrand href="/" style={{backgroundColor: ''}}>Asesores</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/login">Ingresa</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/register">Registrate</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
