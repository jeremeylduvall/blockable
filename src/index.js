import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import blockableApp from './reducers/';

const startDate = new Date( 2017, 9, 2, 17, 0, 0, 0 );
const endDate = new Date( 2017, 9, 2, 17, 30, 0, 0 );

const defaultState = {
	events: {
	    'title': 'Happy Hour',
	    'start': startDate,
	    'end': endDate,
	    'desc': 'Most important meal of the day'
    },
    times: [ 30, 60, 90 ]
};

let store = createStore( blockableApp, defaultState )

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById( 'root' )
);
registerServiceWorker();
