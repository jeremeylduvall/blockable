import { combineReducers } from 'redux'
import events from './events'
import textVisibility from './textVisibility'
import times from './times'

const blockableApp = combineReducers( {
	events,
	textVisibility,
	times
} );

export default blockableApp;