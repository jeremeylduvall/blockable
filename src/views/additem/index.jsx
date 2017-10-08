import React from 'react';
import Button from '../../components/button';
import Placeholder from '../../components/placeholder';
import { connect } from 'react-redux';
import { textVisibility, addEvent } from '../../actions';
import TextBox from '../../components/textbox';
import TimeSelect from '../../components/timeselect';
import moment from 'moment';

class AddItemView extends React.Component {
	renderButtonGroup = () => {
		const result = [];
		const { times, onButtonClick } = this.props;

		times.forEach( function( time, index ) {
			result.push(
				<Button value={ time + ' minutes' } key={ index } onClick={ onButtonClick.bind( this, time ) } />
			);
		} );

		return result;
	}

	renderTextBox = () => {
		const { textVisibility, onButtonClick } = this.props;

		if ( textVisibility === false ) {
			return (
				<Placeholder />
			);
		}

		return (
			<div>
				<div>Start a { this.props.currentSegmentLength }-minute long calendar block</div>
				<TextBox />
				<div>
					<Button value='Cancel' onClick={ onButtonClick.bind( this, null ) } />
					<Button value='Confirm' onClick={ this.onSubmitEvent } />
				</div>
			</div>

		);
	}

	renderTimeSelect = () => {
		return (
			<div>Start a new block at <TimeSelect /></div>
		);
	}

	onSubmitEvent = () => {
		const { currentSegmentLength, onButtonClick, onAddEvent } = this.props;
		const startTime = document.getElementsByName( 'time' )[0].value;

		// Build the event details
		const eventTitle = currentSegmentLength + ' work block';
		const eventStartTime = moment( startTime, 'h:mma' ).toDate();
		const eventEndTime = moment( startTime, 'h:mma' ).add( currentSegmentLength, 'm' ).toDate()
		const eventDescription = document.getElementsByName( 'eventtext' )[0].value;

		const eventDetails = [ eventTitle, eventStartTime, eventEndTime, eventDescription ];

		onAddEvent( eventDetails );
		this.clearTextBox();
		onButtonClick( null )
	}

	clearTextBox = () => {
		document.getElementsByName( 'eventtext' )[0].value = '';
	}

	render() {
		return( 
			<div className='view'>
				{ this.renderButtonGroup() }
				{ this.renderTimeSelect() }
				{ this.renderTextBox() }
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    times: state.times,
    textVisibility: state.textVisibility.visibility,
    currentSegmentLength: state.textVisibility.time,
  }
}

const mapDispatchToProps = dispatch => {
	return {
		onButtonClick: ( time ) => {
			dispatch( textVisibility( time ) );
		},
		onAddEvent: ( [ title, description, startTime, endTime ] ) => {
			dispatch( addEvent( title, description, startTime, endTime ) );
		}
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)( AddItemView );