import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import config from '../../default.json';

BigCalendar.momentLocalizer( moment );

const date = new Date();

const Calendar = ( { events, onEventClick } ) => {
	return (
		<BigCalendar
			defaultDate={ date }
			events={ events }
			defaultView='day'
			toolbar={ false }
			min={ moment( config.day.start, 'h:mma' ).toDate() }
			max={ moment( config.day.end, 'h:mma' ).toDate() }
			onSelectEvent={ onEventClick }
      />
	);
};

export default Calendar;
