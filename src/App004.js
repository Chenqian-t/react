import React, { Component } from 'react';
import './App.css';
import './reset.css';
// import Frame from './components/Frame';

// 表单
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			wenzhang: '',
			select: 'coconut',
		};
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		});
	}

	handleSelect = (e) => {
		this.setState({
			select: e.target.value
		});
	}

	handleWenzhang = (e) => {
		this.setState({
			wenzhang: e.target.value
		})
	}

	handleSubmit = (event) => {
		alert('提交的名字: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="name">名字:</label>
				<input type="text" name="name" id="name" value={this.state.value} onChange={this.handleChange} />
				<label htmlFor="wenzhang">文章:</label>
				<textarea id="wenzhang" value={this.state.wenzhang} onChange={this.handleWenzhang} />
				<label htmlFor="seleeect">选择你喜欢的风味：</label>
				<select id="seleeect" value={this.state.select} onChange={this.handleSelect}>
					<option value="grapefruit">葡萄柚</option>
					<option value="lime">酸橙</option>
					<option value="coconut">椰子</option>
					<option value="mango">芒果</option>
				</select>
				<input type="submit" value="提交" />
			</form>
		);
	}
}

