
import React, { PureComponent } from 'react';
import {
    Button, Modal, ModalHeader,
    ModalBody, ModalFooter
} from 'reactstrap';
import Form from './Form';
import Table from './Table';

class Educacion extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleTo = () => (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div style={{ backgroundColor: "white", padding: 15, border: '1px solid #DDD', marginBottom: 10 }}>
                <h4>Educación</h4>
                <div style={{ minHeight: 150 }}>
                    <Table />
                </div>
                <div>
                    <Button color="primary" onClick={this.toggle}>Agregar</Button>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Añadir educación</ModalHeader>
                    <ModalBody>
                        <Form />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            style={{ width: 100 }}
                            color="primary"
                            onClick={this.toggle}>
                            Guardar
                        </Button>{' '}
                        <Button
                            style={{ width: 100 }}
                            color="secondary"
                            onClick={this.toggle}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Educacion;