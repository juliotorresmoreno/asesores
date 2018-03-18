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
import Notificacion from './Wigets/Notificacion';
import { Icon } from 'react-fa';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionsCreators as actionsCreators1 } from '../../actions/users';
import { actionsCreators as actionsCreators2 } from '../../actions/messages';
import { actionsCreators as actionsCreators3 } from '../../actions/notificaciones';
import { api } from '../../config';

const mapProps = (state) => ({
    token: state.auth.session.token,
    imagen: state.galerias.imagen,
    usuario: state.auth.session.usuario,
    notificaciones: state.notificaciones.data
});

class Toolbar extends React.Component {
    state = {
        search: '',
        isOpenAjustes: false,
        isOpenCollapse: false
    };
    componentDidMount() {
        this.props.read();
    }
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
    handleChange = ({ target: { name, value }}) => {
        this.setState({
            [name]: value
        });
        this.props.read(value.trim());
    }
    render() {
        const { imagen, usuario, notificaciones } = this.props;
        const imageSrc = `${api}/galery/fotoPerfil/${usuario}?uid=${imagen}`;
        return [
            <Navbar key={0} dark expand="md">
                <Link className="navbar-brand" to="/" style={{ backgroundColor: 'initial' }}>
                    <img style={{ height: 24 }} alt="" src="/img/logo.png" />
                </Link>
                <NavbarToggler onClick={this.toggleCollapse} />
                <Collapse isOpen={this.state.isOpenCollapse} navbar style={{zIndex: 100}}>
                    <Nav className="ml-left" navbar>
                        <NavItem>
                            <Input
                                type="text" name="search"
                                onChange={this.handleChange}
                                value={this.state.search}
                                placeholder="Busca un asesor" />
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        {notificaciones.length > 0 ?
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret style={{color: 'yellow'}}>
                                <Icon name="bell" />
                            </DropdownToggle>
                            <DropdownMenu right>
                                {notificaciones.map((value, index) => (
                                    <Notificacion key={index} index={index} data={value} />
                                ))}
                            </DropdownMenu>
                        </UncontrolledDropdown>:false}
                    
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                {this.props.session.nombres}&nbsp;
                                {this.props.session.apellidos}&nbsp;
                                <img alt="" height={24} src={imageSrc} />
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={this.redirect("/perfil")}>
                                    <Icon name="user" />&nbsp;
                                    Perfil
                                </DropdownItem>
                                <DropdownItem onClick={this.redirect("/mensajes")}>
                                    <Icon name="comments" />&nbsp;
                                    Mensajes
                                </DropdownItem>
                                <DropdownItem onClick={this.toggleAjustes}>
                                    <Icon name="wrench" />&nbsp;
                                    Ajustes
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={this.logout}>
                                <Icon name="sign-out" />&nbsp;
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

export default withRouter(connect(mapProps, {
    ...actionsCreators1,
    ...actionsCreators2,
    ...actionsCreators3
})(Toolbar));