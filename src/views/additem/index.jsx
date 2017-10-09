import React from 'react';
import Button from '../../components/button';
import Placeholder from '../../components/placeholder';
import { connect } from 'react-redux';
import { textVisibility, addEvent, eventSelected } from '../../actions';
import TextBox from '../../components/textbox';
import TimeSelect from '../../components/timeselect';
import moment from 'moment';

class AddItemView extends React.Component {
	componentDidUpdate() {
		// Set the value of the text field to the selected event if it exists
		// It's necessary to do this in a lifecycle method because we have to make sure the text box has rendered.
		if ( this.props.selectedEvent.selected && this.props.selectedEvent.event ) {
			document.getElementsByName( 'eventtext' )[0].value = this.props.selectedEvent.event.desc;	
		}
	}
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
					<Button 
						value={
							this.props.selectedEvent.event && this.props.selectedEvent.selected ?
							'Delete' :
							'Cancel'
						}
						onClick={ onButtonClick.bind( this, null ) }
					/>
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

		// Add the event to the store
		onAddEvent( eventDetails );
		this.clearTextBox();
		onButtonClick( null );
	}

	clearTextBox = () => {
		// Clear the text box
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
    selectedEvent: state.selectedEvent
  }
}

const mapDispatchToProps = dispatch => {
	return {
		onButtonClick: ( time ) => {
			dispatch( textVisibility( time ) );
			dispatch( eventSelected() );
		},
		onAddEvent: ( [ title, description, startTime, endTime ] ) => {
			dispatch( addEvent( title, description, startTime, endTime ) );
			dispatch( eventSelected() );
		},
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)( AddItemView );