/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionsCreators } from '../../actions/messages';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Icon } from 'react-fa';
import Logo from '../Logo';

const mapProps = (state) => ({
    state: { ...state.messages }
});

class Messages extends PureComponent {
    static defaultProps = {
    }

    constructor(props) {
        super(props);
        const { alert, info, confirm } = this.props.state;
        this.state = {
            message: alert || info || confirm
        };
    }

    componentWillReceiveProps(props) {
        const { alert, info, confirm } = props.state;
        this.setState({
            message: alert || info || confirm
        });
    }

    close = () => {
        this.props.close();
    }

    title = () => {
        const { alert, info, confirm } = this.props.state;
        if (confirm !== "") return "Confirmar";
        if (alert !== "") return "Error";
        if (info !== "") return "Información";
    }

    confirm = () => {
        this.props.state.callback();
        this.close();
    }

    render() {
        const { confirm } = this.props.state;
        return (
            <Modal isOpen={this.state.message !== ""} toggle={this.close} className={this.props.className}>
                <ModalHeader toggle={this.close}>
                    <Logo />&nbsp;
                    {this.title()}
                </ModalHeader>
                <ModalBody>
                    {this.state.message}
                </ModalBody>
                <ModalFooter>
                    {!confirm ?
                        <Button color="primary" onClick={this.close}>
                            <Icon name="check " />&nbsp;
                            OK
                    </Button> :
                        [<Button key={0} color="primary" onClick={this.confirm}>
                            <Icon name="check " />&nbsp;
                            Si
                        </Button>,
                        <Button key={1} color="secondary" onClick={this.close}>
                            <Icon name="close " />&nbsp;
                            No
                        </Button>]}
                </ModalFooter>
            </Modal>
        );
    }
}

export default connect(mapProps, actionsCreators)(Messages);
