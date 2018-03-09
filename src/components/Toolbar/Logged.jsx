import React from 'react';
import {
    Navbar, Input,
    Nav, NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Collapse,
    NavbarToggler
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Ajustes from './Wigets/Ajustes';

class Toolbar extends React.Component {
    state = {
        isOpenCollapse: false,
        isOpenAjustes: false
    };
    toggleAjustes = () => {
        this.setState({
            isOpenAjustes: !this.state.isOpenAjustes
        });
    }
    toggleCollapse = () => {
        this.setState({
            isOpenCollapse: !this.state.isOpenCollapse
        });
    }
    logout = () => {
        window.localStorage.clear();
        window.location.reload();
    }
    redirect = (url) => () => this.props.history.push(url);
    render() {
        return [
            <Navbar key={0} dark expand="md">
                <Link className="navbar-brand" to="/" style={{ backgroundColor: 'initial' }}>
                    <img style={{ height: 24 }} alt="" src="/img/logo.png" />
                </Link>
                <NavbarToggler onClick={this.Collapse} />
                <Collapse isOpen={this.state.isOpenCollapse} navbar>
                    <Nav className="ml-left" navbar>
                        <NavItem>
                            <Input
                                type="text" name="search"
                                placeholder="Busca un asesor" />
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                {this.props.session.nombres}&nbsp;
                                {this.props.session.apellidos}&nbsp;
                                <img alt="" height={24} src="/icons/148705-essential-collection/png/user-3.png" />
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={this.redirect("/perfil")}>
                                    Perfil
                                </DropdownItem>
                                <DropdownItem onClick={this.redirect("/mensajes")}>
                                    Mensajes
                                </DropdownItem>
                                <DropdownItem onClick={this.toggleAjustes}>
                                    Ajustes
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={this.logout}>
                                    Salir
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>,
            <Ajustes key={1} open={this.state.isOpenAjustes} toggle={this.toggleAjustes} />
        ];
    }
}

export default Toolbar;