import React, { Component } from 'react';
import './App.css';
import './reset.css';
import Frame from './components/Frame';

export default class App extends Component {
	render() {
		return (
			<div className='app'>
				<Frame />
			</div>
		)
	}
}
