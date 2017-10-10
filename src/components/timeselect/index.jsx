import React from 'react';
import config from '../../default.json';
import moment from 'moment';

const TimeSelect = () => {
	const determineTimeOptions = () => {
		const timeValues = [];
		var time = moment( config.day.start, 'h:mma' );
		const endTime = moment( config.day.end, 'h:mma' );

		while ( time < endTime ) {
			timeValues.push( time );
			time = moment( time ).add( 30, 'minutes' );
		}

		return timeValues;
	};

	const renderTimeOptions = () => {
		const timeArray = determineTimeOptions();

		return ( timeArray.map( ( time ) => (
			<option value={ time.format( 'h:mma' ) } key={ time.format( 'h:mma' ) }>{ time.format( 'h:mma' ) }</option>
		) ) );
	};

	return (
		<select name="time">
			{ renderTimeOptions() }
		</select>
	);
};

export default TimeSelect;
