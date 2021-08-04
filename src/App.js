import React, { Component } from 'react';
import './App.css';
import './reset.css';
import { connect } from 'react-redux';
import { add, jian } from './actions';

const mapStateToProps = state => {
	return {
		count: state.count.count,
	}
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		add: () => {
// 			dispatch(add())
// 		},
// 		jian: () => {
// 			dispatch(jian())
// 		}
// 	}
// }

class App extends Component {
	increment = () => {
		this.props.add();
	}
	decrement = () => {
		this.props.jian();
	}
	render() {
		return (
			<div className='app'>
				<button onClick={this.decrement}>-</button>
				{this.props.count}
				<button onClick={this.increment}>+</button>
			</div>
		)
	}
}

export default connect(mapStateToProps, { add, jian })(App)