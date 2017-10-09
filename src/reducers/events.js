const events = ( state = [], action ) => {
	switch ( action.type ) {
		case 'ADD_EVENT':
			return [
				...state,
				{
				  title: action.description,
				  start: action.startTime,
				  end: action.endTime,
				  desc: action.description,
				}
			]
		case 'REMOVE_EVENT':
			return state.filter( calendarEvent => calendarEvent !== action.selectedEvent );
			
		default:
			return state
	}
};

export default events;