import React, { Component } from 'react';
import './App.css';
import './reset.css';
// import Frame from './components/Frame';
import Home from './views/Home';

export default class App extends Component {
	render() {
		return (
			<div className='app'>
				<Home />
			</div>
		)
	}
}
