const startDate = new Date( 2017, 9, 2, 17, 0, 0, 0 );
const endDate = new Date( 2017, 9, 2, 17, 30, 0, 0 );

const defaultEvent =  {
	'title': 'Happy Hour',
	'start': startDate,
	'end': endDate,
	'desc': 'Most important meal of the day'
};

const events = ( state = defaultEvent, action ) => {
	switch ( action.type ) {
		case 'ADD_EVENT':
			console.log( 'action' );
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