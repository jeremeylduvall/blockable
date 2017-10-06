import React from 'react';
import Button from '../../components/button';
import Placeholder from '../../components/placeholder';
import { connect } from 'react-redux';
import { toggleVisiblity } from '../../actions';

class AddItemView extends React.Component {
	renderButtonGroup() {
		const result = [];
		const { times, onButtonClick } = this.props;

		times.forEach( function( time, index ) {
			result.push(
				<Button value={ time + ' minutes' } key={ index } onClick={ onButtonClick } />
			);
		} );

		return result;
	} 

	render() {
		return( 
			<div className='view'>
				{ this.renderButtonGroup() }
				<Placeholder />
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    times: state.times
  }
}

const mapDispatchToProps = dispatch => {
	return {
		onButtonClick: () => {
			dispatch( toggleVisiblity() )
		}
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)( AddItemView );