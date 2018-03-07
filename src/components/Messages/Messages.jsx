/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionsCreators } from '../../actions/messages';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const mapProps = (state) => ({
    state: {...state.messages}
});

class Messages extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message: props.state.alert || props.state.info
        };
    }

    componentWillReceiveProps(props) {
        const { alert, info } = props.state;
        this.setState({
            message: alert || info
        });
    }

    close = () => {
        this.props.close();
    }

    title = () => {
        if (this.props.state.alert !== "") return "Error";
        if (this.props.state.info !== "") return "Información";
    }

    render() {
        return (
            <Modal isOpen={this.state.message!==""} toggle={this.close} className={this.props.className}>
                <ModalHeader toggle={this.close}>{this.title()}</ModalHeader>
                <ModalBody>
                    {this.state.message}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.close}>OK</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default connect(mapProps, actionsCreators)(Messages);
