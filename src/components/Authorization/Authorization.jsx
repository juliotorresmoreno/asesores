import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapProps = (state) => ({
    auth: {
        session: state.auth.session
    }
});

class Authorization extends React.Component {
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
    redirect = (url) => () => this.props.history.push(url);
    render() {
        const auth = this.props.auth;
        if (this.props.location.pathname !== "/login")
            if (auth.session === null)
                return <Redirect to="/login" />;
        return this.props.children;
    }
}

export default withRouter(connect(mapProps)(Authorization));