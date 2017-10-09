const textVisibility = ( state = { visibility: false, time: null, eventSelected: false }, action ) => {
	switch ( action.type ) {
		case 'TOGGLE_TEXT_FIELD':
			return {
				...state,
				visibility: ( state.eventSelected && ! state.visibility ) ? true : ! state.visibility,
				time: action.time
			}

		case 'EVENT_SELECTED':
			return {
				...state,
				eventSelected: ! state.eventSelected
			}

		default:
			return state
	}
}

export default textVisibility;