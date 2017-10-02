import React from 'react';
import Button from '../../components/button';
import Placeholder from '../../components/placeholder';
import { connect } from 'react-redux'

class AddItemView extends React.Component {
	renderButtonGroup() {
		const result = [];
		const { times } = this.props;

		times.forEach( function( time, index ) {
			result.push(
				<Button value={ time + ' minutes' } key={ index } />
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

export default connect(
  mapStateToProps,
  null,
)( AddItemView );