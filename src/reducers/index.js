import { combineReducers } from 'redux'
import events from './events'
import textVisibility from './textVisibility'
import times from './times'
import selectedEvent from './selectedEvent'

const blockableApp = combineReducers( {
	events,
	selectedEvent,
	textVisibility,
	times
} );

export default blockableApp;
