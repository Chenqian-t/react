import React, { Component, useState, useEffect } from 'react';
import './App.css';
import './reset.css';
// import Frame from './components/Frame';

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			time: new Date(),
		}
	}

	tick = () => {
		this.setState({
			time: new Date(),
		})
	}

	componentDidMount = () => {
		this.Timer = setInterval(this.tick, 1e3);
	}

	componentWillUnmount = () => {
		clearInterval(this.Timer);
	}

	render() {
		return (
			<div className='app'>
				{/* <Clock time={this.state.time} /> */}
				<Clock />
			</div>
		)
	}
}

// 体验class组件与函数组件在使用hooks后的差异
// 函数组件使用hooks后可以简化很多代码，包括去除了this的使用和重复逻辑的整合
function Clock(props) {
	const [time, setTime] = useState(new Date())

	const tick = () => {
		setTime(new Date())
	}

	useEffect(() => {
		let Timer = setInterval(tick, 1e3)
		return () => {
			clearInterval(Timer)
		}
	}, [time])

	return (
		<div>
			{time.toLocaleTimeString()}
		</div>
	)
}
