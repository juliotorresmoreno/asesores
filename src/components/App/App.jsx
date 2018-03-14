
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionsCreators as actionsCreators0 } from '../../actions/messages';
import { actionsCreators as actionsCreators1 } from '../../actions/auth';
import { actionsCreators as actionsCreators2 } from '../../actions/chats';
import Toolbar from '../Toolbar';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Messages from '../Messages';
import Navigation from '../Navigation';
import Recovery from '../../pages/Recovery';
import Layout from '../Layout';

const mapProps = (state) => ({

});

class App extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	componentDidMount() {
		this.props.session()
			.then(() => this.props.connect());
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
				<Toolbar />
				<Layout>
					<br />
					<Switch>
						<Route path="/login" exact component={Login} />
						<Route path="/register" exact component={Register} />
						<Route path="/recovery-password" exact component={Recovery} />
						<Route path="/" component={Navigation} />
					</Switch>
				</Layout>
				<Messages />
			</div>
		);
	}
}

export default withRouter(connect(mapProps, {
	...actionsCreators0,
	...actionsCreators1,
	...actionsCreators2
})(App));