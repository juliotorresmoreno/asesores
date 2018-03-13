
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import Perfil from '../../pages/Perfil';
import Messages from '../../pages/Messages';
import Authorization from '../Authorization';

const Navigation = () => {
	return (
		<Authorization>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/user/:username" exact component={Perfil} />
				<Route path="/perfil" exact component={Perfil} />
				<Route path="/mensajes" exact component={Messages} />
				<Route path="/mensajes/:username" exact component={Messages} />
			</Switch>
		</Authorization>
	);
}

export default withRouter(Navigation);