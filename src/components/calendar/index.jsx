/* External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

/* Internal Dependencies */
import config from '../../default.json';

BigCalendar.momentLocalizer( moment );

const date = new Date();

const addEventClass = ( event ) => {
	const eventDuration = moment( event.end ).diff( event.start, 'minutes' );
	const eventClass='blockable-app_' + eventDuration + '-minute-block';

	return {
		className: eventClass
	};
}

const eventStyle = ( event ) => {
	return (
		<span>
			<strong>
				{ event.title }
			</strong>
			<div>
				{ event.event.desc }
			</div>
		</span>
	);
}

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
			eventPropGetter={ addEventClass }
			components={ {
				event: eventStyle,
			} }
      />
	);
};

Calendar.propTypes = {
  events: PropTypes.array,
  onEventClick: PropTypes.func,
};

export default Calendar;
