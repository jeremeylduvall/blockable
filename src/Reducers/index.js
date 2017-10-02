import { combineReducers } from 'redux'
import events from './events'
import textVisiblity from './textVisibility'
import times from './times'

const blockableApp = combineReducers( {
	events,
	textVisiblity,
	times
} );

export default blockableApp;