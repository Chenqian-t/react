import React, { Component } from 'react';
import './App.css';
import './reset.css';
// import Frame from './components/Frame';

// 事件处理，关注this指向问题
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };
	}

	handleClick() {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick.bind(this)}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		);
	}
}

