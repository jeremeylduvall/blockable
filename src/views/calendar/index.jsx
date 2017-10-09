import React from 'react';
import Calendar from '../../components/calendar';
import { connect } from 'react-redux'
import { removeEvent, textVisibility, eventSelected } from '../../actions';
import moment from 'moment';

class CalendarView extends React.Component {
	onEventClick = ( event ) => {
		// Get the time value of the segment
		const time = ( moment( event.end ).diff( moment( event.start ) ) )/60000;

		// Remove selected event from the calendar and set time
		this.props.onEventClick( event, time  );
	}

	render() {
		return(
			<div className='calendar'>
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
			dispatch( eventSelected() );
			dispatch( removeEvent( event ) );
			dispatch( textVisibility( time ) );
		},
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)( CalendarView );