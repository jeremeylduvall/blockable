/* External Dependencies */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

/* Internal Dependencies */
import Button from '../../components/button';
import Placeholder from '../../components/placeholder';
import { textVisibility, addEvent, eventSelected } from '../../actions';
import TextBox from '../../components/textbox';
import TimeSelect from '../../components/timeselect';

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
		const { times } = this.props;

		times.forEach( function( time, index ) {
			const classes = ['blockable-app_time-selector-button', 'length' + time];
			result.push(
				<Button value={ time + ' minutes' } key={ index } className={ classes.join( ' ' )  } onClick={ this.onButtonClick.bind( this, time ) } />
			);
		}, this );

		return result;
	}

	onButtonClick = ( time ) => {
		const { selectedEvent } = this.props;
		const selectedEventDuration = selectedEvent && selectedEvent.event ?
			( moment( selectedEvent.event.end ).diff( moment( selectedEvent.event.start ) ) )/60000 :
			null;

		if ( selectedEvent && selectedEvent.selected && selectedEventDuration === time ) {
			this.props.updateTextVisibility( time );	
			return;
		}

		this.props.updateTextVisibility( time );
		this.props.eventSelected();
	}

	renderTextBox = () => {
		const { textVisibility } = this.props;

		if ( textVisibility === false ) {
			return (
				<Placeholder />
			);
		}

		return (
			<div className='blockable-app_add-item-view'>
				<div className='blockable-app_segment-length-details'>Start a { this.props.currentSegmentLength }-minute long calendar block</div>
				<TextBox />
				<div className='blockable-app_event-controls'>
					<Button 
						value={
							this.props.selectedEvent.event && this.props.selectedEvent.selected ?
							'Delete' :
							'Cancel'
						}
						className='blockable-app_event-controls-cancel-button'
						onClick={ this.onButtonClick.bind( this, null ) }
					/>
					<Button value='Confirm' onClick={ this.onSubmitEvent } className='blockable-app_event-controls-confirm-button' />
				</div>
			</div>

		);
	}

	renderTimeSelect = () => {
		return (
			<div className='blockable-app_segment-start-selector'>Start a new block at <TimeSelect /></div>
		);
	}

	onSubmitEvent = () => {
		const { currentSegmentLength, updateTextVisibility, eventSelected, onAddEvent } = this.props;
		const startTime = document.getElementsByName( 'time' )[0].value;

		// Build the event details
		const eventTitle = currentSegmentLength + ' work block';
		const eventStartTime = moment( startTime, 'h:mma' ).toDate();
		const eventEndTime = moment( startTime, 'h:mma' ).add( currentSegmentLength, 'm' ).toDate()
		const eventDescription = document.getElementsByName( 'eventtext' )[0].value;
		const eventDetails = [ eventTitle, eventStartTime, eventEndTime, eventDescription ];

		// Add the event to the store
		onAddEvent( eventDetails );
		updateTextVisibility( null );
		eventSelected();
		this.clearTextBox();
	}

	clearTextBox = () => {
		// Clear the text box
		document.getElementsByName( 'eventtext' )[0].value = '';
	}

	render() {
		return( 
			<div className='blockable-app_view-side'>
				<span>
					{ this.renderButtonGroup() }
				</span>
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
		updateTextVisibility: ( time ) => {
			dispatch( textVisibility( time ) );
		},
		eventSelected: () => {
			dispatch( eventSelected() );
		},
		onAddEvent: ( [ title, startTime, endTime, description ] ) => {
			dispatch( addEvent( title, startTime, endTime, description ) );
			dispatch( eventSelected() );
		},
	}
}

AddItemView.propTypes = {
	onAddEvent: PropTypes.func,
	times: PropTypes.array,
	textVisibility: PropTypes.bool,
	currentSegmentLength: PropTypes.number,
	selectedEvent: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)( AddItemView );
