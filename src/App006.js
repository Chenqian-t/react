import React, { Component } from 'react';
import './App.css';
import './reset.css';


export default class App extends Component {
	render() {
		return (
			<FancyBorder color="blue">
				<h1 className="Dialog-title">Welcome</h1>
				<p className="Dialog-message">Thank you for visiting our spacecraft!</p>
			</FancyBorder>
		);
	}
}

function FancyBorder(props) {
	return (
		<div className={'FancyBorder FancyBorder-' + props.color}>
			{props.children}
		</div>
	);
}