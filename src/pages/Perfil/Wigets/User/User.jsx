
import React, { PureComponent } from 'react';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import { withRouter, Link } from 'react-router-dom';
import Foto from './Foto';
import { api } from '../../../../config';
import { actionsCreators as actionsCreators1 } from '../../../../actions/countries';
import { actionsCreators as actionsCreators2 } from '../../../../actions/messages';

const mapProps = (state) => ({
    token: state.auth.session.token,
    profile: {
        usuario: state.profile.usuario,
        isMe: state.profile.isMe
    },
    imagen: state.galerias.imagen,
    countries: {...state.countries}
});

class User extends PureComponent {
    state = {
        isOpen: false
    }
    componentDidMount() {
        this.props.read();
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
    render() {
        const { token, imagen, countries } = this.props;
        const { usuario, isMe } = this.props.profile;
        const imageSrc = `${api}/galery/fotoPerfil/${usuario}?uid=${imagen}&token=${token}`;
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
                            <li className="" data-qtsb-engagement="truei" data-qtsb-label="payment-unverified" data-toggle="tooltip" data-tooltip-size="large" data-tooltip-state="disabled" data-placement="top" data-original-title="No es Pago Verificado">
                                <Link to={`/mensajes/${usuario}`} style={{ color: '#d4ac0d' }} className="Icon">
                                    <Icon name="envelope" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <img alt="" height={24} src="/icons/206589-international-flags/svg/177-colombia.svg" />
                    &nbsp;
                    Barranquilla, Colombia<br />
                    Miembro desde 29 de agosto de 2014<br />
                    0 Recomendaciones
                </div>:
                <div>
                    <hr />
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label>Pais de residencia</Label>
                            <Input
                                type="select" min={5}
                                name="precio_hora" readOnly={!isMe}
                                value={this.state.precio_hora}
                                onChange={this.handleChange}
                                style={{ width: '100%' }}>
                                {countries.data.map((value, index) => (
                                    <option key={index}>{value}</option>
                                ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Ciudad de residencia</Label>
                            <Input
                                type="number" min={5}
                                name="precio_hora" readOnly={!isMe}
                                value={this.state.precio_hora}
                                onChange={this.handleChange}
                                style={{ width: '100%' }} />
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
    ...actionsCreators1,
    ...actionsCreators2
})(withRouter(User));