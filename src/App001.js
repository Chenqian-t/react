import React from 'react';
import './App.css';
import './reset.css';
import { useSelector, useDispatch } from 'react-redux';
import { add, jian } from './actions';


const App = (props) => {
	const { count } = useSelector(state => ({ ...state.count }));
	const dispatch = useDispatch();
	const decrement = () => {
		dispatch(jian());
	}
	const increment = () => {
		dispatch(add());
	}

	return (
		<div className='app'>
			<button onClick={decrement}>-</button>
			{count}
			<button onClick={increment}>+</button>
		</div>
	)
}

export default App