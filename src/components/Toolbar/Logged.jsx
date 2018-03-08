import React from 'react';
import {
    Collapse,
    Navbar, Input,
    NavbarToggler,
    Nav, NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

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
    logout = () => {

    }
    redirect = (url) => () => this.props.history.push(url);
    render() {
        return (
            <Navbar style={{minWidth: 1150}} dark expand="md">
                <Link className="navbar-brand" to="/" style={{ backgroundColor: 'initial' }}>
                    <img style={{height:24}} alt="" src="/img/logo.png" />
                </Link>
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
                                <img alt="" height={24} src="/icons/148705-essential-collection/png/user-3.png" />
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={this.redirect("/perfil")}>
                                    Perfil
                                </DropdownItem>
                                <DropdownItem onClick={this.redirect("/blogs")}>
                                    Blogs
                                </DropdownItem>
                                <DropdownItem onClick={this.redirect("/mensajes")}>
                                    Mensajes
                                </DropdownItem>
                                <DropdownItem onClick={this.redirect("/contenido")}>
                                    Tu contenido
                                </DropdownItem>
                                <DropdownItem onClick={this.redirect("/perfil")}>
                                    Estadísticas
                                </DropdownItem>
                                <DropdownItem onClick={this.redirect("/ajustes")}>
                                    Ajustes
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={this.logout}>
                                    Salir
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
            </Navbar>
        );
    }
}

export default Toolbar;