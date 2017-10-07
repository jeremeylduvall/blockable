import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer( moment );

const date = new Date();

class Calendar extends React.Component {
	render() {
		return( 
			<BigCalendar
				defaultDate={ date }
				events={ this.props.events }
				defaultView='day'
				toolbar={ false }
	      />
		)
	}
}

export default Calendar;