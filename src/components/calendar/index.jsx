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
				min={ moment('6:00am', 'h:mma').toDate() }
				max={ moment('6:00pm', 'h:mma').toDate() }
	      />
		)
	}
}

export default Calendar;