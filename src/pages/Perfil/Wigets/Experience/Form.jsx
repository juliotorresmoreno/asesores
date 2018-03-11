
import React, { PureComponent } from 'react';
import {
    Col, Form, FormGroup,
    Input, Label, Button,
    Modal, ModalHeader,
    ModalBody, ModalFooter
} from 'reactstrap';
import { Icon } from 'react-fa';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/experience';
import { actionsCreators as actionsCreators2 } from '../../../../actions/messages';
import Months from '../../../../components/Months';
import Years from '../../../../components/Years';
import * as moment from 'moment';
import Logo from "../../../../components/Logo";

const year = moment().year();
//const month = moment().month();

const mapProps = (state) => ({

});

const defaultState = {
    id: 0,
    cargo: '',
    empresa: '',
    ano_inicio: `${year}`,
    mes_inicio: '1',
    continuo_trabajando: false,
    ano_fin: `${year}`,
    mes_fin: '1'
};

class FormExperience extends PureComponent {
    static defaultProps = {
        isOpen: false,
        toggle: () => { },
        className: ''
    }
    state = { ...defaultState }
    componentWillReceiveProps(props) {
        this.setState({
            ...defaultState,
            ...props.data
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            cargo: this.state.cargo,
            empresa: this.state.empresa,
            ano_inicio: this.state.ano_inicio,
            mes_inicio: this.state.mes_inicio,
            continuo_trabajando: this.state.continuo_trabajando,
            ano_fin: this.state.ano_fin,
            mes_fin: this.state.mes_fin
        };
        if (this.state.id) {
            data.id = `${this.state.id}`;
            this.props.update(data)
                .then(() => {
                    this.props.info("Actualizado correctamente.");
                    this.props.toggle();
                })
                .catch((err) => {
                    this.props.alert(err.message);
                });
        } else {
            this.props.create(data)
                .then(() => {
                    this.props.info("Creado correctamente.");
                    this.props.toggle();
                })
                .catch((err) => {
                    this.props.alert(err.message);
                });
        }
    }
    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }
    handleCheck = ({ target: { name, checked } }) => {
        this.setState({ [name]: checked });
    }
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={this.props.toggle}
                className={this.props.className}>
                <Form onSubmit={this.handleSubmit}>
                    <ModalHeader toggle={this.props.toggle}>
                        <Logo />&nbsp;
                        Experiencia
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label>Cargo</Label>
                            <Input
                                name="cargo" type="text"
                                value={this.state.cargo}
                                onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Empresa</Label>
                            <Input
                                name="empresa" type="text"
                                value={this.state.empresa}
                                onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={6}>
                                <Label>Año de inicio</Label>
                                <Years
                                    name="ano_inicio" min={year - 30} max={year + 1}
                                    value={this.state.ano_inicio}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col sm={6}>
                                <Label>Mes de inicio</Label>
                                <Months
                                    name="mes_inicio"
                                    value={this.state.mes_inicio}
                                    onChange={this.handleChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={5}>Continuo trabajando</Label>
                            <Col sm={7}>
                                <Input
                                    name="continuo_trabajando" type="checkbox"
                                    value={this.state.continuo_trabajando}
                                    onChange={this.handleCheck}
                                    style={{ margin: '11px 0 0' }} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={6}>
                                <Label>Año de finalización</Label>
                                <Years
                                    disabled={this.state.continuo_trabajando}
                                    name="ano_fin" min={year - 30} max={year + 1}
                                    value={this.state.ano_fin}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col sm={6}>
                                <Label>Mes de finalización</Label>
                                <Months
                                    disabled={this.state.continuo_trabajando}
                                    name="mes_fin"
                                    value={this.state.mes_fin}
                                    onChange={this.handleChange} />
                            </Col>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            style={{ width: 120 }}
                            color="primary">
                            <Icon name="save" />&nbsp;
                            Guardar
                        </Button>{' '}
                        <Button
                            style={{ width: 120 }}
                            color="secondary"
                            onClick={this.props.toggle}>
                            <Icon name="close" />&nbsp;
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Form>
            </Modal>
        );
    }
}

export default connect(mapProps, {
    ...actionsCreators1,
    ...actionsCreators2
})(FormExperience);