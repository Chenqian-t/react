import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './reset.css';
import Login from './views/Login';
import Home from './views/Home';
import NotFound from './views/NotFound';

const App = () => (
	<Switch>
		<Route exact path="/login">
			<Login />
		</Route>
		<Route exact path="/home">
			<Home />
		</Route>
		<Route path="*">
			<NotFound />
		</Route>
	</Switch>
)

export default App