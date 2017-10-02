import React from 'react';
import Button from '../../Components/Button';
import TextPlaceholder from '../../Components/TextPlaceholder';

class AddItemView extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			times: [
				'45',
				'60',
				'90'
			],
			textBoxAvailable: false
		};
	}

	renderButtonGroup() {
		const result = [];

		this.state.times.forEach( function( time ) {
			result.push(
				<Button value={ time } />
			);
		} );

		return result;
	} 

	render() {
		return( 
			<div className='view'>
				{ this.renderButtonGroup() }
				<TextPlaceholder />
			</div>
		)
	}
}

// Button.propTypes = {
//   onClick: PropTypes.function,
//   value: PropTypes.string,
//   buttonColor: PropTypes.string,
//   classNames: PropTypes.array,
// };

export default AddItemView;