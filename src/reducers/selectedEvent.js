const selectedEvent = ( state = { selected: false, event: null }, action ) => {
	switch ( action.type ) {
		case 'EVENT_SELECTED':
			return {
				...state,
				selected: action.event ? true : false,
				event: action.event
			}

		default:
			return state
	}
}

export default selectedEvent;
