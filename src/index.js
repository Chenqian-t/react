import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App012';
import { BrowserRouter } from "react-router-dom";
import Scroll from './components/Scroll';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './store/reducers'
let store = createStore(todoApp);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Scroll />
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
