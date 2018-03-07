import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Toolbar from '../Toolbar';
import Footer from '../Footer';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

export default class App extends React.Component {
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
		return (
			<div>
				<Toolbar />
				<br />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
				</Switch>
				<br />
			</div>
		);
	}
}
