import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import classname from 'classname';


class Toolbar extends React.Component {
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
        var isLogin = this.props.location.pathname === '/login',
            isRegister = this.props.location.pathname === '/register';
        return (
            <Navbar dark expand="md">
                <Link className="navbar-brand" to="/" style={{ backgroundColor: 'initial' }}>
                    <img style={{ height: 24 }} alt="" src="/img/logo.png" />
                </Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className={classname({active: isLogin})}>
                            <Link className="nav-link" to="/login">
                                Ingresa
                            </Link>
                        </NavItem>
                        <NavItem className={classname({active: isRegister})}>
                            <Link className="nav-link" to="/register">
                                Registrate
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Toolbar;