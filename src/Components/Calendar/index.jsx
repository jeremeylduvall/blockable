import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

const events = [
	{
		'title': 'Happy Hour',
		'start': new Date(2017, 8, 28, 17, 0, 0, 0),
		'end': new Date(2017, 8, 28, 17, 30, 0, 0),
		desc: 'Most important meal of the day'
	},
]

const date = new Date(); 

class Calendar extends React.Component {
	render() {
		return( 
			<BigCalendar
				defaultDate={ date }
				events={ events }
				defaultView='day'
				toolbar={ false }
	      />
		)
	}
}

export default Calendar;