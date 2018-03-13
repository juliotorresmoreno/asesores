/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Logo from '../../../../components/Logo';
import SearchBar from '../../../../components/SearchBar';
import { api } from '../../../../config';
import { withRouter } from 'react-router-dom';

const url = `${api}/users?q=`;

class Nuevo extends React.Component {
    static defaultProps = {
        isOpen: false,
        toggle: () => { }
    }
    state = {
        select: null
    }
    renderElement = ({ element }) => (
        <div>
            {this.displayValue(element)}
        </div>
    );
    displayValue = ({ nombres, apellidos }) => (
        `${nombres} ${apellidos}`
    );
    displayIcon = ({ nombres, apellidos }) => (
        `/icons/148705-essential-collection/png/user-3.png`
    );
    handleSelect = (value) => {
        this.props.history.push(`/mensajes/${value.usuario}`);
        this.props.toggle();
    }
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>
                    <Logo />&nbsp;
                    Buscar usuarios
                </ModalHeader>
                <ModalBody style={{ height: 100 }}>
                    <SearchBar
                        url={url}
                        render={this.renderElement}
                        displayValue={this.displayValue}
                        displayIcon={this.displayIcon}
                        onSelect={this.handleSelect} />
                </ModalBody>
            </Modal>
        );
    }
}

export default withRouter(Nuevo);
