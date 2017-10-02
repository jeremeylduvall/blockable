import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { connect } from 'react-redux'

BigCalendar.momentLocalizer( moment );

const date = new Date();

class Calendar extends React.Component {
	render() {
		return( 
			<BigCalendar
				defaultDate={ date }
				events={ [ this.props.events ] }
				defaultView='day'
				toolbar={ false }
	      />
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
)(Calendar)