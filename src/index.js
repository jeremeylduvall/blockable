import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import blockableApp from './reducers/index.js';

let store = createStore( blockableApp );

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById( 'root' )
);
registerServiceWorker();
