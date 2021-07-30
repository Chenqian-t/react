import React, { Component } from 'react';
import './App.css';
import './reset.css';
// import Frame from './components/Frame';

// 条件渲染、列表
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lis: [1, 2, 3, 4],
		};
	}

	render() {
		return (
			<ul>
				{this.state.lis.map(i => <li key={i}>{i > 2 ? i : '太小了'}</li>)}
			</ul>
		);
	}
}

