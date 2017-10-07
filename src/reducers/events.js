const events = ( state = [], action ) => {
	switch ( action.type ) {
		case 'ADD_EVENT':
			return [
				...state,
				{
				  title: action.title,
				  start: action.startTime,
				  end: action.endTime,
				  desc: action.description,
				}
			]
		default:
			return state
	}
};

export default events;