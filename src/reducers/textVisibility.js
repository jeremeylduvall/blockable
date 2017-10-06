const textVisibility = ( state = false, action ) => {
	switch ( action.type ) {
		case 'TOGGLE_TEXT_FIELD':
			return ! state;
		default:
			return state
	}
}

export default textVisibility;