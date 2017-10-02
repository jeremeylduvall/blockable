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
			return [
				...state,
				{
				  title: action.title,
				  start: action.start,
				  end: action.end,
				  desc: action.desc,
				}
			]
		default:
			return state
	}
};

export default events;