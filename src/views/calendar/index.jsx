import React from 'react';
import Calendar from '../../components/calendar';
import { connect } from 'react-redux'

class CalendarView extends React.Component {
	render() {
		console.log( this.props.events );
		return(
			<div className='calendar'>
				<Calendar events={ this.props.events } />
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

export default connect(
  mapStateToProps,
  null,
)( CalendarView );