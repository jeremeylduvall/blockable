/* External Dependencies */
import React from 'react';
import { connect } from 'react-redux'
import moment from 'moment';
import PropTypes from 'prop-types';

/* Internal Dependencies */
import Calendar from '../../components/calendar';
import { removeEvent, textVisibility, eventSelected } from '../../actions';

class CalendarView extends React.Component {
	onEventClick = ( event ) => {
		// Get the time value of the segment
		const time = ( moment( event.end ).diff( moment( event.start ) ) )/60000;

		// Remove selected event from the calendar and set time
		this.props.onEventClick( event, time  );
	}

	render() {
		return(
			<div className='blockable-app_calendar-side'>
				<Calendar
					events={ this.props.events }
					onEventClick={ this.onEventClick }
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

const mapDispatchToProps = dispatch => {
	return {
		onEventClick: ( event, time ) => {
			dispatch( eventSelected( event ) );
			dispatch( removeEvent( event ) );
			dispatch( textVisibility( time ) );
		},
	}
}

CalendarView.propTypes = {
  events: PropTypes.array,
  onEventClick: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)( CalendarView );
