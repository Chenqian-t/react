import React from 'react';
import { Switch } from 'react-router-dom';
import './App.less';
import './reset.css';
import Auth from './utils/Auth';
import { routerConfig } from './router.config';

const App = () => (
	<Switch>
		<Auth config={routerConfig} />
	</Switch>
)

export default App