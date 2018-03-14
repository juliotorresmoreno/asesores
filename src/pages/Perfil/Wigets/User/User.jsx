
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import { withRouter } from 'react-router-dom';
import Foto from './Foto';

const mapProps = (state) => ({
    profile: {
        usuario: state.profile.usuario
    }
});

class User extends PureComponent {
    state = {
        isOpen: false
    }
    handleTo = () => (e) => {
        e.preventDefault();
    }
    toggle = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { usuario } = this.props.profile;
        return (
            <div style={{ backgroundColor: "white", padding: 15, border: '1px solid #DDD' }}>
                <div style={{ width: 210 }}>
                    <a href="" onClick={this.toggle}>
                        <img
                            className="img-thumbnail" style={{ width: "100%" }} alt=""
                            src="/icons/148705-essential-collection/png/user-3.png" />
                    </a>
                </div>
                <div style={{ margin: 10 }} />
                <div style={{ textAlign: "center", padding: 10 }}>
                    @{usuario}
                </div>
                <div style={{ padding: 10 }}>
                    <ul className="verified-list">
                        <li className="" data-qtsb-engagement="truei" data-qtsb-label="payment-unverified" data-toggle="tooltip" data-tooltip-size="large" data-tooltip-state="disabled" data-placement="top" data-original-title="No es Pago Verificado">
                            <a href="" style={{ color: '#d4ac0d' }} onClick={this.handleTo("mail")} className="Icon">
                                <Icon name="envelope" />
                            </a>
                        </li>
                        <li className="" data-qtsb-engagement="true" data-qtsb-label="email-verified" data-toggle="tooltip" data-tooltip-size="large" data-tooltip-state="success" data-placement="top" data-original-title="Correo Electrónico Verificado">
                            <a href="" onClick={this.handleTo("mail")} className="Icon">
                                <Icon name="user" />
                            </a>
                        </li>
                        <li className="" data-qtsb-engagement="true" data-qtsb-label="profile-complete" data-toggle="tooltip" data-tooltip-size="large" data-tooltip-state="success" data-placement="top" data-original-title="Completed Profile 100%">
                            <a href="" style={{ color: 'green' }} onClick={this.handleTo("mail")} className="Icon">
                                <Icon name="phone" />
                            </a>
                        </li>
                        <li className="" data-qtsb-engagement="true" data-qtsb-label="phone-verified" data-toggle="tooltip" data-tooltip-size="large" data-tooltip-state="success" data-placement="top" data-original-title="Teléfono verificado">
                            <a href="" style={{ color: '#b03a2e' }} onClick={this.handleTo("mail")} className="Icon">
                                <Icon name="credit-card" />
                            </a>
                        </li>
                    </ul>
                </div>

                <img alt="" height={24} src="/icons/206589-international-flags/svg/177-colombia.svg" />
                &nbsp;
                Barranquilla, Colombia<br />
                Miembro desde 29 de agosto de 2014<br />
                0 Recomendaciones
                <br />
                <br />
                <a href="" style={{ color: "black" }}>
                    <Icon name="eye" />&nbsp;
                    Ver como empleador
                </a>
                <Foto isOpen={this.state.isOpen} toggle={this.toggle} />
            </div>
        );
    }
}

export default connect(mapProps)(withRouter(User));