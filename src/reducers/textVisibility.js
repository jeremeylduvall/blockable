const textVisibility = ( state = { visibility: false, time: null }, action ) => {
	switch ( action.type ) {
		case 'TOGGLE_TEXT_FIELD':
			return {
				...state,
				visibility: action.time ? true : ! state.visibility,
				time: action.time
			}

		default:
			return state
	}
}

export default textVisibility;