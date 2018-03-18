
import React, { PureComponent } from 'react';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';
import Foto from './Foto';
import { api } from '../../../../config';
import { actionsCreators as actionsCreators0 } from '../../../../actions/messages';
import { actionsCreators as actionsCreators1 } from '../../../../actions/countries';
import { actionsCreators as actionsCreators2 } from '../../../../actions/profile';


const mapProps = (state) => ({
    token: state.auth.session.token,
    profile: {
        isMe: state.profile.isMe,
        usuario: state.profile.usuario,
        create_at: state.profile.create_at,
        residencia_pais: state.profile.residencia_pais,
        residencia_ciudad: state.profile.residencia_ciudad
    },
    imagen: state.galerias.imagen,
    countries: {...state.countries}
});

class User extends PureComponent {
    state = {
        isOpen: false,
        country: '',
        city: ''
    }
    componentDidMount() {
        this.props.read();
    }
    componentWillReceiveProps(props) {
        const { country } = this.state;
        const { residencia_pais, residencia_ciudad } = props.profile;
        if (country) return;
        this.setState({
            country: residencia_pais,
            city: residencia_ciudad
        });
        if (country !== residencia_pais)
            if (residencia_pais)
                this.props.city(residencia_pais);
    }
    handleTo = () => (e) => {
        e.preventDefault();
    }
    toggle = (e) => {
        if (e) e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    handleCountryChange = ({ target: { name, value } }) => {
        this.props.city(value);
        this.setState({
            [name]: value,
            city: ''
        });
    }
    handleCityChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.country === "" || this.state.city === "") {
            this.props.alert("Debes especificar el pais y ciudad de residencia.");
            return;
        }
        const data = {
            residencia_pais: this.state.country,
            residencia_ciudad: this.state.city,
            permiso_residencia_pais: 'public',
            permiso_residencia_ciudad: 'public'
        };
        this.props.updateProfile(data)
            .then(() => {
                this.props.setProfile(data);
                this.props.info("Actualizado correctamente.");
            })
            .catch((err) => {
                this.props.alert("Ocurrio un error desconocido");
            });
    }
    like = (e) => {
        e.preventDefault();
    }
    render() {
        const { imagen, countries } = this.props;
        const { usuario, isMe, create_at } = this.props.profile;
        const imageSrc = `${api}/galery/fotoPerfil/${usuario}?uid=${imagen}`;
        const registro = moment(new Date(create_at)).format("DD [de] MMMM [del] YYYY");
        return (
            <div style={{ backgroundColor: "white", padding: 15, border: '1px solid #DDD' }}>
                <div style={{ width: 210 }}>
                    {isMe?
                        <a href="" onClick={this.toggle}>
                            <img
                                className="img-thumbnail" style={{ width: "100%" }} alt=""
                                src={imageSrc} />
                        </a>:
                        <img
                            className="img-thumbnail" style={{ width: "100%" }} alt=""
                            src={imageSrc} />}
                </div>
                <div style={{ margin: 10 }} />
                <div style={{ textAlign: "center", padding: 10 }}>
                    @{usuario}
                </div>
                {!isMe ?
                <div>
                    <div style={{ padding: 10 }}>
                        <ul className="verified-list">
                            <li>
                                <Link to={`/mensajes/${usuario}`} style={{ color: '#d4ac0d' }} className="Icon">
                                    <Icon name="envelope" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/*
                    <img alt="" height={24} src="/icons/206589-international-flags/svg/177-colombia.svg" />
                    &nbsp;
                    */}
                    {this.state.city}, {this.state.country}<br />
                    Miembro desde el {registro}
                    {/*<br />
                    <br />
                    <a href="" onClick={this.like}>
                        0&nbsp;<Icon name="thumbs-up" />
                    </a>*/}
                </div>:
                <div>
                    <hr />
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label>Pais de residencia</Label>
                            <Input
                                type="select" name="country"
                                required={true}
                                value={this.state.country}
                                onChange={this.handleCountryChange}
                                style={{ width: '100%' }}>
                                <option disabled={this.state.country !== ''}>
                                    Seleccione un pais
                                </option>
                                {countries.data.map((value, index) => (
                                    <option key={index} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Ciudad de residencia</Label>
                            <Input
                                type="select" name="city"
                                required={true}
                                value={this.state.city}
                                onChange={this.handleCityChange}
                                style={{ width: '100%' }}>
                                <option disabled={this.state.city !== ''}>
                                    Seleccione la ciudad o poblado
                                </option>
                                {countries.cities.map((value, index) => (
                                    <option key={index} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                        <Button color="primary">
                            <Icon name="save" />&nbsp;
                            Guardar
                        </Button>
                    </Form>
                </div>}

                <Foto isOpen={this.state.isOpen} toggle={this.toggle} />
            </div>
        );
    }
}

export default connect(mapProps, {
    ...actionsCreators0,
    ...actionsCreators1,
    updateProfile: actionsCreators2.update,
    setProfile: actionsCreators2.setProfile,
})(withRouter(User));