
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionsCreators as actionsCreators0 } from '../../actions/auth';
import { actionsCreators as actionsCreators1 } from '../../actions/messages';
import Toolbar from '../Toolbar';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Perfil from '../../pages/Perfil';
import Register from '../../pages/Register';
import Messages from '../../pages/Messages';
import MessagesUtil from '../Messages';
import Authorization from '../Authorization';


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
		this.props.session();
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Toolbar />
				<br />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
					<Route path="/" component={() => (
						<Authorization>
							<Switch>
								<Route path="/user/:id" exact component={Perfil} />
								<Route path="/perfil" exact component={Perfil} />
								<Route path="/mensajes" exact component={Messages} />
							</Switch>
						</Authorization>
					)} />
				</Switch>
				<br />
				<MessagesUtil />
			</div>
		);
	}
}

export default withRouter(connect(mapProps, {
	...actionsCreators0,
	...actionsCreators1
})(App));