
import React, { PureComponent } from 'react';
import {
    Col, Form, FormGroup,
    Input, Label, Button,
    Modal, ModalHeader,
    ModalBody, ModalFooter
} from 'reactstrap';
import { Icon } from 'react-fa';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/educacion';
import { actionsCreators as actionsCreators2 } from '../../../../actions/messages';
import Logo from "../../../../components/Logo";
import Years from '../../../../components/Years';
import * as moment from 'moment';

const year = moment().year();

const mapProps = (state) => ({

});

const defaultState = {
    id: 0,
    pais: '',
    titulo: '',
    grado: 'bachillerato',
    ano_inicio: `${year}`,
    ano_fin: `${year}`
};

class FormEducacion extends PureComponent {
    static defaultProps = {
        isOpen: true,
        toggle: () => { },
        className: ''
    }
    state = { ...defaultState }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            pais: this.state.pais,
            titulo: this.state.titulo,
            grado: this.state.grado,
            ano_inicio: this.state.ano_inicio,
            ano_fin: this.state.ano_fin
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
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={this.props.toggle}
                className={this.props.className}>
                <Form onSubmit={this.handleSubmit}>
                    <ModalHeader toggle={this.props.toggle}>
                        <Logo />&nbsp;
                        Educación
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label>País</Label>
                            <Input
                                name="pais" type="text"
                                value={this.state.pais}
                                onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Título</Label>
                            <Input
                                name="titulo" type="text"
                                value={this.state.titulo}
                                onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Grado</Label>
                            <Input
                                name="grado" type="select"
                                value={this.state.grado}
                                onChange={this.handleChange}>
                                <option value="bachillerato">Bachillerato</option>
                                <option value="tecnico">Técnico</option>
                                <option value="licenciatura">Licenciatura</option>
                                <option value="profesional">Profesional</option>
                                <option value="especialidad">Especialidad</option>
                                <option value="maestria">Maestría</option>
                                <option value="doctorado">Doctorado</option>
                            </Input>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={6}>
                                <Label >Año de inicio</Label>
                                <Years
                                    name="ano_inicio"
                                    value={this.state.ano_inicio}
                                    onChange={this.handleChange}
                                    min={year - 30}
                                    max={year + 10} />
                            </Col>
                            <Col sm={6}>
                                <Label>Año de finalización</Label>
                                <Years
                                    name="ano_fin"
                                    value={this.state.ano_fin}
                                    onChange={this.handleChange}
                                    min={year - 30}
                                    max={year + 10} />
                            </Col>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary">
                            <Icon name="save" />&nbsp;
                            Guardar
                        </Button>{' '}
                        <Button
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
})(FormEducacion);