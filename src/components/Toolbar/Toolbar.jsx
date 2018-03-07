import React from 'react';
import Logged from "./Logged";
import NoLogged from "./NoLogged";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapProps = (state) => ({
    session: state.auth.session
});

class Toolbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        if (this.props.session === null) {
            return <NoLogged {...this.props} />;
        }
        return <Logged {...this.props} />
    }
}

export default withRouter(connect(mapProps)(Toolbar));